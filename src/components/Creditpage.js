import React from 'react';
import './Creditpage.css'; // Import your stylesheet for styling

const CreditPage = () => {
  const members = [
    {
      id: 1,
      name: 'Rahul',
      photo: 'Rahul.png.jpg',
    },
    {
      id: 2,
      name: 'Akshita',
      photo: 'Akshita.jpg',
    },
    {
        id: 3,
        name: 'Sudhamsh',
        photo: 'Sudhamsh.jpg',
    },
    {
        id: 4,
        name: 'Yeshwanth',
        photo: 'Yeshwanth.jpg',
     },
    {
        id: 5,
        name: 'Suhani',
        photo: 'Suhani.jpg',
    },
    {
        id: 6,
        name: 'Lalith',
        photo: 'Lalith.jpg',
    },
    
  ];

  return (
    <div className="credit-page">
      <h1 style={{color:'white'}}>TriumphTroop</h1>
      <div className="members-container">
        {members.map((member) => (
          <div key={member.id} className="member">
            <img src={member.photo} alt={member.name} />
            <p style={{color:'white'}}>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditPage;
