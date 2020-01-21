import React, { useContext, useEffect, useState } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import ActivityList from '../activities//dashboard/ActivityList';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../app/stores/rootStore';
import InfiniteScroll from 'react-infinite-scroller';
import ActivityFilters from '../activities/dashboard/ActivityFilters';
import ActivityListItemPlaceholder from '../activities/dashboard/ActivityListItemPlaceholder';
import ComputersHistory from './ComputersHistory';

const ComputersDashboard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadActivities,
    loadingInitial,
    setPage,
    page,
    totalPages
  } = rootStore.activityStore;
  const [loadingNext, setLoadingNext] = useState(false);

  const handleGetNext = () => {
    setLoadingNext(true);
    setPage(page + 1);
    loadActivities().then(() => setLoadingNext(false));
  };

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  return (
    <Grid>
      <Grid.Column width={16}>
        {loadingInitial && page === 0 ? (
          <ActivityListItemPlaceholder />
        ) : (
          <InfiniteScroll
            pageStart={0}
            loadMore={handleGetNext}
            hasMore={!loadingNext && page + 1 < totalPages}
            initialLoad={false}
          >
            <ComputersHistory />
          </InfiniteScroll>
        )}
      </Grid.Column>
      <Grid.Column width={16}>
        <Loader active={loadingNext} />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ComputersDashboard);
