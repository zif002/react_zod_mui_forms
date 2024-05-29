import { z } from 'zod';

const loginSchema = z.object({
  login: z.string().min(1, {
    message: "Requied"
  })
})

const passSchemna = z.object({
  password: z.string(),
  confirmPassword: z.string(),
}).refine((values) => values.password === values.confirmPassword, {
  message: "Passwords must match!",
  path: ["confirmPassword"]
})


export const schema = z.intersection(loginSchema, passSchemna);

export type loginSchema = z.infer<typeof schema>;
