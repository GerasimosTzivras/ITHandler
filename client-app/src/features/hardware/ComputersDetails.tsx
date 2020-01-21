//This file is responsible for the page that the user sees
//when he chooses a specific event, but only 
//the DETAILS , not the picture , the comments and the other users 
import React, { Fragment, useContext, useEffect } from 'react';
import { Segment, Grid, Icon, Divider, Header, Progress, Tab, Label, Item, Button } from 'semantic-ui-react';
import { IActivity } from '../../app/models/activity';
import {format} from 'date-fns';
import ActivityListItem from '../activities/dashboard/ActivityListItem';
import {RootStoreContext} from '../../app/stores/rootStore'
import ActivityList from '../activities/dashboard/ActivityList';
import ComputersHistory from './ComputersHistory';
import ComputersDashboard from './ComputersDashboard';
import ComputersForm from './ComputersForm';
import { Link, NavLink } from 'react-router-dom';


const panes = [
    {
      menuItem: 'Γενικές πληροφορίες υπολογιστή',
      render: () => <Tab.Pane attached={false}>
          <Segment.Group>
      <Segment attached='top' style={{background:"#FBEAEB"}}>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' style={{color:"#2F3C7E" }} name='tag' />
          </Grid.Column>
          <Grid.Column width={15}>
            1084
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached style={{background:"#FBEAEB"}}>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='id badge outline' size='large' style={{color:"#2F3C7E" }} />
          </Grid.Column>
          <Grid.Column width={15}>
            114pm-mey-ws3      
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached style={{background:"#FBEAEB"}}>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='map outline' size='large' style={{color:"#2F3C7E" }} />
          </Grid.Column>
          <Grid.Column width={15}>
               11.114.1.252    
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached style={{background:"#FBEAEB"}}>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='desktop' size='large' style={{color:"#2F3C7E" }} />
          </Grid.Column>
          <Grid.Column width={15}>
              Laptop      
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached style={{background:"#FBEAEB"}}>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='user' size='large' style={{color:"#2F3C7E" }} />
          </Grid.Column>
          <Grid.Column width={15}>
              Τζιβράς
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached style={{background:"#FBEAEB"}}>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='building' size='large' style={{color:"#2F3C7E" }} />
          </Grid.Column>
          <Grid.Column width={11}>
            ΜΕΥ
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached style={{background:"#FBEAEB"}}>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='power off' size='large' style={{color:"#2F3C7E" }} />
          </Grid.Column>
          <Grid.Column width={11}>
            ΕΝ/ΕΝ
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached style={{background:"#FBEAEB"}}>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='windows' size='large' style={{color:"#2F3C7E" }} />
          </Grid.Column>
          <Grid.Column width={11}>
            Windows 10 LTSB
          </Grid.Column>
        </Grid>
      </Segment>      
    </Segment.Group>
      </Tab.Pane>,
    },
    {
      menuItem: 'Πληροφορίες υλικού',
      render: () => <Tab.Pane attached={false}>
      <Segment.Group>
  <Segment attached='top' style={{background:"#FBEAEB"}}>
    <Grid>
      <Grid.Column width={1}>
        <Icon size='large' style={{color:"#2F3C7E" }} name='dashboard' />
      </Grid.Column>
      <Grid.Column width={15}>
        4.00 GB
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='cog' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={15}>
        DDR3     
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='microchip' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={15}>
           Intel i3  
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='cogs' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={15}>
          Asus    
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='plug' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={15}>
          555W
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='hdd outline' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={11}>
        HDD
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='database' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={11}>
        224 GB
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='film' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={11}>
        On board
      </Grid.Column>
    </Grid>
  </Segment>      
</Segment.Group>
  </Tab.Pane>,
    },
    {
      menuItem: 'Πληροφορίες δικτύου',
      render: () => <Tab.Pane attached={false}>
      <Segment.Group>
  <Segment attached='top' style={{background:"#FBEAEB"}}>
    <Grid>
      <Grid.Column width={1}>
        <Icon size='large' style={{color:"#2F3C7E" }} name='signal' />
      </Grid.Column>
      <Grid.Column width={15}>
        MIS
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='server' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={15}>
        DSLAM     
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='home' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={15}>
           PLHR    
      </Grid.Column>
    </Grid>
  </Segment>
  <Segment attached style={{background:"#FBEAEB"}}>
    <Grid verticalAlign='middle'>
      <Grid.Column width={1}>
        <Icon name='shield alternate' size='large' style={{color:"#2F3C7E" }} />
      </Grid.Column>
      <Grid.Column width={15}>
          Απόρρητο      
      </Grid.Column>
    </Grid>
  </Segment>
      
</Segment.Group>
  </Tab.Pane>,
    },
    {
        menuItem: 'Διαθέσιμο ιστορικό',
        render: () => <Tab.Pane attached={false}>
            <ComputersDashboard/>
        </Tab.Pane>,
      },
      
  ]
  
const ComputersDetails: React.FC = ({}) => {
  
  const rootStore = useContext(RootStoreContext);
  
  const {
    loadActivities,  } = rootStore.activityStore;
  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  return (
    <React.Fragment>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      <br/>
      
        <Button.Group fluid>
          <Button  as={NavLink} color="violet" to='/computersform' inverted>
              <Icon name='wrench' /> Επεξεργασία καταχώρησης
          </Button>
          <Button.Or text='ή' color="brown"/>
          <Button color="red" negative inverted>
            <Icon name='attention' /> Καταχώρηση προβλήματος
          </Button>
      </Button.Group>
    </React.Fragment>
  );
};

export default ComputersDetails;
