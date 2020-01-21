//This file is responsible for the comment section at the detailed activity page
import React, { Fragment, useContext, useEffect } from 'react';
import { Segment, Header, Form, Button, Comment } from 'semantic-ui-react';
import { RootStoreContext } from '../../../app/stores/rootStore';
import {Form as FinalForm, Field} from 'react-final-form';
import { Link } from 'react-router-dom';
import TextAreaInput from '../../../app/common/form/TextAreaInput';
import { observer } from 'mobx-react-lite';
import {formatDistance} from 'date-fns';

const ActivityDetailedChat = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    createHubConnection,
    stopHubConnection,
    addComment,
    activity
  } = rootStore.activityStore;

  useEffect(() => {
    createHubConnection();
    return () => {
      stopHubConnection();
    }
  }, [createHubConnection, stopHubConnection])

  return (
    <Fragment>
      <Segment
        textAlign='center'
        attached='top'
        inverted
        style={{background:"#2F3C7E" ,  color:"#FBEAEB" , border: 'none'  }} 
        
      >
        <Header >Σχόλια για το πρόβλημα</Header>
      </Segment>
      <Segment attached>
        <Comment.Group>
          {activity && activity.comments && activity.comments.map((comment) => (
          <Comment key={comment.id}>
          <Comment.Avatar src={comment.image || '/assets/user.png'} />
          <Comment.Content>
            <Comment.Author as={Link} to={`/profile/${comment.username}`}>{comment.displayName}</Comment.Author>
            <Comment.Metadata>
              <div>{formatDistance(comment.createdAt, new Date())}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
          </Comment.Content>
        </Comment>
          ))}

          <FinalForm 
            onSubmit={addComment}
            render={({handleSubmit, submitting, form}) => (
              <Form onSubmit={() => handleSubmit()!.then(() => form.reset())}>
              <Field 
                name='body'
                component={TextAreaInput}
                rows={2}
                placeholder='Άφησε το σχόλιο σου'
              />
              <Button
                loading={submitting}
                content='Προσθήκη σχολίου'
                labelPosition='left'
                icon='edit'
                style={{background:"#2F3C7E" ,  color:"#FBEAEB" }}
              />
            </Form>
            )}
          />

        </Comment.Group>
      </Segment>
    </Fragment>
  );
};

export default observer(ActivityDetailedChat);
