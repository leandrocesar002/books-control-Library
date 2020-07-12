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
          api.get('/library').then(response => {
          setReport(response.data);
       })

      } catch (error) {}
    }

    loadRecords();
  }, [location.search]);
  return (
    <ListAcesso>
      <div className="header">
        <h1>Menu Principal</h1>
      </div>
      <h2>Bem vindo(a)!</h2>
      {loading ? (
        <div className="load">
          <Loading />
        </div>
      ) : (
        <table>
          <tbody>
            <tr>
              
              <td className="titleColumn">Codigo de barras</td>
              <td className="titleColumn">Título</td>
              <td className="titleColumn">Autor</td>
              <td className="titleColumn">Numero de Páginas</td>
              <td className="titleColumn">Data de publicação</td>
            </tr>
            {report.map((project) => (
              <tr>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.author}</td>
                <td>{project.numberPage}</td>
                <td>{project.dtPublication}</td>
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </ListAcesso>
  );
}
