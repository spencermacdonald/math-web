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
          <p className= "paragraph">Where n is an integer that makes the RHS equation equal to the prime number on the LHS.
            These primes were named after french mathmatician Marin Mersenne, who spent his life researching them.
          </p>
          <h3 className="title"><u>More facts about Mersenne Primes</u></h3>
          <ul>
            <li>
              <p className= "paragraph">
                The largest currently known (and verified) Mersenne prime was found on <a href="https://www.mersenne.org/report_exponent/?exp_lo=82589933">Dec.07/2018</a>, which was found to be n = 82,589,933.
                This is the M51 prime number.
              </p>
            </li>
            <li>
              <p className= "paragraph">
                The <a href="https://www.mersenne.org/">GIMPS</a> is a project that revolves around using the combined power of thousands of computers that are
                run in parrallel to both find and verify new Mersenne primes. This is done through running a <a href="https://www.mersenne.org/download/">custom software</a> developed by the project.
              </p>
            </li>
          </ul>
          <h3 className="title"><u>Relating back to Math 3093</u></h3>
          <ul>
            <li>
              <p className= "paragraph">
                We studied primes over the entirety of the course. From the knowledge gained from class, we know that a prime number 'p' is prime if gcd(p,a) for any integer 1 &lt; a &lt; p.
              </p>
            </li>
            <li>
              <p className= "paragraph">
               
              </p>
            </li>
          </ul>
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
            <li id="references-text"><a href="https://www.mersenne.org/#:~:text=GIMPS%2C%20the%20Great%20Internet%20Mersenne%20Prime%20Search%2C%20was%20formed%20in,%22needles%20in%20a%20haystack%22.">History of GIMPS</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
