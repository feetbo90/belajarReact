import * as actionTypes from './actionTypes';

export const deleteResult = ( personId ) => {
    console.log("ini delete")
    return {
        type: actionTypes.REMOVE_PERSON,
        resultPersonId: personId
    };
};

export const addResult = ( name, age ) => {
    console.log("ini add Result")
    return {
        type: actionTypes.ADD_PERSON,
        name: name,
        age: age
    }
}