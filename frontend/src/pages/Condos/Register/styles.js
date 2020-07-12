import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;

    button {
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

    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      margin: 0 0 15px;
      max-width: 100%;
      width: 400px;
      padding: 0 15px;
      color: black;

      &::placeholder {
        color: #858585;
      }
    }

    select {
      padding: 0 10px;
      height: 44px;
      width: 400px;
      margin-top: 15px;
      margin-bottom: 15px;
      border: 0;
      border-radius: 4px;
      color: black;

      option[value=''][disabled] {
        display: none;
      }
    }
  }

  .bodyRegister {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: auto;
    left: 0px;
  }

  .icon {
    margin-left: 20px;
    margin-top: 30px;
    cursor: pointer;
    color: black;

    &:hover {
      color: #00507c;
    }
  }

  h1 {
    font-size: 32px;
    margin-top: 20px;
    color: #858585;
    margin-bottom: 15px;
  }


  button{
    margin-top:20px;
  }
`;
