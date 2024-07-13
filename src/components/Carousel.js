import React, { useEffect, useState } from "react";
import BoyDialogComponentDor from "./RightsBoys";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const changeTime = 3; // Delay in seconds for automatic slide change

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the slide index
      setSlideIndex((prevIndex) => (prevIndex + 1) % 12);
    }, changeTime * 1000); // Convert seconds to milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div >
      <BoyDialogComponentDor/>
        
      <div style={{  backgroundColor:'pink', width: "100vw", display: "flex", flexDirection: "column", fontFamily: "sans-serif", height:'92vh' }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -3 }}></div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "30px", marginBottom: "50px" }}>
          <div className="carousel-indicators">
            {[...Array(12).keys()].map((index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === slideIndex ? "active" : ""}
                aria-current={index === slideIndex}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
    <h2 style={{textAlign:'center'}}>The rights you need to realise</h2>
          
          <div className="carousel-inner" style={{ maxWidth: "800px", margin: "0 auto", transition: "transform 0.2s ease-in-out" }}>         
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg1.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div> 
            <div className="carousel-item" style={{ textAlign: "center" }}>
              <img src="/carouselimg2.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Right to Education Act</h5>
              </div>
            </div>
            <div className="carousel-item" style={{ textAlign: "center" }}>
              <img src="/carouselimg3.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Right to Participation</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg4.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Protection From Child Labour</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg5.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg6.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg7.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg8.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg9.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg10.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg11.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div>
            <div className="carousel-item active" style={{ textAlign: "center" }}>
              <img src="/carouselimg12.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "400px", width: "auto", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
              <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px", color: "white" }}>
                <h5>Realization of Rights</h5>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{ width: "auto", marginTop: "0" }}>
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50%" }}></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{ width: "auto", marginTop: "0" }}>
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50%" }}></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
  );
};

export default Carousel;
