import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="card w-50">
        <div class="card-body">
          <p>
            <FontAwesomeIcon icon={faCircleCheck} />
          </p>
          <h5 class="card-title">Table Reserved!</h5>
          <p class="card-text">
            Thank you for your reservation in Little Lemon restaurant. You will
            receive email confirmation soon.
          </p>
          <button className="main-button" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faChevronLeft} />
            {''} Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
