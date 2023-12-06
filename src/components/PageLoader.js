import './PageLoader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function PageLoader(){
    return (
        <div className="pageloader">
            <p className="spinner" id='spinner'>
            <FontAwesomeIcon icon={faSpinner} spin size="5x" />            </p>
        </div>
    );
}