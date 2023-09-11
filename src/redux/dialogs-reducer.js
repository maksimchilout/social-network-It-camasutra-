const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: "Dimych", imgSrc: "./image/racon.jpg"},
        {id: 2, name: "Kristina", imgSrc: "./image/girl.jpg"},
        {id: 3, name: "Janet", imgSrc: "./image/mask.jpg"},
        {id: 4, name: "Svetlana", imgSrc: "./image/fox.png"},
        {id: 5, name: "Andrey", imgSrc: "./image/minion.jpg"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-camasutra?"},
        {id: 3, message: "Hello from React-app"},
        {id: 4, message: "Do you Know React?"}, {id: 5, message: "No"},
    ],

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            }


        default:
            return state
    }

}

export const addSendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer