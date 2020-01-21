//This file is repsonsible for showing the attenders of a specific activity
import React, { Fragment } from 'react';
import { Segment, List, Item, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IAttendee } from '../../../app/models/activity';
import { observer } from 'mobx-react-lite';

interface IProps {
  attendees: IAttendee[];
}

const ActivityDetailedSidebar: React.FC<IProps> = ({ attendees }) => {
  return (
    <Fragment>
      <Segment
        textAlign='center'
        attached='top'
        secondary
        inverted
        style={{border: 'none', background:"#2F3C7E" ,  color:"#FBEAEB" }}
      >
        {attendees.length - 1} {attendees.length === 1 ? 'Άτομο βοηθά' : 'Άτομα βοηθούν'} 
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees.map(attendee => (
            <Item key={attendee.username} style={{ position: 'relative' }}>
              {attendee.isHost && (
                <Label
                  style={{ position: 'absolute' }}
                  color='orange'
                  ribbon='right'
                >
                  Υπεύθυνος
                </Label>
              )}
              <Image size='tiny' src={attendee.image || '/assets/user.png'} />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <Link to={`/profile/${attendee.username}`}>
                    {attendee.displayName}
                  </Link>
                </Item.Header>
                {attendee.following &&
                <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>}
              </Item.Content>
            </Item>
          ))}
        </List>
      </Segment>
    </Fragment>
  );
};

export default observer(ActivityDetailedSidebar);
