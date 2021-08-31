import * as actionTypes from '../actions/actionTypes'
const initialState = {
    users : [{}]
}
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCHUSER: 
            return{
                ...state,
                users: action.payload
            }
        default: return state;
    }
} 

export default userReducer;
