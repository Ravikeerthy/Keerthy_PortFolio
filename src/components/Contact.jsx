import React, { useState } from "react";
import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
     receiver: 'ravikeerthy1807@gmail.com'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    } else {
      alert('There was an error, please try again.');
    }
  };

  return (
    <div className="contact-container d-flex align-items-center justify-content-center">
      <div className="contact-card p-4 shadow-lg rounded">
        <h2 className="text-center">Get in Touch</h2>
        <p className="text-center text-muted" id="p-tag">We'd love to hear from you!</p>

        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="3"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn w-100">Send Message</button>
        </form>

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
    </div>
  );
};

export default Contact;
