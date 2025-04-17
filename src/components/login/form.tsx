"use client";

import Image from "next/image";
import { logo } from "@/assets/images";
import { Button, Input } from "@/components";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/utils";

type Form = z.infer<typeof loginSchema>;

export const LoginForm = () => {
    const form = useForm<Form>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            "not-email": "",
            "not-password": "",
        },
    });

    function onSubmit(data: Form) {
        alert(data["not-email"]);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                id="contact-form"
                autoComplete="nope"
                className="flex h-full min-h-[calc(100vh-86px)] w-full max-w-[86vw] md:max-w-[426px] flex-col items-center justify-center gap-10"
            >
                <Image height={500} width={500} src={logo} className="h-auto w-[288px]" alt="Clinimercês" />
                <h1 className="cursor-default text-3xl font-bold text-white">Seja bem-vindo</h1>
                <div className="flex w-full flex-col gap-4 text-white">
                    <FormField
                        control={form.control}
                        name="not-email"
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
                        name="not-password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
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

                    <Button type="submit" variant="default">
                        Entrar
                    </Button>
                </div>
            </form>
        </Form>
    );
};
