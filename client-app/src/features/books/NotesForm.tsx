//This file is responsible for the Main Activity form
import React, { useState, useContext, useEffect } from 'react';
import { Segment, Form, Button, Grid, Icon, Divider, Header, Progress } from 'semantic-ui-react';
import { ActivityFormValues } from '../../app/models/activity';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../app/common/form/TextInput';
import TextAreaInput from '../../app/common/form/TextAreaInput';
import SelectInput from '../../app/common/form/SelectInput';
import { category  } from '../../app/common/options/categoryOptions';
import { combineDateAndTime } from '../../app/common/util/util';
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan
} from 'revalidate';
import { RootStoreContext } from '../../app/stores/rootStore';


{/*These messages are shown as VALIDATORS, at each field */}
const validate = combineValidators({
  title: isRequired({ message: 'To όνομα του οδηγού είναι απαραίτητο' }),
  category: isRequired('Η κατηγορία του οδηγού είναι απαραίτητη'),
  description: composeValidators(
    isRequired('Η περιγραφή προβλήματος είναι απαραίτητη'),
    hasLengthGreaterThan(4)({
      message: 'Η περιγραφή πρέπει να είναι τουλάχιστον 5 χαρακτήρες'
    })
  )(),
});

interface DetailParams {
  id: string;
}


const NotesForm: React.FC<RouteComponentProps<DetailParams>> = ({
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
                   Πληροφορίες διαδικασίας επίλυσης
                   </Header>
                </Divider>
                <Field
                  name='title'
                  placeholder='Τίτλος'
                  value={activity.title}
                  component={TextInput}
                />
                <Field
                 component={SelectInput}
                  options={category}
                  name='category'
                  placeholder='Κατηγορία προβλήματος'
                  value={activity.description}
                />
                <Divider horizontal>
                   <Header as='h4'>
                        Οδηγίες διαδικασίας επίλυσης
                    </Header>
                </Divider>
                  <Field
                  name='description'
                  placeholder='Κείμενο πρώτου βήματος'
                  rows={3}
                  value={activity.description}
                  component={TextAreaInput}
                />
                  <React.Fragment>
                <Field
                  name='description'
                  placeholder='Κείμενο δεύτερου βήματος'
                  rows={3}
                  value={activity.description}
                  component={TextAreaInput}/>
                  <Field
                  name='description'
                  placeholder='Κείμενο τρίτου βήματος'
                  rows={3}
                  value={activity.description}
                  component={TextAreaInput}/> </React.Fragment>
                    <React.Fragment>
                <Field
                  name='description'
                  placeholder='Κείμενο τέταρτου βήματος'
                  rows={3}
                  value={activity.description}
                  component={TextAreaInput}/>
                  <Field
                  name='description'
                  placeholder='Κείμενο πέμπτου βήματος'
                  rows={3}
                  value={activity.description}
                  component={TextAreaInput}/> 
                  </React.Fragment>
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

export default observer(NotesForm);
