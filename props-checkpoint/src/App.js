import './App.css';
import PropTypes from "prop-types";
import Profile from '../src/profile/profile';
import image from '../src/profile/user.png';

function App() {

  const handleName = (fullName) => alert("name of the user is " + {fullName});

  return (
    <div className="App">
      <Profile fullName = "Oussama Beddiaf" bio = "Computer science enginier" profession = "Developer" fonction = "handleName">{image}</Profile>
    </div>
  );
}

App.defaultProps = {
  fullName : "Oussama Beddiaf",
  bio : "Computer science enginier",
  profession : "Developer"
  // function : "handleName" there should not be functions in defaultProps
 };

 App.propTypes = {
  fullName : PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string,
  function : PropTypes.func
 };

export default App;
