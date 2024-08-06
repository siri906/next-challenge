import { InputHTMLAttributes } from "react";

interface FormProps {
  name: string;
  errors?: string[];
}

export default function Input({ name, errors = [], ...rest }: FormProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <input name={name} {...rest} />
      {errors.map((error, idx) => {
        return (
          <span key={idx} className="text-red-500 font-medium">
            {error}
          </span>
        );
      })}
    </div>
  );
}
