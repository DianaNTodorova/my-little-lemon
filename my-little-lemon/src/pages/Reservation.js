import SmallSection from '../components/SmallSection';
import Navbar from './Navbar';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Container } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

export default function Reservation() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [guest, setGuest] = useState(1);
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
          <div className="container text-center">
            <div className="row">
              <label for="basic-url" class="form-label">
                How many guests?
              </label>
              <div>
                <div class="input-group mb-3">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon1"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder=""
                    aria-label="Example text with button addon"
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
            <div className="row">
              <label for="basic-url" class="form-label">
                Select a Date{' '}
              </label>
              <div className="container text-center mt-5">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Select a date"
                  dateFormat="MMMM d, yyyy" // Custom date format
                  minDate={new Date()} // Prevents selection of past dates
                  className="form-control" // Bootstrap styling
                  inline
                />
                {/*
                {selectedDate && (
                  <p className="mt-3">
                    Selected Date: {selectedDate.toLocaleDateString()}
                  </p>
                )}
                */}
              </div>
            </div>
            <div className="row">
              <label for="basic-url" class="form-label">
                Select available hour
              </label>
              <Container className="text-center">
                <div className="d-flex flex-wrap justify-content-center">
                  {generateTimeButtons().map((time) => (
                    <Button
                      key={time}
                      className="m-2"
                      variant={
                        time === selectedTime ? 'primary' : 'outline-primary'
                      }
                      onClick={() => handleTimeClick(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                {/*{selectedTime && (
                  <p className="mt-3">Selected Time: {selectedTime}</p>
                )}*/}
              </Container>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
