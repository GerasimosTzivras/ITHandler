//This file is responsible for the page that the user sees
//when he chooses a specific event, but only 
//the DETAILS , not the picture , the comments and the other users 
import React from 'react';
import { Segment, Grid, Icon, Divider, Header, Progress } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import {format} from 'date-fns';

const ActivityDetailedInfo: React.FC<{activity: IActivity}> = ({activity}) => {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' style={{color:'#2F3C7E'}} name='book' />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{activity.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='list' size='large' style={{color:'#2F3C7E'}} />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{activity.notes}</p>          
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='male' size='large' style={{color:'#2F3C7E'}} />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{activity.customer}</p>          
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='phone' size='large' style={{color:'#2F3C7E'}} />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{activity.telephone}</p>          
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='calendar' size='large' style={{color:'#2F3C7E'}} />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(activity.date, 'eeee do MMMM')} at {format(activity.date!, 'h:mm a')}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='marker' size='large' style={{color:'#2F3C7E'}} />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>
              {activity.venue}, {activity.city}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
      <Progress percent={activity.process} indicating progress>Ποσοστό επίλυσης</Progress>
      </Segment>
      
    </Segment.Group>
  );
};

export default ActivityDetailedInfo;
