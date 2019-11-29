import React from 'react';
import './App.css';
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Tools from "./components/Tools/Tools";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
// import Settings from "./components/Settings/Settings";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {withSuspense} from "./components/hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavBar/>
                    <Tools/>
                    <Footer/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/login' render={withSuspense(LoginPage)}/>
                        {/*<Route path='/news' render={() => <News/>}/>*/}
                        {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                        {/*<Route path='/music' render={() => <Music/>}/>*/}
                        {/*<Route path='/friends' render={() => <Friends/>}/>*/}
                    </div>
                </div>
            );
        }
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
let AppContainer = compose(
    withRouter, connect(mapStateToProps, {initializeApp}))(App);
const SocJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store} basename={process.env.PUBLIC_URL}>
            < AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SocJSApp;