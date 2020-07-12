import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  FiBookOpen,
  FiUsers,
  FiBook,
} from 'react-icons/fi';

import { signOut } from '~/store/modules/auth/actions';

import { CadastroUserAdm } from '~/components/Sidebar/styles';

export default function Sidebar() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [hidden, setHidden] = useState(false);

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleClick() {
    if (!hidden) {
      setHidden(true);
    } else setHidden(false);
  }

  return (
    <div className="container">
      <CadastroUserAdm>
        <div className="border">
          <Link to="/dashboard" className="link">
            <FiBookOpen size={16} className="icon-menu" />
            <span>Consultar Livros</span>
          </Link>
        </div>

        {
          <div className="border">
            <Link to="/books" className="link">
              <FiBook size={16} className="icon-menu" />
              <span>Cadastrar Livros</span>
            </Link>
          </div>
        }

        {
          <div className="border">
            <Link to="/usuarios" className="link">
              <FiUsers size={16} className="icon-menu" />
              <span>Consultar Usuários</span>
            </Link>
          </div>
        }

        {
          <div className="border">
            <Link to="/registroUsuarios" className="link">
              <FiUsers size={16} className="icon-menu" />
              <span>Cadastrar Usuários</span>
            </Link>
          </div>
        }

      </CadastroUserAdm>
    </div>
  );
}
