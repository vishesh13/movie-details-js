import React from 'react';
import PosterView from '../views/PosterView';
import DetailsContainer from './DetailsContainer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as movieActions from '../../actions/movieAction';


/**
 * Container class having rendered movie rows 
 * and action calls to fetch required data
 */
class MoviesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.switchTabs = this.switchTabs.bind(this);
        this.state = {
            value: 'Info'
        };
    }

    handleSearchQuery(e) {
        const { movieActions } = this.props;
        if (e) {
            const title = document.getElementById('TITLE_FIELD').value;
            const year = document.getElementById('YEAR_FIELD').value;
            movieActions.loadMovieDetails(title, year);
        }
    }

    switchTabs(e, value) {
        this.setState({
            value,
        });
    }

    render() {
        const { details = [] } = this.props;
        let content = this.state.value === 'Poster' ?
            <PosterView details={details} handleSearchQuery={this.handleSearchQuery} /> :
            <DetailsContainer details={details} handleSearchQuery={this.handleSearchQuery} />;

        return (
            <div>
                <Tabs
                    value={this.state.value}
                    onChange={this.switchTabs}
                    indicatorColor="primary"
                    textColor="primary"
                    centered="true">
                    <Tab label="Information" value="Info" />
                    <Tab label="Poster" value="Poster" />
                </Tabs>
                <br></br>
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        details: state.details,
        isLoading: state.isLoading,
    }
};

const mapDispatchToProps = dispatch => ({
    movieActions: bindActionCreators(movieActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);