//This file is repsonsible for the main page that shows
//the problems
//It lists the activities grouped by dates
import React, { useContext, Fragment } from 'react';
import { Item, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivityListItem from '../activities/dashboard/ActivityListItem';
import { RootStoreContext } from '../../app/stores/rootStore';
import {format} from 'date-fns';
import ComputersListItem from './ComputersListItem';


const ComputerHistory: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { activitiesByDate } = rootStore.activityStore;
  return (
    <Fragment>
      {activitiesByDate.map(([group, activities]) => (
        <Fragment key={group}>
          <Item.Group divided>
            {activities.map(activity => (
              <ComputersListItem key={activity.id} activity={activity} />
            ))}
          </Item.Group>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default observer(ComputerHistory);
