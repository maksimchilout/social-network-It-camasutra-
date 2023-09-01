// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";


const App = (props) => {

    return (


        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId?' element={<ProfileContainer  />}/>
                    {/*<Route path="/profile" element={<ProfileContainer />}>*/}
                    {/*     <Route path=":userId" element={<ProfileContainer />} />*/}
                    {/*</Route>*/}
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/users' element={<UsersContainer />}/>
                    <Route path='/settings' element={<Settings/>}/>

                </Routes>

            </div>
        </div>


    );
}


export default App;



// <Route path="/profile" element={<ProfileContainer />}>
//     <Route path=":userId" element={<ProfileContainer />} />
// </Route>