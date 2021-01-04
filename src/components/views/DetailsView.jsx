import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ApplicationBarView from '../views/ApplicationBarView';
import './stylesheet.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

/**
 * View Component for Movies Details Information
 */
const DetailsView = ({ details = [], handleInfoRequest, handleClose, info, openModal, handleSearchQuery }) => {
    const classes = useStyles();

    let content = null;
    if (info) {
        content =
            (
                <React.Fragment>
                    <h2>Title: {info.Title}</h2>
                    <p>Year: {info.Year}</p>
                    <p>Released: {info.Released}</p>
                    <p>Runtime: {info.Runtime}</p>
                    <p>Genre: {info.Genre}</p>
                    <p>Director: {info.Director}</p>
                    <p>Actors: {info.Actors}</p>
                    <p>Plot: {info.Plot}</p>
                    <p>Language: {info.Language}</p>
                    <p>BoxOffice: {info.imdbRating > 7 ? 'Hit' : 'Flop'}</p>
                </React.Fragment>
            );
    }

    return (
        <div>
            <ApplicationBarView handleSearchQuery={handleSearchQuery} />
            {details.map((item) => (
                <div className="details">
                    <h2>{item.Title}</h2>
                    <p> Title: {item.Title} </p>
                    <p> Year: {item.Year} </p>
                    <p> Type: {item.Type}</p>
                    <br />
                    <br />
                    <button type="button" className="info-button" onClick={() => { handleInfoRequest(item.imdbID) }}>
                        Info
                    </button>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <React.Fragment>
                        <Modal className="modal-container" open={openModal} onClose={handleClose} closeAfterTransition
                            BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }, { style: { backgroundColor: 'transparent' } }}
                        >
                            <Fade in={openModal}>
                                <div className={classes.paper}>
                                    {content}
                                </div>
                            </Fade>
                        </Modal>
                    </React.Fragment>
                </div>
            ))}
        </div>

    )
}

export default DetailsView;