import { SET_USER_NAME, SET_USER_AGE, GET_CITIES, GET_ITEMS, GET_ITEM, GET_USER } from "./actions";

const initialState = {
    name: '',
    logged: '',
    age: 0,
    cities: [],
    users: [],
    user: undefined,
}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload};
        case SET_USER_AGE:
            return { ...state, age: action.payload};
        case GET_CITIES:
            return { ...state, cities: action.payload};
        case GET_ITEMS:
            return { ...state, users: action.payload};
        case GET_ITEM:
            return { ...state, user: action.payload};
        case GET_USER:
            return { ...state, logged: action.payload};
        default:
            return state;
    }
}

export default userReducer;