import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {BookContext,  BookProvider } from './MCR1/contexts/BookContext';
import { BrowserRouter } from 'react-router-dom';
import { HabitContext, HabitProvider } from './MCR2/contexts/HabitContext';

export { BookContext, HabitContext }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <BookProvider>
    <HabitProvider> 
    <App />
    </HabitProvider> 
    </BookProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
