import React from 'react';

import TextInput from '../reusable/TextInput';
import OneDeeper from '../OneDeeper';

class Form extends React.Component {
  state = {
    name: '',
    password: '',
    deeper: '',
  };

  render = () => (
   <form>
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={this.state.name}
        onChange={({ target: { value: name }}) => this.setState({ name })}
      /> 
    </div>
    <TextInput
      id="password"
      value={this.state.password}
      label="Password"
      onChange={(password, validator) => {
        this.setState({ password });
        validator();
      }}
    />
    <OneDeeper
      deeper={this.state.deeper}
      setState={(value, propName) => console.log(propName, value) || this.setState({ [propName]: value }, () => console.log(this.state.deeper))} />
  </form>
  );
}

export default Form;

