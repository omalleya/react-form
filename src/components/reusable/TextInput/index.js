import React from 'react';

const TextInput = (props) => (
  <div>
    <label htmlFor={props.id}>
      {props.label} {props.required ? <span style={{ color: 'red' }}> *</span> : ''}
    </label>
    <input
      type="text"
      id={props.id}
      value={props.value}
      onChange={({ target: { value }}) =>
        props.onChange(value, () => console.log(`validating ${ value }`))
      }
    /> 
  </div>
);

export default TextInput;

