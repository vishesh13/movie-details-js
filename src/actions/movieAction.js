import * as actionTypes from './actionTypes';

/**
 * function to dispatch movie details loading request
 */
export function loadMovieDetails(title, year) {
    return {
        type: actionTypes.LOAD_MOVIES_REQUEST,
        data: {
            title,
            year,
        },
    };
}

/**
 * function to dispatch login request
 */
export function getImdbnfo(id) {
    return {
        type: actionTypes.LOAD_IMDBINFO_REQUEST,
        data: id,
    };
}

/**
 * function to fetch movie details with poster
 */
export function closeModal() {
    return {
        type: actionTypes.CLOSE_INFO_MODAL,
    };
}