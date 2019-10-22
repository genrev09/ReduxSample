const counterReducer = (state = false, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'MULTIPLY2':
            return state * 2;
        case 'DIVIDE2':
            return state / 2;
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

export default counterReducer;