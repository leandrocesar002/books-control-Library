/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import logo from '~/assets/splash.png';
import genericProfile from '~/assets/profile.jpg';

import { Container } from '~/components/Header/styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <header>
        <img className="imgLogo" src={logo} alt="logo" />
      </header>
    </Container>
  );
}
