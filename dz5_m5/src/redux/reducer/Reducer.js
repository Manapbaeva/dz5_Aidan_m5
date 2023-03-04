const initialState = {
    user: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER_SUCCESS":
            return {...state, user: action.payload, error: null,};
        case "CREATE_USER_FAIL":
            return {...state, user: null, error: action.payload,};
        default:
            return state;
    }
};

export default userReducer;
