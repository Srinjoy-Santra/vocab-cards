import types from './types';




const setSection = (dispatch, sectionName) =>
    dispatch(
        {
            type: types.CHANGE_SECTION, 
            payload: sectionName
        });

export default {
    setSection
}
        