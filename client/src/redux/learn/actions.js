import types from './types';
import axios from 'axios';

const wordsInstance = axios.create({
    baseURL: 'http://localhost:5000'
})

const getWords = (dispatch, page) =>
    wordsInstance
        .get('/api/items',{
            params: {
                start: page*20 || 0,
                range: 20
            }
        })
        .then(res => dispatch(
            {
                type: types.GET_WORDS, 
                payload: res.data
            }
        ))
        .catch(err => {
            console.log(`Words were not fetched ${err}`);
        });

const getWord = (dispatch, id) =>
    wordsInstance
        .get(`/api/items/${id}`)
        .then(word => dispatch(
            {
                type: types.GET_WORD, 
                payload: word.data
            }
        ))
        .catch(err => {
            console.log(`Word with ${id} not fetched; ${err}`);
        });

export default {
    getWords,
    getWord
}
        