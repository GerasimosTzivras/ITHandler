//This file is responsible for the Main Activity form
import React, { useState, useContext, useEffect } from 'react';
import { Segment, Form, Button, Grid, Icon, Divider, Header } from 'semantic-ui-react';
import { ActivityFormValues } from '../../app/models/activity';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../app/common/form/TextInput';
import TextAreaInput from '../../app/common/form/TextAreaInput';
import SelectInput from '../../app/common/form/SelectInput';
import DateInput from '../../app/common/form/DateInput';
import { category  } from '../../app/common/options/categoryOptions';
import {notes} from '../../app/common/options/notesOptions';
import { combineDateAndTime } from '../../app/common/util/util';
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan
} from 'revalidate';
import { RootStoreContext } from '../../app/stores/rootStore';
import { netcategory } from '../../app/common/options/networkOptions';
import { classificationcategory } from '../../app/common/options/classificationOptions';
import { harddiskcategory } from '../../app/common/options/harddiskOptions';

{/*These messages are shown as VALIDATORS, at each field */}
const validate = combineValidators({
  title: isRequired({ message: 'To ID του υπολογιστή είναι απαραίτητο' }),
  category: isRequired('Η κατηγορία του προβλήματος είναι απαραίτητη'),
  description: composeValidators(
    isRequired('Η περιγραφή προβλήματος είναι απαραίτητη'),
    hasLengthGreaterThan(4)({
      message: 'Η περιγραφή πρέπει να είναι τουλάχιστον 5 χαρακτήρες'
    })
  )(),
  notes: isRequired('Η σχετική βιβλιογράφια είναι απαραίτητη'),
  customer: isRequired('Ο πελάτης είναι απαραίτητος'),
  telephone: isRequired('Το τηλέφωνο του πελάτη είναι απαραίτητο'),
  city: isRequired('Η μοίρα είναι απαραίτητη'),
  venue: isRequired('Το γραφείο είναι απαραίτητο'),
  date: isRequired('Η ημερομηνία ολοκλήρωσης είναι απαραίτητη'),
  time: isRequired('Η ώρα ολοκλήρωσης είναι απαραίτητη')
});

interface DetailParams {
  id: string;
}

