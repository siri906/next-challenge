"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import { loginFn } from "./action";

export default function SignIn() {
  const [state, dispatch] = useFormState(loginFn, null);

  return (
    <div>
      <form action={dispatch}>
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="username" type="text" placeholder="username" />
        <Input name="password" type="password" placeholder="password" errors={state?.fieldErrors.password} required />
        <Button text="LogIn" />
      </form>
    </div>
  );
}
