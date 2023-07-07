import { FC, InputHTMLAttributes } from 'react';
import { InputComponent } from './style.ts'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
}

export const Input: FC<InputProps> =({ placeholder ,...props}) => {
    return <InputComponent placeholder={placeholder} {...props} />
}