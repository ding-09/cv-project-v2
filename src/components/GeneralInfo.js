import React, { useState } from 'react';

function GeneralInfo() {
  const [info, setInfo] = useState({
    userName: '',
    location: '',
    phoneNum: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="gen-info-container">
      <input
        type="text"
        name="userName"
        value={info.userName}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="location"
        value={info.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="text"
        name="phoneNum"
        value={info.phoneNum}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="text"
        name="email"
        value={info.email}
        onChange={handleChange}
        placeholder="Email"
      />
      </div>
  );
}

export default GeneralInfo;
