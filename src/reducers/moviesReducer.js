import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const moviesReducer = (state = initialState.movieDetailsState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_MOVIES_REQUEST:
            return {
                ...state,
                displayPosterView: false,
            };

        case actionTypes.LOAD_MOVIES_SUCCEEDED:
            const { response = [] } = action;
            return {
                ...state,
                details: [...response],
            };

        case actionTypes.LOAD_MOVIES_FAILED:
            return {
                ...state,
                isLoading: false,
                isFailed: true,
            };

        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isFailed: false,
            };

        case actionTypes.LOAD_MOVIES_POSTER_REQUEST:
            return {
                ...state,
                displayPosterView: false,
            };

        case actionTypes.LOAD_MOVIES_POSTER_SUCCEEDED:
            const { res = [] } = action;
            return {
                ...state,
                details: [...res],
            };

        case actionTypes.LOAD_MOVIES_POSTER_FAILED:
            return {
                ...state,
                isLoading: false,
                isFailed: true,
            };

        case actionTypes.LOAD_IMDBINFO_REQUEST:
            return {
                ...state,
                openModal: true,
            };

        case actionTypes.LOAD_IMDBINFO_SUCCEEDED:
            const { info } = action;
            return {
                ...state,
                info: { ...info },
            };

        case actionTypes.LOAD_IMDBINFO_FAILED:
            return {
                ...state,
                isLoading: false,
                isFailed: true,
            };

        case actionTypes.CLOSE_INFO_MODAL:
            return {
                ...state,
                openModal: false,
            };

        default:
            return state;
    }
};

export default moviesReducer;