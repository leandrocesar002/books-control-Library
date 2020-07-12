import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ListAcesso } from './styles';

import Loading from '~/components/Loading';

import api from '~/services/api';

// import { Container } from './styles';

export default function Dashboard() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState([]);

  useEffect(() => {
    // Faz a requisição com parâmetros de pesquisa e paginação
     function loadRecords() {
      try {
          api.get('/users').then(response => {
          setReport(response.data);
       })

      } catch (error) {}
    }

    loadRecords();
  }, [location.search]);
  return (
    <ListAcesso>
      <div className="header">
        <h1>Consulta de Usuários</h1>
      </div>
      <h2>Lista de Usuarios</h2>
      {loading ? (
        <div className="load">
          <Loading />
        </div>
      ) : (
        <table>
          <tbody>
            <tr>
              
              <td className="titleColumn">Nome</td>
              <td className="titleColumn">Email</td>
              <td className="titleColumn">Funcão</td>
            </tr>
            {report.map((project) => (
              <tr>
                <td>{project.name}</td>
                <td>{project.email}</td>
                <td>{project.funcao}</td>
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </ListAcesso>
  );
}
