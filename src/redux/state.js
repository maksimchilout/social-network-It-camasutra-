const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let store = {
    _state: {

        profilePage: {
            postsData: [{id: 1, post: 'lorem ipsum dolor', likesCount: 12}, {
                id: 2, post: 'Why anyone love me', likesCount: 9
            }, {id: 3, post: 'hi, how are you', likesCount: 14}, {
                id: 4, post: 'This is last message today', likesCount: 9
            },], newPostText: 'it-Kamasutra.com'
        }, dialogsPage: {
            dialogsData: [{id: 1, name: "Dimych", imgSrc: "./image/racon.jpg"}, {
                id: 2, name: "Kristina", imgSrc: "./image/girl.jpg"
            }, {id: 3, name: "Janet", imgSrc: "./image/mask.jpg"}, {
                id: 4, name: "Svetlana", imgSrc: "./image/fox.png"
            }, {id: 5, name: "Andrey", imgSrc: "./image/minion.jpg"},],
            messagesData: [{id: 1, message: "Hi"}, {id: 2, message: "How is your it-camasutra?"}, {
                id: 3, message: "Hello from React-app"
            }, {id: 4, message: "Do you Know React?"}, {id: 5, message: "No"},],
            newMessageBody: ""
        },


    }, _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    }, subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5, post: this._state.profilePage.newPostText, likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {

            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messagesData.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const addSendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
})


export default store
window.store = store