const ComputersForm: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const rootStore = useContext(RootStoreContext);
  const {
    createActivity,
    editActivity,
    submitting,
    loadActivity
  } = rootStore.activityStore;

  const [activity, setActivity] = useState(new ActivityFormValues());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      loadActivity(match.params.id)
        .then(activity => {
          setActivity(new ActivityFormValues(activity));
        })
        .finally(() => setLoading(false));
    }
  }, [loadActivity, match.params.id]);

  const handleFinalFormSubmit = (values: any) => {
    const dateAndTime = combineDateAndTime(values.date, values.time);
    const { date, time, ...activity } = values;
    activity.date = dateAndTime;
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid()
      };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  return (
    <Grid>
      <Grid.Column >
        <Segment clearing>
          <FinalForm
            validate={validate}
            initialValues={activity}
            onSubmit={handleFinalFormSubmit}
            render={({ handleSubmit, invalid, pristine }) => (
              /*The field of the form as shown with their style */
              <Form onSubmit={handleSubmit} loading={loading}>
                <Divider horizontal>
                   <Header as='h4'>
                   Γενικές πληροφορίες υπολογιστή
                   </Header>
                </Divider>
                <Form.Group widths='equal'>
                  <Field
                    name='title'
                    placeholder='Σειριακός αριθμός'
                    value={activity.title}
                    component={TextInput}
                  />
                  <Field
                    name='description'
                    placeholder='Όνομα υπολογιστή'
                    value={activity.description}
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Field
                    name='description'
                    placeholder='IP'
                    value={activity.description}
                    component={TextInput}
                  />
                  <Field
                    name='description'
                    placeholder='Τύπος υπολογιστή'
                    value={activity.description}
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Field
                    name='description'
                    placeholder='Κάτοχος'
                    value={activity.description}
                    component={TextInput}
                  />
                  <Field
                    name='description'
                    placeholder='Τοποθεσία'
                    value={activity.description}
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Field
                    name='description'
                    placeholder='Κατάσταση'
                    value={activity.description}
                    component={TextInput}
                  />
                  <Field
                  name='description'
                  placeholder='Λειτουργικό'
                  value={activity.description}
                  component={TextInput}
                />
                </Form.Group>
                 <Divider horizontal>
                   <Header as='h4'>
                   Πληροφορίες υλικού
                    </Header>
                </Divider>
                <Form.Group widths='equal'>
                  <Field
                    name='description'
                    placeholder='Μέγεθος RAM'
                    value={activity.description}
                    component={TextInput}
                  />
                  <Field
                    name='description'
                    placeholder='Τύπος RAM'
                    value={activity.description}
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Field
                    name='description'
                    placeholder='Επεξεργαστής'
                    value={activity.description}
                    component={TextInput}
                  />
                  <Field
                  name='description'
                  placeholder='Μητρική'
                  value={activity.description}
                  component={TextInput}
                />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Field
                    name='description'
                    placeholder='Μέγεθος τροφοδοτικού'
                    value={activity.description}
                    component={TextInput}
                  />
                  <Field
                    name='description'
                    placeholder='Κάρτα γραφικών'
                    value={activity.description}
                    component={TextInput}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Field
                    name='description'
                    placeholder='Τύπος δίσκου'
                    value={activity.description}
                    component={SelectInput}
                    options={harddiskcategory}
                  />
                  <Field
                  name='description'
                  placeholder='Μέγεθος δίσκου'
                  value={activity.description}
                  component={TextInput}
                />
                </Form.Group>
                <Divider horizontal>
                   <Header as='h4'>
                   Πληροφορίες δικτύου
                   </Header>
                </Divider>
                <Form.Group widths='equal'>
                <Field
                  name='customer'
                  placeholder='Τύπος δικτύου'
                  value={activity.title}
                  component={SelectInput}
                  options={netcategory}
                />
                <Field
                  name='telephone'
                  placeholder='DSLAM'
                  value={activity.title}
                  component={TextInput}
                />
                </Form.Group>
                <Form.Group widths='equal'>
                <Field
                  component={TextInput}
                  name='city'
                  placeholder='Γραφείο'
                  value={activity.city}
                />
                <Field
                  name='venue'
                  placeholder='Διαβάθμιση'
                  component={SelectInput}
                  options={classificationcategory}
                />
                </Form.Group>
                <Divider horizontal>
                   <Header as='h4'>
                        Ημερομηνία κτήσης
                    </Header>
                </Divider>
                <Form.Group widths='equal'>
                  <Field
                    component={DateInput}
                    name='date'
                    date={true}
                    placeholder='Ημερομηνία κτήσης'
                    value={activity.date}
                  />
                </Form.Group>
                <Divider horizontal>
                   <Header as='h4'>
                        Σχόλια
                    </Header>
                </Divider>
                <Form.Group widths='equal'>
                  <Field
                    name='description'
                    placeholder='Γενικά σχόλια για τον υπολογιστή'
                    rows={3}
                    value={activity.description}
                    component={TextAreaInput}
                  />
                </Form.Group>
                <Button animated='fade' loading={submitting}
                  disabled={loading || invalid || pristine}
                  floated='right'
                  style={{background:"#2F3C7E" }}
                  type='submit'>
                  <Button.Content hidden>Καταχώρηση</Button.Content>
                  <Button.Content visible>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name='check' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  </Button.Content>
                </Button>
                <Button
                  onClick={
                    activity.id
                      ? () => history.push(`/activities/${activity.id}`)
                      : () => history.push('/activities')
                  }
                  disabled={loading}
                  floated='right'
                  type='button'
                  content='Ακύρωση'
                />
                
              </Form>
            )}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ComputersForm);
