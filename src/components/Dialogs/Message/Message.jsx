import React from 'react';
import s from './../Dialogs.module.css';
import PropTypes from 'prop-types';

const Message = (props) => {
    return <div className={s.diaolog}>{props.message}</div>
};

Message.propTypes = {
    message: PropTypes.string.isRequired
}

export default Message;
