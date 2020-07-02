import { INCREMENT, DECREMENT } from "./constants";

const INIT_STATE = {

    counter: 0

}
function countReducer(state = INIT_STATE, action) {

    switch (action.type) {

        case INCREMENT: {
            let newState = { ...state }

            newState.counter++;

            return newState;
        }

        case DECREMENT: {
            let newState = { ...state }

            newState.counter--;

            return newState;
        }

        default: return state;
    }

}

export default countReducer