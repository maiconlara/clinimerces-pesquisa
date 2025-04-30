"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button, Input, PasswordInput, SubmitButton, useToast } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/utils/hooks/useAuth";
import { useForm } from "react-hook-form";
import { logo } from "@/assets/images";
import { loginSchema } from "@/utils";
import { AxiosError } from "axios";
import Image from "next/image";
import { z } from "zod";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

type Form = z.infer<typeof loginSchema>;

export const LoginForm = () => {
    const { toast } = useToast();
    const { push } = useRouter();
    const { login } = useAuth();

    const HandleLoginRequest = async (postData: Form) => {
        const { data } = await api.post("/login", postData);
        return data;
    };


    const { mutate, isPending } = useMutation({
        mutationFn: HandleLoginRequest,
        onSuccess: (data) => {
            login(data)
            toast({
                duration: 4000,
                className: "bg-success text-white",
                title: "Sucesso",
                description: "Teste de login, nao irá redirecionar",
            });
            push("/home")
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                toast({
                    duration: 4000,
                    className: "bg-error",
                    variant: "destructive",
                    title: "Erro no login!",
                    description:
                        "Não se preocupe, o erro foi do nosso lado. Já fomos notificados e iremos trabalhar para corrigir.",
                });
                return;
            }
            if(response.status === 401) {
                
                toast({
                    duration: 4000,
                    className: "bg-error",
                    variant: "destructive",
                    title: "Credenciais Inválidas",
                    description: "Não encontramos esse usuário cadastrado no sistema. Tente Novamente.",
                });
            }
        },
    });

    const form = useForm<Form>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data: Form) {
        mutate(data);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                id="login-form"
                autoComplete="nope"
                className="flex h-full min-h-[calc(100vh-86px)] w-full max-w-[86vw] flex-col items-center justify-center gap-10 md:max-w-[426px]"
            >
                <Image height={500} width={500} src={logo} className="h-auto w-[288px]" alt="Clinimercês" />
                <h1 className="cursor-default text-3xl font-bold text-green-strong dark:text-white">Seja bem-vindo</h1>
                <div className="flex w-full flex-col gap-4 text-white">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="text" placeholder="Digite seu email" className="" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <PasswordInput
                                        {...field}
                                        autoComplete="off"
                                        type="password"
                                        placeholder="Digite sua senha"
                                        className=""
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* <Button type="submit" variant="default">
                    </Button> */}
                    <SubmitButton form="login-form" isLoading={isPending}>
                        Entrar
                    </SubmitButton>

                    <div className="flex w-full flex-row justify-end">
                        <p className="cursor-pointer text-base text-secondary hover:text-secondary/80 dark:text-white transition-colors dark:hover:text-white/70">
                            Esqueci minha senha
                        </p>
                    </div>
                </div>
            </form>
        </Form>
    );
};
