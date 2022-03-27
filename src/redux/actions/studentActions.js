import { studentsActions } from "../actionTypes/students-actions"


export const setInputFields = (inputs) => {
    return {
        type: studentsActions.INPUT_FIELDS,
        payload: inputs
    }
}