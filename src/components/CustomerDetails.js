import React from 'react';

const CustomerDetails = (props) => {
  return (
    <React.Fragment>
      <h3>Customer Details</h3>
      <hr />
      <p>ID: {props.customer?.id}</p>
      <p>First Name: {props.customer?.firstName}</p>
      <p>Last Name: {props.customer?.lastName}</p>
      <p>Email: {props.customer?.email}</p>
    </React.Fragment>
  );
};

export default CustomerDetails;
