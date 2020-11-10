import React, { useState } from 'react';

function GeneralInfo(props) {
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

  const formatNum = (e) => {
    let phone = e.target.value.split('');
    phone.splice(0, 0, '(');
    phone.splice(4, 0, ') ');
    phone.splice(8, 0, '-');
    const newPhoneNum = phone.join('');
    setInfo({ ...info, phoneNum: newPhoneNum });
  };

  return (
    <>
      <input
        type="text"
        name="userName"
        value={info.userName}
        onChange={handleChange}
        placeholder="Name"
        id="userName-input"
      />
      <input
        type="text"
        name="location"
        value={info.location}
        onChange={handleChange}
        placeholder="Location"
        id="location-input"
      />
      <input
        type="text"
        name="phoneNum"
        value={info.phoneNum}
        onChange={handleChange}
        onBlur={formatNum}
        placeholder="Phone"
        id="phoneNum-input"
      />
      <input
        type="text"
        name="email"
        value={info.email}
        onChange={handleChange}
        placeholder="Email"
        id="email-input"
      />
    </>
  );
}

export default GeneralInfo;
