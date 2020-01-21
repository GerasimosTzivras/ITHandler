//This file is responsible for the navigating menu at the top of the page
import React, { useContext } from 'react';
import { Menu, Container, Button, Dropdown, Image, Icon, Modal, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';

const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to='/'>
        <Icon name="wrench"/>
          ΙΤ Handler
        </Menu.Item>
        <Menu.Item name='Προβλήματα' as={NavLink} to='/activities' />
        <Menu.Item name='Βιβλιογραφία' as={NavLink} to='/notes' />
        <Menu.Item name='Υλικό' as={NavLink} to='/computers' />
        
        <Menu.Item>
          <Button animated="vertical" as={NavLink} to='/createActivity' floated="right" style={{background:"#2F3C7E" }} color="black" inverted>
                <Button.Content hidden>Kαταχώρηση</Button.Content>
                <Button.Content visible>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name='compose' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                </Button.Content>
          </Button>
        </Menu.Item>
        {user && (
          <Menu.Item position='right'>
            <Image avatar spaced='right' src={user.image || '/assets/user.png'} />
            <Dropdown pointing='top left' text={user.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user.username}`}
                  text='Το προφίλ μου'
                  icon='user'
                />
                <Dropdown.Item
                  as={Link}
                  to='/createActivity'
                  text='Πρόβλημα'
                  icon='compose'
                />
                <Dropdown.Item
                  as={Link}
                  to='/notesform'
                  text='Οδηγός'
                  icon='compose'
                />
                <Dropdown.Item
                  as={Link}
                  to='/computersform'
                  text='Υλικό'
                  icon='compose'
                />
                <Modal
                  trigger={<Dropdown.Item text='Βοήθεια' icon='help'  />}
                  basic
                  size='small'
                >
                  <Header icon='help' content='ITHandler' />
                  <Modal.Content>
                    <p>Η παρούσα εφαρμογή αποτελεί μια προσπάθεια για καταγραφή των βλαβών που έρχονται σε ένα γραφείο μηχανογράφησης. Μέσω διαφόρων λειτουργιών επιτρέπεται η καταγραφή των βλαβών, η καταγραφή του υλικού της μονάδος, ιστορικό βλαβών και η αντίστοιχη βιβλιογράφια</p>
                  </Modal.Content>
                  <Modal.Content>
                    <p>Στην καρτέλα Προβλήματα, υπάρχουν όλες οι βλάβες είτε είναι προς επίλυση, είτε έχουν ολοκληρωθεί.</p>
                  </Modal.Content>
                  <Modal.Content>
                    <p>Στην καρτέλα Βιβλιογραφία, υπάρχουν οι σημειώσεις που βοηθούν στην αντιμετώπιση των βλαβών.</p>
                  </Modal.Content>
                  <Modal.Content>
                    <p>Στην καρτέλα Υλικό, υπάρχουν οι πληροφορίες για κάθε υπολογιστή της μονάδος.</p>
                  </Modal.Content>
                  <Modal.Content>
                    <p>Στο κουμπί της καταχώρησης, γίνεται η καταχώρηση νέας βλάβης.</p>
                  </Modal.Content>
                  <Modal.Content>
                    <p>Για οποιοδήποτε πρόβλημα μην επικοινωνήσετε γιατί δεν μιλάμε σε ηλίθιους.</p>
                  </Modal.Content>
                </Modal>
                <Dropdown.Item onClick={logout} text='Αποσύνδεση' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
        
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
