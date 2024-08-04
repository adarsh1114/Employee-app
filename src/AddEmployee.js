
// import React, { useState } from 'react';
// import { createEmployee } from './api';
// import { useNavigate } from 'react-router-dom';

// const AddEmployee = () => {
//   const navigate = useNavigate();
//   const [employee, setEmployee] = useState({
//     name: '',
//     address: {
//       line1: '',
//       city: '',
//       country: '',
//       zip_code: ''
//     },
//     contact_methods: [{ contact_method: 'EMAIL', value: '' }]
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, address: { ...employee.address, [name]: value } });
//   };

//   const handleContactChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedContacts = [...employee.contact_methods];
//     updatedContacts[index][name] = value;
//     setEmployee({ ...employee, contact_methods: updatedContacts });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(employee); // Log the employee data
//     createEmployee(employee).then(() => {
//       navigate('/');
//     }).catch(error => {
//       console.error('There was an error creating the employee!', error.response ? error.response.data : error.message);
//     });
//   };

//   return (
//     <div>
//       <h1>Add Employee</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input name="name" value={employee.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Address Line 1</label>
//           <input name="line1" value={employee.address.line1} onChange={handleAddressChange} required />
//         </div>
//         <div>
//           <label>City</label>
//           <input name="city" value={employee.address.city} onChange={handleAddressChange} required />
//         </div>
//         <div>
//           <label>Country</label>
//           <input name="country" value={employee.address.country} onChange={handleAddressChange} required />
//         </div>
//         <div>
//           <label>Zip Code</label>
//           <input name="zip_code" value={employee.address.zip_code} onChange={handleAddressChange} required />
//         </div>
//         {employee.contact_methods.map((contact, index) => (
//           <div key={index}>
//             <label>Contact Method</label>
//             <select name="contact_method" value={contact.contact_method} onChange={(e) => handleContactChange(index, e)} required>
//               <option value="EMAIL">EMAIL</option>
//               <option value="PHONE">PHONE</option>
//             </select>
//             <input name="value" value={contact.value} onChange={(e) => handleContactChange(index, e)} required />
//           </div>
//         ))}
//         <button type="submit">Add Employee</button>
//       </form>
//     </div>
//   );
// };

// export default AddEmployee;
import React, { useState } from 'react';
import { createEmployee } from './api';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    salary: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee); // Log the employee data
    createEmployee(employee).then(() => {
      navigate('/');
    }).catch(error => {
      console.error('There was an error creating the employee!', error.response ? error.response.data : error.message);
    });
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input name="name" value={employee.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Salary</label>
          <input name="salary" value={employee.salary} onChange={handleChange} required />
        </div>
        <div>
          <label>Age</label>
          <input name="age" value={employee.age} onChange={handleChange} required />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
