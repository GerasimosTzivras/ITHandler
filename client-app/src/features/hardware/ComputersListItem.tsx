import React from 'react';
import { Item, Button, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IActivity } from '../../app/models/activity';
import { format } from 'date-fns';
import ActivityListItemAttendees from '../activities/dashboard/ActivityListItemAttendees';

const ComputersListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const host = activity.attendees.filter(x => x.isHost)[0];
  return (
    <Segment.Group >
      <Segment style={{background:"#FBEAEB" }}>
        <Item.Group >
          <Item >
            <Item.Image
              size='small'
              src={`/assets/categoryImages/${activity.category}.jpg`}
              style={{ marginBottom: 3 }}
            />
            <Item.Content>
              <Item.Content >
                {activity.description}
              </Item.Content>
            </Item.Content>
            <Item.Content>
            <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated='right'
          content='Προβολή'
          style={{background:"#2F3C7E" ,  color:"#FBEAEB" }}
        />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
};

export default ComputersListItem;
