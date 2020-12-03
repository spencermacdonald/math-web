import Mersenne from './components/Mersenne.js'
import MersenneFast from './components/MersenneFast.js'
import './App.css';
import equation from '../src/math.png'
import './myStyle.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <h1 className="title"><u>Mersenne Prime</u></h1>
          <p className= "paragraph">What is a Mersenne Prime? Well a mersenne prime is a prime number that can be written in the form:</p>
          <img src={equation} alt="M = 2^n -1"/>
          <p className= "paragraph">Where n is an integer that makes the RHS equation equal to the left.
            These primes were named after french mathmatician Marin Mersenne, who spent his life researching them.
          </p>
          <h3 className="title"><u>More facts about Mersenne Primes</u></h3>
          <ul>
            <li>
              <p className= "paragraph">
                The largest known Mersenne prime was found on <a href="https://www.mersenne.org/report_exponent/?exp_lo=82589933">Dec.07/2018</a>, which was found to be n = 82,589,933.
              </p>
            </li>
            <li>
              <p className= "paragraph">
               
              </p>
            </li>
          </ul>
          <p><a href="https://oeis.org/A000043"> Read more about it on oeis</a></p>
        </div>
        <div className="main">
          <hr/>
          <h2 id= "header2"><u>Try it for yourself</u></h2>
          <p id="description">
            Please note that the input being asked for is the "n" for the equation given above. 
          </p>
          <hr/>
          <Mersenne />
        </div>
        <div className="main">
          <MersenneFast />
        </div>
        <div id = "referencesDiv">
          <p id="references"><u>References</u></p>
          <ul>
            <li id="references-text"><a href="https://oeis.org/A000043"> Mersenne Primes Oeis</a></li>
            <li id="references-text"><a href="https://www.mersenne.org/primes/"> History of Mersenne primes / known primes</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
