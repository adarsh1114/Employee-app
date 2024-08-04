// import React, { useEffect, useState } from 'react';
// import { getEmployee } from './api';
// import { useParams } from 'react-router-dom';

// const EmployeeDetails = () => {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);

//   useEffect(() => {
//     getEmployee(id).then((response) => setEmployee(response.data));
//   }, [id]);

//   if (!employee) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{employee.name}</h1>
//       <p>Employee ID: {employee.emp_id}</p>
//       <p>Address: {employee.address.line1}, {employee.address.city}, {employee.address.country} - {employee.address.zip_code}</p>
//       <h2>Contact Methods</h2>
//       <ul>
//         {employee.contact_methods.map((contact, index) => (
//           <li key={index}>{contact.contact_method}: {contact.value}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EmployeeDetails;
import React, { useEffect, useState } from 'react';
import { getEmployee } from './api';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployee(id).then((response) => setEmployee(response.data.data)).catch(error => {
      console.error('Error fetching employee:', error.response ? error.response.data : error.message);
    });
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{employee.employee_name}</h1>
      <p>Employee ID: {employee.id}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
    </div>
  );
};

export default EmployeeDetails;
