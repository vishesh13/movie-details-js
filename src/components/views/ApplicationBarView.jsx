import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './stylesheet.css';

/**
 * Movies Application Search bar view
 */
const ApplicationBarView = ({ handleSearchQuery }) => {
    return (
        <div className="app-bar">
            <form noValidate autoComplete="off">
                <TextField required id="TITLE_FIELD" label="Title" variant="outlined" style={{ marginRight: "5px" }} />
                <TextField required id="YEAR_FIELD" label="Year" variant="outlined" style={{ marginRight: "5px" }} />
                <Button variant="outlined" size="large" color="primary" onClick={handleSearchQuery} style={{ height: "6.5vh" }}>Search</Button>
            </form>
        </div>
    )
}

export default ApplicationBarView;
