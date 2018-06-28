import React from 'react';

import FormContainer from '../reusable/FormContainer';
import TextInput from '../reusable/TextInput';
import OneDeeper from '../OneDeeper';

class Form extends React.Component {
  state = {
    name: '',
    password: '',
    deeper: '',
  };

  render = () => (
  <FormContainer
    onSubmit={() => console.log('submitting', this.state)}
    isDisabled={this.state.name === ''}
  >
    <TextInput
      id="name"
      value={this.state.name}
      label="Name"
      required
      onChange={(name, validator) => {
        this.setState({ name });
        validator();
      }}
    />
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
  </FormContainer>
  );
}

export default Form;

