import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
}

function Logo() {
  return <Typography variant="h6">Glass Walls</Typography>;
}
