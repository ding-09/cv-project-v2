import React, { useState } from 'react';
import SectionHeading from '../../layout/SectionHeading';
import OpenModalBtn from '../OpenModalBtn';
import WorkExpForm from './WorkExpForm';
import DisplayWorkExp from './DisplayWorkExp';

function Work() {
  const [displayForm, setDisplay] = useState(false);
  let [workExp, addWorkExp] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveWork = (workInfo) => {
    const newWorkExp = [...workExp, workInfo];
    addWorkExp(newWorkExp);
    handleDisplay();
  };

  const deleteHist = (id) => {
    const newWorkExp = [...workExp];
    newWorkExp.splice(id, 1);
    addWorkExp(newWorkExp);
  };

  return (
    <>
      <SectionHeading title="Work Experience" />
      {workExp.map((workHist, index) => (
        <DisplayWorkExp
          workHist={workHist}
          key={index}
          deleteHist={deleteHist}
        />
      ))}
      <WorkExpForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveWork={saveWork}
      />
      <OpenModalBtn title="Work Experience" handleDisplay={handleDisplay} />
    </>
  );
}

export default Work;
