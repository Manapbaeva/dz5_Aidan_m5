import axios from "axios";

const createUserSuccess = (user) => ({
    type: "CREATE_USER_SUCCESS",
    payload: user,
});

const createUserFail = (error) => ({
    type: "CREATE_USER_FAIL",
    payload: error,
});

export const createUserAction = (user) => async (dispatch) => {
    try {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/users",
            user
        );
        dispatch(createUserSuccess(response.data));
    } catch (error) {
        dispatch(createUserFail(error.message));
    }
};