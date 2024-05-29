import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, schema } from "./schema";
import { Button, Container, Stack } from "@mui/material";
import { Input, InputPassword } from "@/components/fields/input";

export const RegistrationForm = () => {
  const form = useForm<loginSchema>({
    resolver: zodResolver(schema)
  })
  const onSubmit = (values: loginSchema) => {
    console.log(values)
  }
  return <FormProvider {...form}>
    <Container maxWidth="sm" component="form" onSubmit={form.handleSubmit(onSubmit)}>
      <Stack sx={{ gap: 2 }}>
        <Input<loginSchema> name="login" label="Login" />
        <InputPassword<loginSchema> name="password" label="Password" />
        <InputPassword<loginSchema> name="confirmPassword" label="Confirm password" />
      </Stack>
      <Stack sx={{ gap: 2 }}>
        <Button type="submit" >Submit</Button>
      </Stack>
    </Container>
  </FormProvider>;
};