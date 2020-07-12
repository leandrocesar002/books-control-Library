import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: #3762d0;
  left: 0;
  top: 0;

  header {
    top: 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: 2;
    position: fixed;
    height: 60px;
    min-width: 1300px;
    overflow: hidden;
    z-index: 9999;

    .imgLogo {
      margin-left: 70px;
      max-width: 100%;
      height: 50px;
      margin-right: 20px;
    }

    .imgPerfil {
      margin-right: 20px;
      margin-top: 10px;
      padding: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .nome {
      margin-bottom: -15px;
      margin-left: 20px;
      font-size: 16px;
      color: black;
      font-family: 'poppins', sans-serif;
    }

    .condominio {
      margin-left: 20px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      font-family: 'poppins', sans-serif;
      margin-left: auto;
      margin-right: auto;
    }

    .icon-menu-header {
      margin-left: 20px;
      margin-right: 50px;
      color: #858585;
    }

    .meuPerfil {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      margin-right: 10px;
    }

    span {
      font-size: 14px;
      margin-top: 0;
      color: #858585;
      opacity: 0.8;
    }
  }
`;
