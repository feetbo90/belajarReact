import * as actionTypes from '../actions/actionTypes';

const initialState = {
    persons: [ { id: "123", name: 'Padli', age: 25 },
        { id: "456", name: 'Edo', age: 30},
        { id: "457", name: 'Iqbal', age: 30} ]
};

const reducer = ( state = initialState , action ) => {

    switch (action.type) {
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.resultPersonId)
            }
            case actionTypes.ADD_PERSON: 
            let nama = action.name
            let umur = action.age
            let date = new Date()
            let person = {id: date.getTime(), name: nama, age: umur}
            return {
                ...state, persons : [...state.persons, person]
            }
        default:
            return state
    }
};

export default reducer;
