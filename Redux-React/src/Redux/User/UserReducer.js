import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"

const initalState = {
    loading : false,
    users : [],
    error : ''
}


const UserReducer =(state = initalState , action)=>{

    switch(action){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading : true
            }

        case FETCH_USER_SUCCESS:
            return{
                
                loading : false,
                users : action.payload,
                error : ''
            }
        
        case FETCH_USER_FAILURE:
            return{
                loading : false,
                users : [],
                error : action.payload
            }

            default:return state
    }
}

export default UserReducer;