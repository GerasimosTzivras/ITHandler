//The file is repsonsible for the user menu
import React from 'react';
import { Tab } from 'semantic-ui-react';
import ProfilePhotos from './ProfilePhotos';
import ProfileDescription from './ProfileDescription';
import ProfileFollowings from './ProfileFollowings';
import ProfileActivities from './ProfileActivities';

{/*Οι επιλογές που έχει ο χρήστης στο δεξιά πάνελ */}
const panes = [
  { menuItem: 'Σχετικά', render: () => <ProfileDescription /> },
  { menuItem: 'Φωτογραφίες', render: () => <ProfilePhotos /> },
  {
    menuItem: 'Διαχείριση',
    render: () => <ProfileActivities />
  },
  /*
  { menuItem: 'Followers', render: () => <ProfileFollowings /> },
  { menuItem: 'Following', render: () => <ProfileFollowings /> }
  */
];

interface IProps {
    setActiveTab: (activeIndex: any) => void;
}

const ProfileContent: React.FC<IProps> = ({setActiveTab}) => {
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
      onTabChange={(e, data) => setActiveTab(data.activeIndex)}
    />
  );
};

export default ProfileContent;
