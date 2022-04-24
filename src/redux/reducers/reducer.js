import { 
    ADD_INFO_SUCCESS,
    DELETE_INFO_SUCCESS,
    GET_INFO_SUCCESS,
    EDIT_INFO_SUCCESS
 } from "../actions/Type"

const initialState = {
    userInfo : [],
    error : null,
    isLoading : false
}

const infoReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_INFO_SUCCESS:
            return {...state, userInfo : action.payload}
        case ADD_INFO_SUCCESS:
            return {...state, userInfo : [...state.userInfo]}
        case EDIT_INFO_SUCCESS:
            return {...state, userInfo : [...state.userInfo]}
        case DELETE_INFO_SUCCESS:
            const deleteInfo = state.userInfo.filter(item => item.id !== action.payload.id)
            return {...state, userInfo : deleteInfo}
        
        
        default:
            return state
    }
}
export default infoReducer