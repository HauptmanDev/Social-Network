import preloader from '../../../assets/images/preloader.svg'
import React from 'react';

let Preloader = (props) => {
    return <div>
        <div style={{
            position: "fixed",
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            backgroundColor: "black",
            opacity: "0.1"
        }}></div>
        <div style={{
            position: "fixed",
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            width: '300px',
            height: '200px',
            // top: `${top}px`
        }}>
            <img src={preloader}/>
        </div>
    </div>
};

export default Preloader;

