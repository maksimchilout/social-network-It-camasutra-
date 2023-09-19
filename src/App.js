import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import PreloaderI from "./components/commons/preloader/PreloaderInfinite";
import store from "./redux/redux-store";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <PreloaderI/>
        }
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Routes>
                                <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                <Route path='/news' element={<News/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/users' element={<UsersContainer/>}/>
                                <Route path='/settings' element={<Settings/>}/>
                                <Route path='/login' element={<Login/>}/>
                            </Routes>
                        </div>
                    </div>
                </Provider>
            </BrowserRouter>

        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp})(App)


// {/*<Route path="/profile" element={<ProfileContainer />}>*/}
// {/*     <Route path=":userId" element={<ProfileContainer />} />*/}
// {/*</Route>*/}