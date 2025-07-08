import React from 'react';
import '../styles/renderfield.css'

const RenderField = ({ props }) => {

  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        if (value !== props.form) {
          return (
            <p key={key} className={key}>
              {props[key]}
            </p>
          );
        }
      })}
    </>
  );
};

export default RenderField;
