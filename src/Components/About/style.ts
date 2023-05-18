import styled from "styled-components";

export const Container = styled.section`
  margin-top: 140px;
  margin-left: 10%;
  width: 80%;
  display: flex;
  justify-content: space-around;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 10px;

  img {
    width: 500px;
  }
`;

export const ContainerText = styled.div`
  margin-top: 20px;
  width: 700px;


  h2 {
    font-size: 50px;
    color: rgba(231, 120, 12, 1);
  }
  p{
    font-size: 17px;
    font-weight: bold;
  }
`;
