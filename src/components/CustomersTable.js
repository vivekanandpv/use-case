import React from 'react';

const CustomersTable = (props) => {
  const handleClick = (customer) => {
    props.onSelection(customer);
  };

  return (
    <table className='table table-hover table-bordered table-sm'>
      <thead className='thead-light'>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.customers.map((c) => (
          <tr key={c.id} onClick={() => handleClick(c)}>
            <th scope='row'>{c.id}</th>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
            <td>{c.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomersTable;
