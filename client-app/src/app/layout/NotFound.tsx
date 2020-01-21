//The following file is shown when there isn't something that we want
import React from 'react';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Ωχ!! - Όπου και να κοίταξα δεν το βρήκα
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    Take me back to infinity
                </Button>
            </Segment.Inline>
        </Segment>
    );
};

export default NotFound;