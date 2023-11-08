import Nav from './components/Nav.jsx';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const homeHandler = () => {
    // Code, z.B. Serveranfrage schicken usw.
    navigate('/');
  };
  const childOneHandler = () => {
    // Aufgaben erledigen...
    navigate('/child1');
  };
  const rueckwaertsHandler = () => {
    // mache irgendwas...
    navigate(-1);
  };
  const vorwaertsHandler = () => {
    navigate(1);
  };
  return (
    <>
      <Nav />
      <Outlet />
      <div className="controls">
        <button onClick={homeHandler}>Zu Home</button>
        <button onClick={childOneHandler}>Zu Child One</button>
        <button onClick={rueckwaertsHandler}>Gehe rückwärts</button>
        <button onClick={vorwaertsHandler}>Gehe vorwärts</button>
      </div>
    </>
  );
}

export default App;
