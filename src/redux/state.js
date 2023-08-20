import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}



export default store
window.store = store
