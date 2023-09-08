import React, { FC, Fragment } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Video from '../VideoItem/VideoItem';
import Container from '../Container/Container';

interface HomeProps {}

const Home: FC<HomeProps> = () => ( 

            <Fragment>
              <Header />
              <Container />
              <Footer />
            </Fragment>
          
);

export default Home;
