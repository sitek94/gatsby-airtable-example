import * as React from 'react';

import Footer from './footer';
import Navbar from './navbar';

type Props = {
  noFooter?: boolean;
  navbarSpacer?: boolean;
  children: React.ReactNode;
};

export default function Layout({ navbarSpacer = false, noFooter, children }: Props) {
  return (
    <div>
      <Navbar />
      {navbarSpacer && <div style={{ height: 74 }} />}
      {children}
      {!noFooter && <Footer />}
    </div>
  );
}
