import React, { useState } from 'react';
import SectionHeading from '../../layout/SectionHeading';
import OpenModalBtn from '../buttons/OpenModalBtn';
import EduExpForm from './EduExpForm';
import DisplayEdu from './DisplayEdu';

function Education() {
  const [displayForm, setDisplay] = useState(false);
  let [edu, addEduInfo] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveEdu = (eduInfo) => {
    const newEduInfo = [...edu, eduInfo];
    addEduInfo(newEduInfo);
    handleDisplay();
  };

  const deleteEdu = (id) => {
    const newEduInfo = [...edu];
    newEduInfo.splice(id, 1);
    addEduInfo(newEduInfo);
  };

  return (
    <>
      <SectionHeading title="Education" />

      {edu.map((eduHist) => (
        <DisplayEdu eduHist={eduHist} key={eduHist.id} deleteEdu={deleteEdu} />
      ))}
      <EduExpForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveEdu={saveEdu}
      />
      <OpenModalBtn title="Education" handleDisplay={handleDisplay} />
    </>
  );
}

export default Education;
