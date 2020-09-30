import React, { useState, useEffect } from 'react';
import CustomersTable from './CustomersTable';
import { customers } from '../data';
import CustomerDetails from './CustomerDetails';
import AddCustomer from './AddCustomer';

const CustomersList = (props) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [bankCustomers, setBankCustomers] = useState([]);

  const handleSelection = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleCreation = (customer) => {
    customer.id = bankCustomers.length + 1;
    const updated = [...bankCustomers, customer];
    setBankCustomers(updated);
  };

  useEffect(() => {
    setBankCustomers(customers);
  }, []);

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col'>
          <CustomersTable
            customers={bankCustomers}
            onSelection={handleSelection}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <AddCustomer onCreation={handleCreation} />
        </div>
        <div className='col-md-6'>
          <CustomerDetails customer={selectedCustomer} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomersList;
