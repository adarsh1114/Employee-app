// import React, { useState } from 'react';

// function EmployeeForm({ addEmployee }) {
//   const [newEmployee, setNewEmployee] = useState({
//     name: '',
//     address: {
//       line1: '',
//       city: '',
//       country: '',
//       zip_code: ''
//     },
//     contact_methods: []
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewEmployee(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleAddressChange = (event) => {
//     const { name, value } = event.target;
//     setNewEmployee(prevState => ({
//       ...prevState,
//       address: {
//         ...prevState.address,
//         [name]: value
//       }
//     }));
//   };

//   const handleAddContactMethod = () => {
//     setNewEmployee(prevState => ({
//       ...prevState,
//       contact_methods: [
//         ...prevState.contact_methods,
//         { contact_method: '', value: '' }
//       ]
//     }));
//   };

//   const handleContactMethodChange = (index, field, value) => {
//     const updatedContactMethods = [...newEmployee.contact_methods];
//     updatedContactMethods[index][field] = value;
//     setNewEmployee(prevState => ({
//       ...prevState,
//       contact_methods: updatedContactMethods
//     }));
//   };

//   const handleDeleteContactMethod = (index) => {
//     const updatedContactMethods = [...newEmployee.contact_methods];
//     updatedContactMethods.splice(index, 1);
//     setNewEmployee(prevState => ({
//       ...prevState,
//       contact_methods: updatedContactMethods
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     addEmployee(newEmployee);
//     setNewEmployee({
//       name: '',
//       address: {
//         line1: '',
//         city: '',
//         country: '',
//         zip_code: ''
//       },
//       contact_methods: []
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-6">
//       <div className="mb-4">
//         <label htmlFor="name" className="block font-bold mb-2">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={newEmployee.name}
//           onChange={handleInputChange}
//           className="border border-gray-400 p-2 w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <h3 className="font-bold mb-2">Address:</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="line1" className="block mb-2">
//               Line 1:
//             </label>
//             <input
//               type="text"
//               id="line1"
//               name="line1"
//               value={newEmployee.address.line1}
//               onChange={handleAddressChange}
//               className="border border-gray-400 p-2 w-full"
//             />
//           </div>
//           <div>
//             <label htmlFor="city" className="block mb-2">
//               City:
//             </label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={newEmployee.address.city}
//               onChange={handleAddressChange}
//               className="border border-gray-400 p-2 w-full"
//             />
//           </div>
//           <div>
//             <label htmlFor="country" className="block mb-2">
//               Country:
//             </label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={newEmployee.address.country}
//               onChange={handleAddressChange}
//               className="border border-gray-400 p-2 w-full"
//             />
//           </div>
//           <div>
//             <label htmlFor="zip_code" className="block mb-2">
//               Zip Code:
//             </label>
//             <input
//               type="text"
//               id="zip_code"
//               name="zip_code"
//               value={newEmployee.address.zip_code}
//               onChange={handleAddressChange}
//               className="border border-gray-400 p-2 w-full"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mb-4">
//         <h3 className="font-bold mb-2">Contact Methods:</h3>
//         {newEmployee.contact_methods.map((contactMethod, index) => (
//           <div key={index} className="flex items-center mb-2">
//             <select
//               name="contact_method"
//               value={contactMethod.contact_method}
//               onChange={(event) =>
//                 handleContactMethodChange(
//                   index,
//                   'contact_method',
//                   event.target.value
//                 )
//               }
//               className="border border-gray-400 p-2 mr-2"
//             >
//               <option value="">Select Contact Method</option>
//               <option value="EMAIL">Email</option>
//               <option value="PHONE">Phone</option>
//             </select>
//             <input
//               type="text"
//               name="value"
//               value={contactMethod.value}
//               onChange={(event) =>
//                 handleContactMethodChange(index, 'value', event.target.value)
//               }
//               className="border border-gray-400 p-2 flex-grow"
//             />
//             <button
//               type="button"
//               onClick={() => handleDeleteContactMethod(index)}
//               className="px-4 py-2 bg-red-500 text-white rounded-md ml-2"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={handleAddContactMethod}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//         >
//           Add Contact Method
//         </button>
//       </div>
//       <button
//         type="submit"
//         className="px-4 py-2 bg-green-500 text-white rounded-md"
//       >
//         Add Employee
//       </button>
//     </form>
//   );
// }

// export default EmployeeForm;
