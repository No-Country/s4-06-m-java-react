import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavLinkPersonalizado({
  to,
  clase,
  children,
  claseInactive,
  ...props
}) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => (isActive ? clase : claseInactive)}
      to={to}
    >
      {children}
    </NavLink>
  );
}