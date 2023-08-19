let store = {
    _state: {

        profilePage: {
            postsData: [
                {id: 1, post: 'lorem ipsum dolor', likesCount: 12},
                {id: 2, post: 'Why anyone love me', likesCount: 9},
                {id: 3, post: 'hi, how are you', likesCount: 14},
                {id: 4, post: 'This is last message today', likesCount: 9},
            ],
            newPostText: 'it-Kamasutra.com'
        },
        dialogsPage: {
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
                {id: 4, message: "Do you Know React?"},
                {id: 5, message: "No"},
            ]
        },
    
    
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }

}




export default store
window.store = store
