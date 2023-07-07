import React from "react"
import { Container, Content, Img , Form, Title, RegisterLink } from './style';
import Header from "../../Components/Header";
import { Link } from 'react-router-dom';

import LoginImg from '../../assets/login.svg';
import { Input } from "../../Components/Input";
import Button from "../../Components/Button";

export default function Login(){

    function LoginFlow(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return(
        <Container>
            <Header />
            <Content>
                <Img src={LoginImg} />
                <Form onSubmit={LoginFlow}>
                    <Title>Login</Title>
                    <Input placeholder="E-mail" type="email" />
                    <Input placeholder="Senha" type="password" />
                    <Button>Entrar</Button>
                    <RegisterLink>não tem uma conta? <Link to='/register'>Registrar-se</Link></RegisterLink>
                </Form>
            </Content>
        </Container>
    )
}