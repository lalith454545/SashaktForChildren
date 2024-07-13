import React from 'react';
import CreditPage from './Creditpage';

const AboutSashakt = () => {
  return (
    <div style={{backgroundImage:'url(Aboutsash.png)', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover' ,height:'92vh'}}>
    <div style={{color:'white'}}>
      <h1>Welcome to Sashakt!</h1>
      <p>
        At Sashakt, we believe that every child deserves to understand their
        rights in a way that sparks curiosity, ignites creativity, and fosters a
        sense of empowerment. Our team of six passionate individuals—Lalith,
        Yeshwanth, Rahul, Sudhamsh, Akshita, and Suhani—is dedicated to making
        education an exhilarating adventure.
      </p>
      <p>
        In the vibrant world of Sashakt, children embark on a thrilling journey
        where knowledge is gained through play, and understanding their rights
        becomes an exciting quest. Our carefully crafted games, delightful
        characters, and engaging narratives weave together to create an immersive
        experience that not only educates but also entertains.
      </p>
      <p>
        Join us on this exciting expedition as we empower the leaders of tomorrow,
        one game at a time. Sashakt—because every child deserves to be informed,
        inspired, and truly sashakt (empowered)!
      </p>
      <p>🚀 Let the adventure begin! 🚀</p>
      </div>
      <CreditPage/>
    </div>
  );
};

export default AboutSashakt;
