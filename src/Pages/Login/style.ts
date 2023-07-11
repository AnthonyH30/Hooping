import styled from "styled-components";


export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    padding-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 600px){
        padding-bottom: 80px;
        padding-top: 0px;
    }
`;

export const Content = styled.section`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    max-width: 1440px;

    @media(max-width: 768px){
        flex-direction: column;
        gap: 50px;
        margin-block: 50px;
    }
`;

export const Img = styled.img`
    width: 35%;
    min-width: 300px;
`;

export const Title = styled.h2`
    font-size: 30px;
    color: white;
    margin-block: 20px;
`;

export const Form = styled.form`
    width: 35%;
    height: 310px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(231, 120, 12, 1);
    border-radius: 8px;
    min-width: 300px;
`;

export const RegisterLink = styled.p`
    font-size: 13px;
    color: white;
    margin-top: 20px;

    a{
        color: #000;
    }
`;