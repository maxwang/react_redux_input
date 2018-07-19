const initialState = {
    inputValue: 'bad boy'
};

export function inputReducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case 'INPUT_CHANGE':
            return Object.assign({}, state, { inputValue: action.text });
        default:
            return state;
    }
} 