import styled from "styled-components";

export const Container = styled.header`
    min-width: 100vw;
    height: 80px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
    box-shadow: 2px 2px 2px 2px black;
    -webkit-box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.5);
    position: fixed;
    top: 0px;

    @media(max-width: 600px){
        top: calc(100vh - 80px);
    }

    h2{
        font-size: 25px;

        a{
            color: #e7780c;
        }
    }

    
`;

export const Button = styled.a`
    text-decoration: none;
    color: white;
    background: rgb(231,120,12);
    background: linear-gradient(22deg, rgba(231,120,12,1) 20%, rgba(213,29,29,1) 80%);
    padding: 10px 30px;
    border-radius: 20px;
`;