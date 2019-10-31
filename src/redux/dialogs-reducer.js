const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Kirill'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Python'}
    ],
    messages: [
        {id: 1, message: 'Give me my money'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'May be Borba'},
        {id: 4, message: 'Guuusss???'}
    ],
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
