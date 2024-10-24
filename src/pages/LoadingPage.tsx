import { Link } from 'react-router-dom';

function LoadingPage() {
  return (
    <div>
      <h1>Loading Page</h1>
      <nav>
        <ul>
          <li><Link to="/settimer">Go to Set Timer</Link></li>
          <li><Link to="/analogtimer">Go to Analog Timer</Link></li>
          <li><Link to="/digitaltimer">Go to Digital Timer</Link></li>
          <li><Link to="/alarmview">Go to Alarm View</Link></li>
          <li><Link to="/pauseview">Go to Pause View</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default LoadingPage;
