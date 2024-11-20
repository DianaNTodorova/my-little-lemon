import SmallSection from '../components/SmallSection';
import Navbar from './Navbar';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

export default function Reservation() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [guest, setGuest] = useState(1);
  const navigate = useNavigate();
  const increment = () => setGuest(guest < 30 ? guest + 1 : 1);
  const decrement = () => setGuest(guest > 1 ? guest - 1 : 1);
  function handleChange(e) {
    const newValue = parseInt(e.target.value, 10);
    setGuest(isNaN(newValue) ? 1 && guest < 30 : newValue);
  }
  const generateTimeButtons = () => {
    const times = [];
    const startHour = 12;
    const endHour = 23;
    for (let hour = startHour; hour <= endHour; hour++) {
      const timeString = `${hour}:00`;
      times.push(timeString);
    }
    return times;
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time); // Set the selected time
    console.log('Selected time:', time); // Optionally handle further actions
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
        <section>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              {/* First Slide: Guest Input */}
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="container text-center py-5">
                  <div className="row justify-content-center">
                    <div className="col-10 col-md-6">
                      <label htmlFor="basic-url" className="form-label">
                        How many guests?
                      </label>
                      <div className="input-group mb-3">
                        <button
                          className="btn btn-outline-secondary "
                          type="button"
                          id="button-addon1"
                          onClick={decrement}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          aria-label="Guest count"
                          aria-describedby="button-addon1"
                          value={guest}
                          onChange={handleChange}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                          onClick={increment}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Slide: Date Picker */}
              <div className="carousel-item" data-bs-interval="2000">
                <div className="container text-center py-5">
                  <div className="row justify-content-center">
                    <div className="col-10 col-md-6">
                      <label htmlFor="basic-url" className="form-label">
                        Select a Date
                      </label>
                      <div className="d-flex justify-content-center mt-3">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          placeholderText="Select a date"
                          dateFormat="MMMM d, yyyy"
                          minDate={new Date()}
                          className="form-control"
                          inline
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Slide: Time Selection Buttons */}
              <div className="carousel-item">
                <div className="container text-center py-5">
                  <div className="row justify-content-center">
                    <div className="col-10 col-md-6">
                      <label htmlFor="basic-url" className="form-label">
                        Select available hour
                      </label>
                      <div className="d-flex flex-wrap justify-content-center mt-3">
                        {generateTimeButtons().map((time) => (
                          <Button
                            key={time}
                            className="m-2"
                            variant={
                              time === selectedTime
                                ? 'primary'
                                : 'outline-primary'
                            }
                            onClick={() => handleTimeClick(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fourth Slide */}
              <div className="carousel-item">
                <div className="container text-center py-5">
                  <div className="row justify-content-center">
                    <div className="col-10 col-md-6">
                      <h2>Your booking!</h2>
                      <div className="d-flex flex-column align-items-center mt-3">
                        <div>
                          <p>
                            Number of guests:{' '}
                            {!guest ? 'Please enter number of guests' : guest}
                          </p>
                        </div>
                        <div>
                          <p>
                            Selected date is:{' '}
                            {selectedDate
                              ? selectedDate.toLocaleDateString()
                              : 'Not selected'}
                          </p>
                        </div>

                        <div>
                          <p>
                            Selected available hour is:{' '}
                            {!selectedTime ? 'Not selected' : selectedTime}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          {guest && selectedDate && selectedTime ? (
                            <button
                              className="main-button"
                              onClick={() => navigate('/form')}
                            >
                              {' '}
                              Confirm
                            </button>
                          ) : (
                            <button className="main-button disabled" disabled>
                              Confirm
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
