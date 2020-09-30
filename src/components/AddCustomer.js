import React, { useState } from 'react';
import FormInput from './FormInput';

const AddCustomer = (props) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleFirstName = (value) => {
    setFirstName(value);
  };

  const handleLastName = (value) => {
    setLastName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  compile the form data
    const customer = {
      firstName,
      lastName,
      email,
    };

    //  transmit the object to the parent here
    props.onCreation(customer);
    e.target.reset();
  };

  return (
    <React.Fragment>
      <h3>Add Customer</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='First Name'
          label='First Name'
          required
          autoFocus
          handleChange={handleFirstName}
        />
        <FormInput
          type='text'
          placeholder='Last Name'
          label='Last Name'
          required
          handleChange={handleLastName}
        />
        <FormInput
          type='email'
          placeholder='Email'
          label='Email'
          required
          handleChange={handleEmail}
        />

        <button className='btn btn-primary' type='submit'>
          Submit
        </button>

        <button className='btn btn-secondary float-right' type='reset'>
          Reset
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddCustomer;
