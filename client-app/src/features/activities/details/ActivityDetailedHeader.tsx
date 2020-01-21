//This file is responsible for the page that the user sees
//when he chooses a specific activity, but only the header version
//that includes this time the photo
import React, { useContext, Fragment } from 'react';
import { Segment, Item, Header, Button, Image, Icon } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
//import { format } from 'date-fns';
import { RootStoreContext } from '../../../app/stores/rootStore';

const activityImageStyle = {
  filter: 'brightness(50%)'
};

const activityImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const ActivityDetailedHeader: React.FC<{ activity: IActivity }> = ({
  activity
}) => {
  const host = activity.attendees.filter(x => x.isHost)[0];
  const rootStore = useContext(RootStoreContext);
  const { attendActivity, cancelAttendance, loading } = rootStore.activityStore;
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image
          src={`/assets/categoryImages/${activity.category}.jpg`}
          fluid
          style={activityImageStyle}
        />
        <Segment style={activityImageTextStyle} basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={activity.title}
                  style={{ color: 'white' }}
                />
                <p>Κατηγορία: {activity.category}</p>
                {activity.process === 100 && (
                  <Fragment>
                    <Icon color='green' name='check'></Icon>
                    <Header color='green'>Έτοιμο</Header>
                  </Fragment>
                  
                )}
                {/*<p>{format(activity.date, 'eeee do MMMM')}</p>
                <p>
                  Κύριος υπεύθυνος{' '}
                  <Link to={`/profile/${host.username}`}>
                    <strong>{host.displayName}</strong>
                  </Link>
                </p> */}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      {/*This section is responsible for */}
      <Segment clearing attached='bottom'>
        {activity.isHost ? (
          <React.Fragment>
          <Button
            as={Link}
            to={`/manage/${activity.id}`}
            style={{background:"#2F3C7E" ,  color:"#FBEAEB" }}
            floated='right'
          >
            Επεξεργασία προβλήματος
          </Button>
          <Button
          as={Link}
          to={`/computersdetails`}
          style={{background:"#2F3C7E" ,  color:"#FBEAEB" }}
          floated='left'
        >
          Πληροφορίες υπολογιστή
        </Button>
        </React.Fragment>
        ) : activity.isGoing ? (
          <React.Fragment>
          <Button loading={loading} onClick={cancelAttendance}>
            Ακύρωση βοήθειας
          </Button>
          <Button
          as={Link}
          to={`/computersdetails`}
          style={{background:"#2F3C7E" ,  color:"#FBEAEB" }}
          floated='left'
        >
          Πληροφορίες υπολογιστή
        </Button>
          </React.Fragment>
        ) : (
          <Button 
          loading={loading} 
          onClick={attendActivity} 
          style={{background:"#2F3C7E" ,  color:"#FBEAEB" }}>
            Βοήθησε !
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default observer(ActivityDetailedHeader);