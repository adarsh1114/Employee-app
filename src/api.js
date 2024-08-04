import axios from 'axios';

const API_BASE_URL = 'https://dummy.restapiexample.com/api/v1';

export const getEmployees = () => 
  axios.get(`${API_BASE_URL}/employees`);

export const getEmployee = (id) => 
  axios.get(`${API_BASE_URL}/employee/${id}`);

export const createEmployee = (data) => 
  axios.post(`${API_BASE_URL}/create`, data).catch(error => {
    console.error('Error creating employee:', error.response ? error.response.data : error.message);
    throw error;
  });

export const updateEmployee = (id, data) => 
  axios.put(`${API_BASE_URL}/update/${id}`, data).catch(error => {
    console.error('Error updating employee:', error.response ? error.response.data : error.message);
    throw error;
  });

export const deleteEmployee = (id) => 
  axios.delete(`${API_BASE_URL}/delete/${id}`).catch(error => {
    console.error('Error deleting employee:', error.response ? error.response.data : error.message);
    throw error;
  });

