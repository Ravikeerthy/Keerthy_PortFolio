import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().required('Message is required')
});

const Contact = () => {
  
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('https://backend-jqfr.onrender.com/contact', values, {
        headers: {
          'Content-Type': 'application/json',
        }
        // const response = await axios.post('http://localhost:5000/contact', values, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   }
      });
      if (response.status === 200) {
        toast.success(response.data.message || 'Your message has been sent!');
        resetForm(); 
      } else {
        toast.error('There was an error, please try again.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      toast.error(
        error.response?.data?.message || 'Error sending message. Please try again later.'
      );
    }
  };

  return (
    <div className="contact-container d-flex align-items-center justify-content-center">
      <div className="contact-card p-4 shadow-lg rounded">
        <h2 className="text-center">Get in Touch</h2>
        <p className="text-center text-muted" id="p-tag">We'd love to hear from you!</p>

        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
           
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="mt-3">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <Field
                type="text"
                className="form-control"
                name="name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field
                type="email"
                className="form-control"
                name="email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <Field
                as="textarea"
                className="form-control"
                rows="3"
                name="message"
              />
              <ErrorMessage name="message" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn w-100">Send Message</button>
          </Form>
        </Formik>

        <div className="social-icons mt-4 text-center">
          <a href="https://www.linkedin.com/in/keerthana-ravi-a0b803228/" className="me-3">
            <i className="fab fa-linkedin fs-3"></i>
          </a>
          <a href="https://github.com/Ravikeerthy" className="me-3">
            <i className="fab fa-github fs-3"></i>
          </a>
          <a href="tel:+1234567890" className="me-3">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:ravikeerthy1807@gmail.com">
            <i className="fas fa-envelope fs-3"></i>
          </a>
        </div>
      </div>
      <ToastContainer position="top-center" />

    </div>
  );
};

export default Contact;
