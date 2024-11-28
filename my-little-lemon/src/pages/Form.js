import SmallSection from '../components/SmallSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Form() {
  const navigate = useNavigate();

  // State management for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mealPreference: '',
    occasion: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid.';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Navigate to confirmation page with form data (optional)
      navigate('/confirmation', { state: { formData } });
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <SmallSection />
        </section>

        <div className="container text-start">
          <div className="row justify-content-center">
            <div className="col col-4 mt-5">
              <label className="form-label label-text">
                First Name:{' '}
                <FontAwesomeIcon
                  icon={faAsterisk}
                  className="icon-top-corner"
                />
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && (
                <p className="text-danger">{errors.firstName}</p>
              )}

              <label className="form-label label-text">
                Last Name:{' '}
                <FontAwesomeIcon
                  icon={faAsterisk}
                  className="icon-top-corner"
                />
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              {errors.lastName && (
                <p className="text-danger">{errors.lastName}</p>
              )}

              <label className="form-label label-text">
                Email address:{' '}
                <FontAwesomeIcon
                  icon={faAsterisk}
                  className="icon-top-corner"
                />
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="youremail@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="text-danger">{errors.email} </p>}

              <label className="form-label">Meal preferences:</label>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="mealPreference">
                  <FontAwesomeIcon icon={faPlateWheat} />
                </label>
                <select
                  className="form-select"
                  id="mealPreference"
                  name="mealPreference"
                  value={formData.mealPreference}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Gluten-free">Gluten-free</option>
                </select>
              </div>

              <label className="form-label">Occasions:</label>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="occasion">
                  <FontAwesomeIcon icon={faChampagneGlasses} />
                </label>
                <select
                  className="form-select"
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Business Dinner">Business Dinner</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>

              <label className="form-label">Special requests:</label>
              <textarea
                className="form-control"
                id="specialRequests"
                name="specialRequests"
                rows="3"
                value={formData.specialRequests}
                onChange={handleChange}
              ></textarea>

              <button className="main-button mt-3" onClick={handleSubmit}>
                Finish reservation
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
