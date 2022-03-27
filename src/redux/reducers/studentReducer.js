import { studentsActions } from "../actionTypes/students-actions"


const initialState = {
    inputFields : {
        name : 'Salim Hasan', 
        age : 25,
        skill : 'JavaScript Developer' 
    },
    students : []
}


export const inputFieldsReducer = ( state = initialState, { type, payload } ) => {

    switch(type) {
        case studentsActions.INPUT_FIELDS : 
            return { ...state, inputFields : payload }

        default: 
            return state 
    }

}