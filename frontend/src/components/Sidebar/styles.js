import styled from 'styled-components';

export const CadastroUserAdm = styled.div`
  position: fixed;
  width: 280px;
  height: 100%;
  left: 0px;
  top: 60px;
  background: #ffffff;
  border-right: 1px solid #f0f0f0;
  display: flex;
  align-items: left;
  flex-direction: column;
  overflow-y: auto;

  button {
    border: none;
    background: white;

    &:hover {
      background: #00507c;
    }
  }

  .subMenuLink {
    width: 100%;
  }

  .link {
    height: 30px;
    width: 100%;
    margin-left: 70px;
    color: #858585;
    font-size: 14px;
    text-decoration: none;
    font-family: 'poppins', sans-serif;
    display: flex;
    font-weight: bold;
    align-items: center;
  }
  .icon-menu {
    margin-right: 10px !important;
    color: #00507c;
  }

  span {
    margin-top: -2px;
    white-space: nowrap;
  }

  /* input:checked + label {
    color: black;
  } */

  input {
    display: none;
  }

  #submenuinputunidade:checked + .submenuunidade {
    margin-left: 20px;
    display: block;
    max-height: 200px;
  }

  #products:checked + .submenu {
    display: none;
  }

  #submenuinputgeral:checked + .submenuunidade {
    margin-left: 20px;
    display: block;
    max-height: 200px;
    color: pink;
  }

  .border {
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 105%;
    height: 50px;
    border-radius: 100px;
    margin-left: -25px;
  }

  .borderFluxoAcesso {
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 105%;
    height: 50px;
    border-radius: 100px;
    margin-left: -25px;
    flex-direction: column;
    justify-content: center;

    .link {
      margin-left: 140px;
    }

    &:hover {
      /* background: linear-gradient(179.64deg, #00507c -13.56%, #00507c 158.3%); */
      background: #00507c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      .icon-menu-down {
        color: #fff;
      }
      .icon-menu-down-title {
        color: #fff;
      }

      .icon-menu {
        color: #fff !important;
        margin-right: 15px !important;
      }
      .link {
        color: #fff;
      }
    }

    input {
      display: none;
    }
  }

  label {
    cursor: pointer;
  }

  .border:hover {
    /* background: linear-gradient(179.64deg, #00507c -13.56%, #00507c 158.3%); */
    background: #00507c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    button {
      margin-top: 0px;
      background: #00507c;
      width: 100px;
    }

    .icon-menu {
      color: #fff !important;
      margin-right: 15px !important;
    }

    .link {
      color: #fff;
    }
  }

  .borderForSubMenu {
    &:hover {
      /* display: flex;
      align-items: center;
      height: 30px;
      border-radius: 50px;
      margin-left: -20px;
      /* background: linear-gradient(179.64deg, #00507c -13.56%, #00507c 158.3%); */
      /* background: #00507c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
      overflow: hidden;

      .icon-menu {
        /* color: #fff !important; */
        margin-left: 15px;
        margin-bottom: -3px;
      }

      li {
        margin-bottom: 8px;
        span {
          /* color: #fff; */
        }
      }
      .icon-menu-down {
        margin-top: 15px;
      }
    }
  }

  .sub {
    display: flex;
    width: 100%;
    border-radius: 100px;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
  }

  .submenu {
    display: block;
    max-height: 300px;
  }

  ul {
    margin-left: 70px;

    span {
      font-size: 14px;
    }

    li {
      margin-top: 10px;

      .icon-menu-down {
        margin-bottom: -3px;
      }

      .icon-menu {
        margin-bottom: -3px;
      }
    }

    .borderFluxoAcesso {
      display: flex;
    }
  }

  .subMenuLink {
    color: #858585;
  }

  .subMenuLink:active,
  .subMenuLink:focus {
    outline: none !important;
    outline-offset: none !important;
  }

  .icon-menu-down {
    margin-top: 2px;
    color: #00507c;
    margin-left: 25px;
  }

  .icon-menu-down-title {
    margin-top: 2px;
    color: #00507c;
    margin-left: 25px;
  }

  .submenuunidade {
    overflow: hidden;
    max-height: 0;
  }

  .link:active,
  .link:focus {
    outline: none !important;
    outline-offset: none !important;
  }
`;
