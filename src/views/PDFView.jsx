import React from 'react';
import { useParams } from 'react-router-dom';

const PDFView = () => {
  const { id } = useParams();

  return (
    <div className='d-flex justify-content-center align-items-center my-4'>
      {process.env.REACT_APP_FILEBASE_URL + localStorage.getItem('previousPathname') + id}
      <embed src={process.env.REACT_APP_FILEBASE_URL + localStorage.getItem('previousPathname') + id} type="application/pdf" width="80%" height="600px" />
    </div>
  );
};

export default PDFView;
