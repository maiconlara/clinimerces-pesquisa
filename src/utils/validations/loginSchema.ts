import { requiredStringField} from "./reusableSchemes";
import {z} from "zod";

const emailRegex = /^(?![-.])[\w.-]+@(?![-.])[\w.-]+\.[a-zA-Z]{2,}$/;

export const loginSchema = z.object({
  "not-email": requiredStringField(1, 255, "O email não pode estar vazio").refine(
    (value) => value === null || emailRegex.test(value || "") || value === "",
    {
      message: "Email inválido",
    },
  ),

  "not-password": requiredStringField(1, 255, "Por favor, digite sua senha."),


});
