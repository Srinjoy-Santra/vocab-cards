import types from './types';

const setSection = (dispatch, sectionName) =>
    dispatch(
        {
            type: types.CHANGE_SECTION, 
            payload: sectionName
        });


 
const setPage = (dispatch, pageNumber) =>
    dispatch(
        {
            type: types.CHANGE_PAGE,
            payload: pageNumber
        }
    )

    export default {
        setSection,
        setPage
    }