import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import tw from 'twin.macro';

export default function Navbar() {
  return (
    <Nav>
      <Logo to="/">Szklane</Logo>

      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
        <NavLink to="/">Strona główna</NavLink>


        <NavLink to="#">Realizacje</NavLink>

        <NavLink to="#">Kalkulator</NavLink>

        <NavLink to="/gallery">Galeria</NavLink>

        <NavLink to="/contact">Kontakt</NavLink>
      </div>
    </Nav>
  );
}

const Logo = tw(GatsbyLink)`
  text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700 absolute ml-6
`

const Nav = tw.nav`
  z-50 w-full fixed bg-white shadow flex items-center
`;

const NavLink = tw(GatsbyLink)`
  border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6
`;

// const NavItem = tw(NavLink)`
//   mr-6
// `;
