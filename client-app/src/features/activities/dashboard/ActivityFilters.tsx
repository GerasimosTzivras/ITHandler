//This page is responsible for the right menu at activity dashboard
//This menu consists of the main filter and the date filter
import React, { Fragment, useContext } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Calendar } from 'react-widgets';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

const ActivityFilters = () => {
  const rootStore = useContext(RootStoreContext);
  const { predicate, setPredicate } = rootStore.activityStore;
  return (
    <Fragment>
       <Header icon={'filter'} attached style={{background:"#2F3C7E" , color:"#FBEAEB" }}  content={'Διαθέσιμα φίλτρα'} />
      <Menu vertical size={'large'} style={{ width: '100%', marginTop: 50  }}>
        {/*This section is responsible for the main filters and its choices */}
        <Header icon={'tag'} attached style={{background:"#2F3C7E" , color:"#FBEAEB" }}  content={'Ομαδοποιήσεις προβλημάτων'} />
        <Menu.Item
          active={predicate.size === 0}
          onClick={() => setPredicate('all', 'true')}
          color={'blue'}
          name={'all'}
          content={'Όλα τα προβλήματα'}
        />
        <Menu.Item
          active={predicate.has('isGoing')}
          onClick={() => setPredicate('isGoing', 'true')}
          color={'blue'}
          name={'username'}
          content={"Παρακολουθώ"}
        />
        <Menu.Item
          active={predicate.has('isHost')}
          onClick={() => setPredicate('isHost', 'true')}
          color={'blue'}
          name={'host'}
          content={"Είμαι υπεύθυνος"}
        />
      </Menu>
      {/*This section is responsible for the date filters and its choices */}
      <Header></Header>
      <Header
        icon={'calendar'}
        attached
        style={{background:"#2F3C7E" ,  color:"#FBEAEB"  }} 
        content={'Επιλογή ημερομηνίας'}
      />
      <Calendar
        onChange={date => setPredicate('startDate', date!)}
        value={predicate.get('startDate') || new Date()}
      />
    </Fragment>
  );
};

export default observer(ActivityFilters);
