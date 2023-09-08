import React, { FC, Fragment } from 'react';
import './NotFound.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
  <Fragment>
    <Header />
    <div className="notfound">
      <div className="notfound-error">
        <h1>Error 404</h1>
        <h3>Page not found. Please enter a correct address </h3>
      </div>
    </div>
    <Footer />
  </Fragment>
);

export default NotFound;
