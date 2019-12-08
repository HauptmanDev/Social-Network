import React from 'react';
import './App.css';
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Tools from "./components/Tools/Tools";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {withSuspense} from "./components/hoc/withSuspense";
import {logout} from "./redux/auth-reducer";
import {setHandler} from "./api/api";


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {
    catchAllUnhandledErrors = (reasone, promise) => {
        // добавить санку на глобальные ошибки
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    };

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                            <Route path='/users' render={withSuspense(UsersContainer)}/>
                            <Route path='/login' render={withSuspense(LoginPage)}/>
                            <Route exact path='*' render={() => {
                                return <div>404 NOT FOUND</div>
                            }}/>
                        </Switch>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized});
let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
const SocJSApp = (props) => {

    return <BrowserRouter>
        <Provider store={store}>
            < AppContainer/>
        </Provider>
    </BrowserRouter>
};

const errorAuth = () => {
    store.dispatch(logout())
};

setHandler(errorAuth);

export default SocJSApp;
