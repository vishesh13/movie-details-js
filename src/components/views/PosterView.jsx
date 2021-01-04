import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ApplicationBarView from '../views/ApplicationBarView';
import './stylesheet.css';

/**
 * Component returning movies list with images
 *
 */
const PosterView = ({ details = [], handleSearchQuery }) => {
    return (
        <div>
            <ApplicationBarView handleSearchQuery={handleSearchQuery} />
            <List>
                {details && details.length > 0 ? details.map((item) => {
                    return (
                        <React.Fragment>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={item.Title} src={item.Poster} variant="square" className="avatar"
                                        style={{
                                            width: '150px',
                                            height: '200px',
                                        }} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.Title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                                style={{ dispaly: 'inline' }}
                                            >
                                                {item.Type}
                                            </Typography>
                                            <br />
                                            <p> Year: {item.Year} </p>
                                            <p> Type: {item.Type}</p>
                                            <br />
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>)
                }) : null}
            </List>
        </div>
    )
};

export default PosterView;