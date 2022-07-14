let ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs : [
        {id:1, name:"Dima"},
        {id:2, name:"Sveta"},
        {id:3, name:"Katya"},
        {id:4, name:"Sasha"},
        {id:5, name:"John"},
    ],
    messages : [
        {id:1, message:"Hi hi!"},
        {id:2, message:"How are you?!"},
        {id:3, message:"Good!"}
    ], 
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
        return {...state, 
                    messages : [...state.messages, {id : 8, message : action.newMessageBody}],
                };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});
export default dialogReducer;