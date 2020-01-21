//This file is responsible for the Main Activity form
import React, { useState, useContext, useEffect } from 'react';
import { Segment, Form, Button, Grid, Icon, Divider, Header, Progress } from 'semantic-ui-react';
import { ActivityFormValues } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../../app/common/form/TextInput';
import TextAreaInput from '../../../app/common/form/TextAreaInput';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import { category  } from '../../../app/common/options/categoryOptions';
import {notes} from '../../../app/common/options/notesOptions';
import { combineDateAndTime } from '../../../app/common/util/util';
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan
} from 'revalidate';
import { RootStoreContext } from '../../../app/stores/rootStore';

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
  customer: isRequired('Ο πελάτης είναι απαραίτητος'),
  telephone: isRequired('Το τηλέφωνο του πελάτη είναι απαραίτητο'),
  date: isRequired('Η ημερομηνία ολοκλήρωσης είναι απαραίτητη'),
  time: isRequired('Η ώρα ολοκλήρωσης είναι απαραίτητη')
});

interface DetailParams {
  id: string;
}


const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const rootStore = useContext(RootStoreContext);
  const {
    createActivity,
    editActivity,
    submitting,
    deleteActivity,
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
                   Καθορισμός προβλήματος
                   </Header>
                </Divider>
                <Field
                  name='title'
                  placeholder='Αναγνωριστικό υπολογιστή'
                  value={activity.title}
                  component={TextInput}
                />
                <Field
                  name='description'
                  placeholder='Περιγραφή προβλήματος'
                  rows={3}
                  value={activity.description}
                  component={TextAreaInput}
                />
                 <Divider horizontal>
                   <Header as='h4'>
                        Κατηγοριοποίηση
                    </Header>
                </Divider>
                <Field
                  component={SelectInput}
                  options={category}
                  name='category'
                  placeholder='Κατηγορία προβλήματος'
                  value={activity.category}
                />
                <Field
                  component={SelectInput}
                  options={notes}
                  name='notes'
                  placeholder='Σχετική βιβλιογράφια'
                  value={activity.notes}
                />
                <Divider horizontal>
                   <Header as='h4'>
                     Στοιχεία πελάτη
                   </Header>
                </Divider>
                <Form.Group widths='equal'>
                <Field
                  name='customer'
                  placeholder='Στοιχεία πελάτη'
                  value={activity.title}
                  component={TextInput}
                />
                <Field
                  name='telephone'
                  placeholder='Τηλέφωνο πελάτη'
                  value={activity.title}
                  component={TextInput}
                />
                </Form.Group>
                <Form.Group widths='equal'>
                <Field
                  component={TextInput}
                  name='city'
                  placeholder='Μοίρα'
                  value={activity.city}
                />
                <Field
                  component={TextInput}
                  name='venue'
                  placeholder='Γραφείο'
                  value={activity.venue}
                />
                </Form.Group>
                <Divider horizontal>
                   <Header as='h4'>
                        Εκτιμώμενη ανάκτηση
                    </Header>
                </Divider>
                <Form.Group widths='equal'>
                  <Field
                    component={DateInput}
                    name='date'
                    date={true}
                    placeholder='Date'
                    value={activity.date}
                  />
                  <Field
                    component={DateInput}
                    name='time'
                    time={true}
                    placeholder='Time'
                    value={activity.time}
                  />
                </Form.Group>
                <Divider horizontal>
                   <Header as='h4'>
                        Διαδικασία ανάκτησης
                    </Header>
                </Divider>
                  <Progress percent={activity.process} indicating progress/>
                  <Button 
                    onClick={(e) => activity.process = activity.process + 10} >
                    Εξέλιξη εργασίας
                  </Button>
                  <Button 
                    onClick={(e) => activity.process = 100} >
                    Ολοκλήρωση εργασίας
                  </Button>
                <Button animated='fade' loading={submitting}
                  disabled={loading || invalid || pristine}
                  floated='right'
                  style={{background:"#FB8122" }}
                  type='submit'>
                  <Button.Content hidden>Υποβολή</Button.Content>
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

export default observer(ActivityForm);
