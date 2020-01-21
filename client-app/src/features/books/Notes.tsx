//This file is responsible for showing the notes to the user
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Grid, Tab } from 'semantic-ui-react';
import {RootStoreContext} from '../../app/stores/rootStore'
import { useContext } from 'react';

{/*The steps that follow every choice */}
const panes1 = [
    {
      menuItem: 'Βήμα 1',
      render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: 'Βήμα 2',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Βήμα 3',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ]

{/* The choices of the left menu */}
const panes = [
    { menuItem: 'McAffee Agent στο MIS', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Policy instant Update', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Εγκατάσταση Dude', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Ίντερνετ Λέσχης', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Πρόβλημα με IP', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Σύνδεση σε server', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Δημιουργία καλωδίου δικτύου', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Απομακρυσμένο άνοιγμα δίσκου C', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Switches Password', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Deep refresh', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Disk cleanup / Partion cleanup', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Λογαριασμοί internet', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Κλείδωμα υπολογιστή', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Εξωτερικό email', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'MIS Λογαριασμοί και email', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Κωδικός BIOS', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Σύστημα καμερών', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'VTC', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Apollo', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Professional right click', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Σχέση εμπιστοσύνης', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Blind outside 114pm', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Διαχείριση / Κόλλημα ίντερνετ', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'WiFi γραφείου', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Σύνδεση εκτυπωτή', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Σύνδεση PC στο MIS', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Infinite Ping', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Εύρεση Computer name & IP', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Λογαριασμοί ΗΣΑ', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'Helpdesks', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
    { menuItem: 'CCIS', render: () => <Tab.Pane><Tab menu={{ secondary: true, pointing: true }} panes={panes1} /></Tab.Pane> },
]

const Notes: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    return(
        <Grid>
            <Grid.Column>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            </Grid.Column>
        </Grid>    
    );
};
export default observer(Notes);