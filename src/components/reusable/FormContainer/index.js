import React from 'react';

const FormContainer = (props) => (
  <form
    onSubmit={(e) => {
      // prevent default refresh
      e.preventDefault();
      props.onSubmit();
    }}
  >
    {props.children}
    <button type="submit" disabled={props.isDisabled}>Submit</button>
  </form>
);

export default FormContainer;

