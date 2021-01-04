import React from 'react';
import MoviesContainer from '../components/containers/MoviesContainer';
import { Provider } from 'react-redux';
import configureStore from '../store/MoviesStore';

const store = configureStore();

/**
 * Movies Application class rendering the container
 */
class MoviesApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MoviesContainer />
            </Provider>
        );
    }
}

export default MoviesApplication;