const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [],
    messages: [],
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {...state, messages: [...state.messages, {id: 5, message: body}],};
        }
        default:
            return state;
    }
};
export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody: newMessageBody
    }
};
export default dialogsReducer;
