import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile </ NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}> Messages </ NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}> News </ NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}> Music </ NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activeLink}> Users </ NavLink>
        </div>
        <br/>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.activeLink}> Settings </ NavLink>
        </div>

        <br/>
        <br/>
        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.activeLink}><h4>Friends</h4></ NavLink>
            <br/>
            John
            Tony
            Steve
        </div>
    </nav>
};
export default NavBar;
