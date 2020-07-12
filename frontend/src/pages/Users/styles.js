import styled from 'styled-components';

export const ListAcesso = styled.div`
  width: 100%;
  height: auto;

  table {
    margin-top: 0px;
    width: 100%;
    border-spacing: 0 0px;
  }

  .titleColumn {
    font-size: 16px;
    font-weight: bold;
  }

  tr {
    height: 60px;
  }

  td {
    padding-left: 20px;
    margin-top: 10px;
    text-align: left;
    font-family: 'poppins', sans-serif;
    color: #888888;
    font-size: 15px;
    vertical-align: middle;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 24px;
  }

  .titleTable {
    font-size: 22px;
    color: #00507c;
    font-weight: bold;
    margin-left: 20px;
  }
`;
