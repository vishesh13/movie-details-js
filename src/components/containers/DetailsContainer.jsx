import React from 'react';
import DetailsView from '../views/DetailsView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as movieActions from '../../actions/movieAction';

/**
 * Container class having rendered movie rows 
 * and action calls to fetch required data
 */
class DetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleInfoRequest = this.handleInfoRequest.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        const { movieActions } = this.props;
        movieActions.closeModal();
    }

    /**
     * handler method to make login request
     */
    handleInfoRequest(id) {
        const { movieActions } = this.props;
        movieActions.getImdbnfo(id);
    }

    render() {
        const { details = [], info, openModal, handleSearchQuery } = this.props;
        return (
            <DetailsView handleInfoRequest={this.handleInfoRequest} handleClose={this.handleClose}
                details={details} info={info} openModal={openModal} handleSearchQuery={handleSearchQuery} />
        );
    }
}

const mapStateToProps = state => {
    return {
        details: state.details,
        info: state.info,
        openModal: state.openModal,
    }
};

const mapDispatchToProps = dispatch => ({
    movieActions: bindActionCreators(movieActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);