import React from 'react';
import { NavLink } from 'react-router-dom';
const ExpenseListItem = ({ id, description, amount, createdAt }) =>(
    <div>
        <h3>{description}</h3>
        <p>Bill Amount : {amount}</p>
        <p>Created At :  {createdAt}</p>
        <button>
        <NavLink to={`/edit/${id}`}>Edit</NavLink>
        </button>
        
    </div>
);
export default ExpenseListItem;