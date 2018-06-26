import React from 'react';

const TextInput = (props) => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
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

