import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Home() {
  const [members, setMembers] = useState([]);
  const [disabledValue, setDisabledValue] = useState(false); // Single state to disable all buttons

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('https://voter-backend-1.onrender.com/api/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const voteForMember = async (memberId) => {
    try {
      await axios.post('https://voter-backend-1.onrender.com/api/members/vote', { memberId });
      fetchMembers(); // Refresh the list after voting
      const sound = new Audio('images/beep-01a.mp3');
      sound.play(); // Uncomment to play sound on vote

      // Disable all vote buttons
      setDisabledValue(true);

      // Re-enable all buttons after 10 seconds
      setTimeout(() => {
        setDisabledValue(false);
      }, 10000);

      
     
    } catch (error) {
      console.error('Error voting for member:', error);
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center my-5'>Vote for Your Favorite Member</h1>
        <div className="row">
          {members.map((member) =>
            <div className="col-md-3 my-3" key={member._id}>
              <div className="cards">
                <div className="card-img">
                  <img src='/images/user.png' className="card-img-top" alt="..." />
                </div>
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button
                  className=""
                  onClick={() => {
                    voteForMember(member._id);
                    
                  }}
                  disabled={disabledValue}
                >
                  Vote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}



export default Home;
