//This file is responsible for the page that is shown when 
//a user accesses our site
import React, { useContext, Fragment } from 'react';
import { Container, Segment, Header, Button, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';

const HomePage = () => {
  const token = window.localStorage.getItem('jwt');
  const rootStore = useContext(RootStoreContext);
  const { user, isLoggedIn } = rootStore.userStore;
  const {openModal} = rootStore.modalStore;
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' style={{color:"#2F3C7E" }} inverted>
          <Icon name="wrench" />
          IT Handler
        </Header>
        {isLoggedIn && user && token ? (
          /*This section is shown when the user is logged in*/
          <Fragment>
            <Header as='h2'  style={{color:"#2F3C7E" }} inverted content={`Καλώς ήρθες πάλι ${user.displayName}`} />
            <Button as={Link} style={{background:"#2F3C7E" ,  color:"#FBEAEB" }} to='/activities' size='huge' inverted>
              Είσοδος
            </Button>
          </Fragment>
        ) : (
          /*This section is shown when the user is not logged in*/
          <Fragment>
          {/*<Header as='h2' inverted content={`Για να αποκτήσεις πρόσβαση πρέπει να συνδεθείς`} />*/}
          <Button onClick={() => openModal(<LoginForm />)} size='huge' inverted>
            Είσοδος
          </Button>
          <Button onClick={() => openModal(<RegisterForm />)} size='huge' inverted>
            Εγγραφή
          </Button>
        </Fragment>
        )}
      </Container>
    </Segment>
  );
};

export default HomePage;
