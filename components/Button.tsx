"use client";
import { useFormStatus } from "react-dom";

export default function Button({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="bg-slate-100">
      {text}
    </button>
  );
}
