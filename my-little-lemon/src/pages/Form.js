import SmallSection from '../components/SmallSection';
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
      <div class="container text-start">
        <div class="row justify-content-center">
          <div class="col col-4 mt-5">
            <label for="exampleFormControlInput1" class="form-label">
              First Name:
            </label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                +
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <label for="exampleFormControlInput1" class="form-label">
              Last Name:
            </label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                +
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="youremail@gmail.com"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
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
