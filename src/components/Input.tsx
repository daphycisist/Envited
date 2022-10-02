import { FC, InputHTMLAttributes } from 'react';

interface InputProps {
  label?: string;
}

const Input: FC<InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  label,
  name,
  type = 'text',
  onChange,
}) => {
  return (
    <label htmlFor={name} className="flex flex-col mb-4">
      <span className="mb-2 text-envited-grey-500">{name}</span>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="border border-envited-grey-200 py-2 px-2 outline-hidden focus:outline-1 rounded-md"
      />
    </label>
  );
};

export default Input;
