import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import Message from "../Message/Message";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.diolog + ' ' + s.active}>
        <NavLink to={path}>
            <li>{props.name}</li>
        </NavLink>
    </div>
};
DialogItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}
export default DialogItem;
