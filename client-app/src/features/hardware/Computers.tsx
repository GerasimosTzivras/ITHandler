import React from 'react'
import { Table , Modal ,Button, Icon, Form, Segment, Header, Progress } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
 
const Computers: React.FC = () => {
  
    return (
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Σειριακός αριθμός</Table.HeaderCell>
        <Table.HeaderCell>Όνομα</Table.HeaderCell>
        <Table.HeaderCell>IP</Table.HeaderCell>
        <Table.HeaderCell>Πληροφορίες υπολογιστή</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>1084</Table.Cell>
        <Table.Cell>114pm-mey-ws3</Table.Cell>
        <Table.Cell>11.114.1.252</Table.Cell>
        <Table.Cell>
          <Modal trigger={<Button>Εμφάνιση</Button>} basic size='small'>
            <Modal.Content>
            <Segment>
              <Form >
                <Header as='h4' dividing>
                  Γενικές πληροφορίες υπολογιστή
                </Header>
                <Form.Group widths={4}>
                  <Form.Input label='Σειριακός αριθμός' placeholder='Σειριακός αριθμός'>1084</Form.Input>
                  <Form.Input label='Όνομα υπολογιστή' placeholder='Όνομα υπολογιστή'>114pm-mey-ws3</Form.Input>
                  <Form.Input label='IP' placeholder='IP'>11.114.1.252</Form.Input>
                  <Form.Input label='Τύπος υπολογιστή' placeholder='Τύπος υπολογιστή'>Laptop</Form.Input>
                </Form.Group>
                <Form.Group widths={4}>
                  <Form.Input label='Κάτοχος' placeholder='Κάτοχος'>Τζιβράς</Form.Input>
                  <Form.Input label='Τοποθεσία' placeholder='Τοποθεσία'>ΜΕΥ</Form.Input>
                  <Form.Input label='Κατάσταση' placeholder='Κατάσταση'>EN/EN</Form.Input>
                  <Form.Input label='Λειτουργικό' placeholder='Λειτουργικό'>Windows 10 LTSB</Form.Input>
                </Form.Group>
                <Header as='h4' dividing>
                  Πληροφορίες υλικού
                </Header>
                <Form.Group widths={3}>
                  <Form.Input label='Μέγεθος RAM' placeholder='Μέγεθος RAM' >4.00 GB</Form.Input>
                  <Form.Input label='Τύπος RAM' placeholder='Τύπος RAM' >DDR3</Form.Input>
                  <Form.Input label='Επεξεργαστής' placeholder='Επεξεργαστής' >Intel i3</Form.Input>
                  <Form.Input label='Μητρική' placeholder='Μητρική' />
                </Form.Group>
                <Form.Group widths={3}>
                  <Form.Input label='Μέγεθος τροφοδοτικού' placeholder='Μέγεθος τροφοδοτικού' />
                  <Form.Input label='Τύπος δίσκου' placeholder='Τύπος δίσκου'>HDD</Form.Input>
                  <Form.Input label='Μέγεθος δίσκου' placeholder='Μέγεθος δίσκου' >224 GB</Form.Input>
                  <Form.Input label='Κάρτα γραφικών' placeholder='Κάρτα γραφικών'>On board</Form.Input>
                </Form.Group>
                <Header as='h4' dividing>
                  Πληροφορίες δικτύου
                </Header>
                <Form.Group widths={2}>
                  <Form.Input label='Τύπος δικτύου' placeholder='Τύπος δικτύου'>MIS</Form.Input>
                  <Form.Input label='DSLAM' placeholder='DSLAM' />
                  <Form.Input label='Γραφείο' placeholder='Γραφείο'>ΠΛΗΡ</Form.Input>
                  <Form.Input label='Διαβάθμιση' placeholder='Διαβάθμιση'>Απόρρητο</Form.Input>
                </Form.Group>
                <Header as='h4' dividing>
                  Γενικά σχόλια
                </Header>
                <Form.Group widths={2}>
                  <Form.Input placeholder='Γενικά σχόλια για τον υπολογιστή...'></Form.Input>
                </Form.Group>
                <Header as='h4' dividing>
                  Στατιστικά υπολογιστή
                </Header>
                  <div>
                  <Progress percent={33} indicating progress>Προβλήματα υλικού</Progress>
                  </div>
                  <div>
                  <Progress percent={55} indicating progress>Προβλήματα δικτύου</Progress>
                  </div>
                  <div>
                  <Progress percent={95} indicating progress>Υπόλοιπος χρόνος ζωής</Progress>
                  </div>
              </Form>
            </Segment>
            </Modal.Content>
            <Modal.Actions>
              <Button as={NavLink} basic to='/computersform' color='blue' inverted>
                <Icon name='wrench' /> Επεξεργασία καταχώρησης
              </Button>
              <Button basic color='red' inverted>
                <Icon name='attention' /> Καταχώρηση προβλήματος
              </Button>
            </Modal.Actions>
          </Modal>
          <Button animated="vertical" as={NavLink} to='/computersdetails' floated="right" style={{background:"#2F3C7E" }} color="black" inverted>
                <Button.Content hidden>Σύνοψη</Button.Content>
                <Button.Content visible>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name='envelope open outline' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                </Button.Content>
          </Button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1087</Table.Cell>
        <Table.Cell>114pm-mey-ws4</Table.Cell>
        <Table.Cell>11.114.1.250</Table.Cell>
        <Table.Cell >
        <Modal trigger={<Button>Εμφάνιση</Button>}>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        </Modal>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    )
};
  export default observer(Computers);