import axios from 'axios';

/**
 * axios call to fetch categorised movie details
 */
const serviceFactory = () => ({
    getMovieDetails: requestUrl => axios.get(requestUrl).then(response => response.data.Search),
    getImdbInfo: requestUrl => axios.get(requestUrl).then(response => response.data),
});

export default serviceFactory();