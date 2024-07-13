import React from 'react';
import { Link } from 'react-router-dom';
import Side from './Side';

const Parenta = () => {
    const containerStyle = {
        height: "100vh", // Adjust as needed
    };

    const imageContainerStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -3,
    };

    const imgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    const contentContainerStyle = {
        position: "absolute",
        bottom: "150px",  // Adjust as needed
        zIndex: 2,
        left: "10%",
        textAlign: 'center',
    };

    return (
        <>
            <div style={containerStyle}>
                <div style={imageContainerStyle}>
                    <img src="bade.jpg" alt="Your Image" style={imgStyle} />
                </div>
                <div style={contentContainerStyle}>
                    <h4 style={{color: '#002d51'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to our Family Assurance hub! We're dedicated to children's welfare, offering engaging <br/>videos on Child Rights principles. Our gamified platform features educational games, designed<br/> to be violence-free and appropriate. With daily tasks taking just 5 minutes, we <br/>prioritize a healthy balance amidst screen time concerns. <br/>
                    Beyond entertainment, we aim to empower children, fostering <br/>resilience against exploitation. Join our educational journey for a brighter future.<br/> Rest assured, we prioritize privacy and protection of any shared information.  <br/>
                    Taking this step to empower every child with us will be a decision you won't regret.</h4>
                    <br/>
                    <Link to="/Spin" style={{ textDecoration: 'none', marginRight: '50px'}}> <Side buttonText='Wheel' style={{ fontSize: '24px' }} /></Link>
                </div>
            </div>
        </>
    );
}

export default Parenta;