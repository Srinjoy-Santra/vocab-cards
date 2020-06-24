import types from './types';
import axios from 'axios';

import { alertActions } from '../alert';

const getWords = (dispatch, page) =>
    axios
        .get('/api/items',{
            params: {
                start: page*20 || 0,
                range: 20
            }
        })
        .then(res => {
            alertActions.clearAlert(dispatch)
            dispatch(
                {
                    type: types.GET_WORDS, 
                    payload: res.data
                }
            )
        }
        )
        .catch(err => {
            console.log(`Words were not fetched ${err.message}`);
            alertActions.setAlert(dispatch, {
                msg: {
                  msg: "Words were not fetched"
                },
                status: err.status,
                id: 'Search-Disabled',
                severity: 'error'
              })
        });

const getWord = (dispatch, id) =>
    axios
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
    getWord,
}
        