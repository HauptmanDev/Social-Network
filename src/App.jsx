import React from 'react';
import './App.css';
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Tools from "./components/Tools/Tools";
import {HashRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {withSuspense} from "./components/hoc/withSuspense";
// import Settings from "./components/Settings/Settings";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Friends from "./components/Friends/Friends";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));


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
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
let AppContainer = compose(
    withRouter, connect(mapStateToProps, {initializeApp}))(App);
const SocJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            < AppContainer/>
        </Provider>
    </HashRouter>
};

export default SocJSApp;


{/*<Route path='/news' render={() => <News/>}/>*/
}
{/*<Route path='/settings' render={() => <Settings/>}/>*/
}
{/*<Route path='/music' render={() => <Music/>}/>*/
}
{/*<Route path='/friends' render={() => <Friends/>}/>*/
}