import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
    {id: 1, post: 'lorem ipsum dolor', likesCount: 12},
    {id: 2, post: 'Why anyone love me', likesCount: 9},
    {id: 3, post: 'hi, how are you', likesCount: 14},
    {id: 4, post: 'This is last message today', likesCount: 9},
]

let dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Kristina"},
    {id: 3, name: "Janet"},
    {id: 4, name: "Elena"},
    {id: 5, name: "Svetlana"},
    {id: 6, name: "Andrey"},
]

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "HOw is your it-camasutra?"},
    {id: 3, message: "Hello from React-app"},
    {id: 4, message: "Do you Know React?"},
    {id: 5, message: "No"},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
