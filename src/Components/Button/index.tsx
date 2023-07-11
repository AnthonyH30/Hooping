import { ButtonComponent } from './style';

interface ButtonProps{
    children: React.ReactNode
}

export default function Button({children}: ButtonProps){
    return <ButtonComponent>{children}</ButtonComponent>
}