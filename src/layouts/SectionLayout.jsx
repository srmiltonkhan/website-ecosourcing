import React from 'react';

const SectionLayout = ({ id, title, backgroundColor }) => {
  return (
    <div id={id} style={{ padding: '100px 0', backgroundColor }}>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionLayout;
