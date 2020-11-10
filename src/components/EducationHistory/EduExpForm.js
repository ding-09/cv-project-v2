import React, { useState } from 'react';
import uniqid from 'uniqid';

function EduExpForm(props) {
  const initialState = {
    school: '',
    dateAttended: '',
    studyField: '',
    location: '',
    degree: '',
    id: uniqid(),
  };

  const [eduInfo, setInfo] = useState(initialState);

  const resetState = () => {
    setInfo(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveEdu(eduInfo);
    resetState();
  };

  if (!props.displayForm) return null;
  return (
    <div className="modal-container">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input
            onChange={handleChange}
            type="text"
            name="school"
            id="schoolInput"
            value={eduInfo.school}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateAttended">
            Date Attended <span>(MM/YYYY - MM/YYYY)</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="dateAttended"
            id="dateAttended-input"
            value={eduInfo.dateAttended}
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <div className="select-container">
            <select
              name="degree"
              id="degree-input"
              onChange={handleChange}
              value={eduInfo.degree}
            >
              <option>None</option>
              <option>High school or equivalent</option>
              <option>Associate</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>Doctorate</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="studyField">Field of study</label>
          <input
            onChange={handleChange}
            type="text"
            name="studyField"
            id="studyField-input"
            value={eduInfo.studyField}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">
            Location <span>(e.g. Los Angeles, CA)</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="location"
            id="schoolLocation-input"
            value={eduInfo.location}
          />
        </div>

        <div className="modal-action-btns">
          <input type="submit" value="Save" className="save-info-btn" />
          <button className="close-form-btn" onClick={props.handleDisplay}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EduExpForm;
