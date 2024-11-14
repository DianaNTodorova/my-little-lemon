import SmallSection from '../components/SmallSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

export default function Form() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <SmallSection />
        </section>
      </main>
      <div className="container text-start">
        <div className="row justify-content-center">
          <div className="col col-4 mt-5">
            <label
              for="exampleFormControlInput1"
              className="form-label label-text "
            >
              First Name:{' '}
              <FontAwesomeIcon icon={faAsterisk} className="icon-top-corner" />
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <label
              for="exampleFormControlInput1"
              className="form-label label-text"
            >
              Last Name:{' '}
              <FontAwesomeIcon icon={faAsterisk} className="icon-top-corner" />
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <label
              for="exampleFormControlInput1"
              className="form-label label-text"
            >
              Email address:{' '}
              <FontAwesomeIcon icon={faAsterisk} className="icon-top-corner" />
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="youremail@gmail.com"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            <label for="exampleFormControlTextarea1" className="form-label">
              Meal preferences:
            </label>
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">
                <FontAwesomeIcon icon={faPlateWheat} />
              </label>
              <select class="form-select" id="inputGroupSelect01">
                <option selected>Select...</option>
                <option value="1">Vegetarian</option>
                <option value="2">Vegan</option>
                <option value="3">Gluten-free</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Special requests:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <Button>Confirm reservation</Button>
          </div>
        </div>
      </div>
    </>
  );
}
