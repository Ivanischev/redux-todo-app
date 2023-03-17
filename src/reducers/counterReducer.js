import {INCREMENT, DECREMENT} from "./../constants/actionConstants"

const initialState = {
    count: 18
}

// const counterReducer = (state, action )
const counterReducer = (state = initialState, action ) => {

    switch (action.type) {
        case INCREMENT: 
        return {
            count: state.count + 1
        }
        // case INCREMENT10: 
        // return {
        //     count: state.count + action
        // }
        case DECREMENT: 
        return {
            count: state.count - 1
        }
        default: return state
    }
}

export default counterReducer