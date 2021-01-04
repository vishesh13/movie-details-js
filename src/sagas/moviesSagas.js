import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import moviesServiceFactory from '../services/moviesServiceFactory';

/**
 * Saga to fetch categorised movie details
 */
function* fetchMovieDetails(action) {
    try {
        const API_KEY = '3e88bfa';
        const response = yield call(moviesServiceFactory.getMovieDetails,
            `http://www.omdbapi.com/?s=${action.data.title}&y=${action.data.year}&apikey=${API_KEY}`);
        yield put({ type: actionTypes.LOAD_MOVIES_SUCCEEDED, response });
    } catch (error) {
        yield put({ type: actionTypes.LOAD_MOVIES_FAILED, error });
    }
}


/**
 * Saga to movie's imdb details
 */
function* fetchImdbInfoDetails(action) {
    try {
        const API_KEY = '3e88bfa';
        const info = yield call(moviesServiceFactory.getImdbInfo, `http://www.omdbapi.com/?i=${action.data}&apikey=${API_KEY}`);
        console.log(info);
        yield put({ type: actionTypes.LOAD_IMDBINFO_SUCCEEDED, info });
    } catch (error) {
        yield put({ type: actionTypes.LOAD_IMDBINFO_FAILED, error });
    }
}

export function* moviesSagas() {
    yield takeLatest(actionTypes.LOAD_MOVIES_REQUEST, fetchMovieDetails);
    yield takeLatest(actionTypes.LOAD_IMDBINFO_REQUEST, fetchImdbInfoDetails);
}