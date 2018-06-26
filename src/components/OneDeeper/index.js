import React from 'react';

import TextInput from '../reusable/TextInput';

const OneDeeper = (props) => (
    <TextInput
      id="deeper"
      value={props.deeper}
      label="Deeper"
      onChange={(deeper, validator) => {
        // set the FormContainer's state for this property
        props.setState(deeper, 'deeper');
        validator();
      }}
    />
  );

export default OneDeeper;

