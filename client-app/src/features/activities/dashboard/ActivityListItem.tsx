import React from 'react';
import { Item, Button, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IActivity } from '../../../app/models/activity';
import { format } from 'date-fns';
import ActivityListItemAttendees from './ActivityListItemAttendees';

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const host = activity.attendees.filter(x => x.isHost)[0];
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size='medium'
              src={`/assets/categoryImages/${activity.category}.jpg`}
              style={{ marginBottom: 3 }}
            />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
                {activity.process === 100 && (
                  <Icon color='green' name='check' />
                )}
              </Item.Header>
              <Item.Description>
                Κύριος υπεύθυνος: 
                <Link to={`/profile/${host.username}`}> {host.displayName}</Link>
              </Item.Description>
              {activity.isHost && (
                <Item.Description>
                  <Label
                    basic
                    style={{background:"#2F3C7E" , color:"white" }} 
                    content='Είστε ο κύριος υπεύθυνος'
                  />
                </Item.Description>
              )}
              {activity.isGoing && !activity.isHost && (
                <Item.Description>
                  <Label
                    basic
                    color='green'
                    content='Συμμετέχετε στην επίλυση'
                  />
                </Item.Description>
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment clearing>
        {/*
        <Icon name='clock' /> {format(activity.date, 'h:mm a')}
        */}        
        <Icon name='marker' /> {activity.venue}, {activity.city}
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated='right'
          content='Προβολή'
          style={{background:"#2F3C7E" ,  color:"#FBEAEB" }} 
        />
      </Segment>
      <Segment secondary>
        <ActivityListItemAttendees attendees={activity.attendees} />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
