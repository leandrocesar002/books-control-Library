import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div``;

export const Content = styled.div`
  width: 60%;
  height: 80%;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 20px;
  border: 2px solid #f0f0f0;
  margin: auto;
  border-style: solid;
  display: flex;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    img {
      max-width: 100%;
      height: 20%;
      margin-left: 0px;
    }
  }

  .signup {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
      margin-top: 15px;
      border-radius: 4px;
      width: 400px;
      max-width: 100%;
      height: 45px;
      background-color: #00507c;
      font-family: 'poppins', sans-serif;
      border: none;
      color: white;
      transition: 0.5s;

      &:hover {
        border-radius: 10px;
        background: ${darken(0.05, '#00507c')};
      }
    }

    h1 {
      font-size: 40px;
      margin-top: 0px;
      margin: 0;
      color: #858585;
      margin-bottom: 15px;
    }

    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      margin: 0 0 15px;
      width: 400px;
      padding: 0 15px;
      color: black;

      &::placeholder {
        color: #858585;
      }
    }

    a {
      margin-top: 10px;
      color: #858585;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    span {
      color: #ff1a1a;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    .infoActivation {
      color: rgba(0, 0, 0, 0.9);

      label {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    .checkbox {
      display: flex;
      width: 100%;
      height: 30px;
      align-items: center;
      p {
        margin-top: 15px;
        margin-left: 0px;
      }

      span {
        color: #00507c;
      }
    }
  }
`;
