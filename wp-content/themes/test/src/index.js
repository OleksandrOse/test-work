import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './scripts/App';
import {
  ContactInfo,
  Quantity,
  Price,
  Done,
} from './scripts/pages';

const root = ReactDOM.createRoot(
  document.querySelector("#test-work")
);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ContactInfo />} />
        <Route path="contact-info" element={<Navigate to="/" replace />} />
        <Route path="quantity" element={<Quantity />} />
        <Route path="price" element={<Price />} />
        <Route path="done" element={<Done/>} />
      </Route>
    </Routes>
  </Router>
);
