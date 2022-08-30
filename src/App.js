
import './App.css';
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import {auth} from './firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      <div className='main-container'>
        {user ? <Chat/> :<SignIn />}
      </div>
    </>
  );
}

export default App;
