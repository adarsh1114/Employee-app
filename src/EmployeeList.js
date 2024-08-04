// import React, { useEffect, useState } from 'react';
// import { getEmployees, deleteEmployee } from './api';
// import { Link } from 'react-router-dom';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     getEmployees().then((response) => setEmployees(response.data)).catch(error => {
//       console.error('Error fetching employees:', error.response ? error.response.data : error.message);
//     });
//   }, []);

//   const handleDelete = (id) => {
//     deleteEmployee(id).then(() => {
//       setEmployees(employees.filter((employee) => employee._id !== id));
//     }).catch(error => {
//       console.error('Error deleting employee:', error.response ? error.response.data : error.message);
//     });
//   };

//   if (employees.length === 0) {
//     return <div>No Employees in the system</div>;
//   }

//   return (
//     <div>
//       <h1>Employees</h1>
//       <ul>
//         {employees.map((employee) => (
//           <li key={employee._id}>
//             {employee.name} ({employee.emp_id})
//             <Link to={`/employees/${employee._id}`}>View</Link>
//             <button onClick={() => handleDelete(employee._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <Link to="/employees/add">Add Employee</Link>
//     </div>
//   );
// };

// export default EmployeeList;
import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from './api';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((response) => setEmployees(response.data.data)).catch(error => {
      console.error('Error fetching employees:', error.response ? error.response.data : error.message);
    });
  }, []);

  const handleDelete = (id) => {
    deleteEmployee(id).then(() => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }).catch(error => {
      console.error('Error deleting employee:', error.response ? error.response.data : error.message);
    });
  };

  if (employees.length === 0) {
    return <div>No Employees in the system</div>;
  }

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.employee_name} ({employee.id})
            <Link to={`/employees/${employee.id}`}>View</Link>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/employees/add">Add Employee</Link>
    </div>
  );
};

export default EmployeeList;
