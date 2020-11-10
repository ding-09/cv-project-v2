import React from 'react';


function DeleteBtn(props) {
  const { id } = props;

  return (
    <div className="delete-btn-container">
      <button className="delete-btn" onClick={props.deleteEdu.bind(this, id)}>
        X
      </button>
    </div>
  );
}

function DisplayEdu(props) {
  const { eduHist } = props;

  return (
    <div className="render-info">
      <h4 className="main-title">{eduHist.school}</h4>
      <p className="sub-info">{eduHist.degree}</p>
      <p className="sub-info">{eduHist.studyField}</p>
      <p className="sub-info">{eduHist.location}</p>
      <p className="date-info">{eduHist.dateAttended}</p>
      <DeleteBtn id={eduHist.id} deleteEdu={props.deleteEdu} />
    </div>
  );
}

export default DisplayEdu;
