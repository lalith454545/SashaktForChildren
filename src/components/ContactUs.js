import React, { useState } from 'react';
import Social from './Social';
import Modal from 'react-modal';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };   

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                openModal();
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const containerStyle = {
        height: "100vh",
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
        bottom: "70px",
        left: "230px",
        right: 0,
        zIndex: 2,
    };

    const itemStyle = {
        width: "100%",
        height: "500px",
        maxWidth: "820px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 0 20px 10px rgba(0,0,0,.4)",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        zIndex: 1000,
    };

    const contactStyle = {
        background: "#green",
    };

    const submitFormStyle = {
        background: "#EAB69F",
        bottom: "35px",
    };

    const firstTextStyle = {
        paddingLeft: "20px",
        paddingTop: "20px",
        fontSize: "35px",
        color: "#E07A5F",
        fontWeight: 600,
        textTransform: "capitalize",
    };

    const imageStyle = {
        height: "350px",
        width: "350px",
        position: "relative",
        left: "30px",
    };

    const socialMediaStyle = {
        display: "flex",
        listStyle: "none",
        paddingLeft: "25px",
        marginBottom: "5px",
    };

    const secondTextStyle = {
        fontWeight: 500,
        color: "#E07A5F",
        paddingLeft: "20px",
    };

    const thirdTextStyle = {
        fontSize: "25px",
        position: "relative",
        top: "20px",
        left: "20px",
        paddingTop: "10px",
        color: "#fff",
    };

    const formStyle = {
        padding: "050px",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        top: "-25px",
    };

    const inputBoxStyle = {
        height: "40px",
        width: "90%",
        margin: "30px 0",
        position: "relative",
        top: "-20px",
    };

    const inputStyle = {
        width: "100%",
        height: "100%",
        background: "transparent",
        border: "2px solid #fff",
        borderRadius: "20px",
        outline: "none",
        paddingLeft: "10px",
        color: "#fff",
        fontSize: "16px",
    };

    const btnStyle = {
        position: "relative",
        background: "#ecf0f1",
        outline: "none",
        border: "none",
        borderRadius: "4px",
        height: "45px",
        width: "30%",
        fontSize: "16px",
        color: "#8f50ec",
        cursor: "pointer",
        fontWeight: 500,
        left: "50%",
        left: "50%", // Move the button to the middle of its parent
        marginLeft: "-15%", // Offset the button's position by half of its width

    };

    const modalStyle = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 3,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '400px',
          maxHeight: '80%',
          padding: '20px',
          borderRadius: '10px',
          border: 'none',
          background: "rgb(170,255,170)",
          background: "radial-gradient(circle, rgba(170,255,170,1) 0%, rgba(95,201,95,1) 100%)",
          zIndex: 3,
          overflow: 'hidden', // Remove scrolling
        },
      };

    return (
        <>
            <div style={containerStyle}>
                <div style={imageContainerStyle}>
                    <img src="contback.jpg" alt="Your Image" style={imgStyle} />
                </div>
                <div style={contentContainerStyle}>
                    <div style={itemStyle}>
                        <div style={contactStyle}>
                            <div style={firstTextStyle}>Let's get in touch</div>
                            <img src="/contus.jpg" alt="" style={imageStyle} />
                            <div>
                                <span style={secondTextStyle}>Connect with us:</span>
                                <Social style={socialMediaStyle} />
                            </div>
                        </div>
                        <div style={submitFormStyle}>
                            <h4 style={thirdTextStyle}>Contact Us</h4>
                            <form style={formStyle} onSubmit={handleSubmit}>
                                <div style={inputBoxStyle}>
                                    <input type="text" placeholder="Name" style={inputStyle} required />
                                </div>
                                <div style={inputBoxStyle}>
                                    <input type="email" placeholder="Email" style={inputStyle} required />
                                </div>
                                <div style={inputBoxStyle}>
                                    <input type="tel" placeholder="Phone" style={inputStyle} required />
                                </div>
                                <div style={inputBoxStyle}>
                                    <textarea name="" placeholder="Message" style={inputStyle} required id="message" cols="30" rows="10"></textarea>
                                </div>
                                <input type="submit" style={btnStyle} value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Thank you"
                ariaHideApp={false}
                style={modalStyle}
            >
                <h2 style={{textAlign: 'center',}}>Thank you for getting in touch! </h2>
                <p style={{textAlign: 'center',}}> We appreciate you contacting us. One of our colleagues will get back in touch with you soon!Have a great day!.</p>
                <button style={{...btnStyle, marginTop: '20px'}} onClick={closeModal}>Close</button> {/* Added marginTop to center the button vertically */}
            </Modal>
        </>
    );
}

export default Contact;