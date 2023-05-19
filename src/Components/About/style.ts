import styled from "styled-components";

export const Container = styled.section`
  margin: 10px;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 20px;

  img {
    width: 500px;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 100px;
    img {
      width: 90%;
    }
  }
`;

export const ContainerText = styled.div`
  width: 60%;

  h2 {
    font-size: 50px;
    color: rgba(231, 120, 12, 1);
  }
  p {
    font-size: 17px;
    font-weight: bold;
    text-align: justify;
  }
  @media (max-width: 800px) {
    width: 95%;
  }
`;
