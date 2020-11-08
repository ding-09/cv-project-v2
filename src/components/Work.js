import React, { useState } from 'react';
import SectionHeading from '../layout/SectionHeading';
import OpenModalBtn from './OpenModalBtn';
import WorkExpForm from './WorkExpForm';

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
    
  return (
    <>
      <SectionHeading title="Work Experience" />
      <WorkExpForm displayForm={displayForm} handleDisplay={handleDisplay} saveWork={saveWork}/>
      <OpenModalBtn title="Work Experience" handleDisplay={handleDisplay} />
    </>
  );
}

export default Work;
