"use server";
import z from "zod";

const formSchema = z
  .object({
    email: z.string(),
    username: z.string(),
    password: z.string(),
  })
  // 앞에가 성공 조건, 뒤에는 앞 조건이 안 맞을 경우
  .refine(({ password }) => password === "12345", { message: "Wrong Password", path: ["password"] });

export const loginFn = async (prevState: any, action: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = {
    email: action.get("email"),
    username: action.get("username"),
    password: action.get("password"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    console.log("result.error", result.error.flatten());
    return result.error.flatten();
  }
};
