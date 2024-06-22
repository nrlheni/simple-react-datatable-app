import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
  { id: 1, name: "John Doe", age: 28, gender: "Male", phone_number: "123-456-7890" },
  { id: 2, name: "Jane Smith", age: 34, gender: "Female", phone_number: "987-654-3210" },
  { id: 3, name: "Alice Johnson", age: 23, gender: "Female", phone_number: "456-789-0123" },
  { id: 4, name: "Bob Brown", age: 45, gender: "Male", phone_number: "321-654-0987" },
  { id: 5, name: "Charlie White", age: 30, gender: "Male", phone_number: "555-123-4567" }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
