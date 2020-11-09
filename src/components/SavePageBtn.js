import React from 'react';

function SavePageBtn() {
  const formatPage = () => {
    alert('hello');
  };
  return (
    <>
      <button onClick={formatPage}>Save</button>
    </>
  );
}

export default SavePageBtn;
