import types from './types';

const setCurrentPage = (dispatch, pageNumber) =>
    dispatch(
        {
            type: types.CHANGE_PAGE,
            payload: pageNumber
        }
    )

const setIndices = (dispatch, indices) =>
    dispatch(
        {
            type: types.SET_INDICES,
            payload: indices
        }
    )
export default {
    setCurrentPage,
    setIndices
}