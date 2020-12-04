import Mersenne from './components/Mersenne.js'
import MersenneFast from './components/MersenneFast.js'
import './App.css';
import equation from '../src/math.png'
import './myStyle.css'
import trend from '../src/Mersenne.png'
import alg1 from '../src/alg.png'
import alg2 from '../src/alg2.png'

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
                This is the M<sub>51</sub> prime number.
              </p>
            </li>
            <li>
              <p className= "paragraph">
                The <a href="https://www.mersenne.org/">Great Internet Mersenne Prime Search</a> (more known as GIMPS) is a project that revolves around using the combined power of thousands of computers that are
                run in parrallel to both find and verify new Mersenne primes. This is done through running a <a href="https://www.mersenne.org/download/">custom 
                software</a> developed by the project. This is similar to projects like <a href="https://foldingathome.org/">folding at home</a>, which uses a software 
                that lets people lend their computing power to do protein simulations to assist in finding medical treatments for things like COVID-19. 
              </p>
              <p>
                Currently GIMPS trend of finding a new Mersenne prime is:
                <img src = {trend} className = "graph" alt="https://www.mersenne.org/primes/" />
                Retrieved from: <a href="https://www.mersenne.org/primes/">GIMPS project</a>
              </p>
            </li>
          </ul>
          <h3 className="title"><u>Determining if a number is prime</u></h3>
          <p className= "paragraph">This can be calculated by using numurous methods; however, this site will focus on two of them. Those being the Sieve of Eratosthenes algorithm and the Lucas-Lehmer algorithm.</p>
          <ul>
            <li>
              <p className= "paragraph"><u>Sieve of Eratosthenes</u></p>
              <p className= "paragraph">
                Sieve of Eratosthenes is an simple algorithm that when done, will generate a list of all the primes of a desired range. The general algorithm is to make a list of numbers from 2 to n, then take the first 
                element not crossed out, add it to the list of primes, then cross out all multiples of the element. The algorithm then selects the new first non-crossed out element and repeats until it reaches the sqrt(n) element.
              </p>
              <p className="paragraph">Sieve of Eratosthenes algorithm visulaized:</p>
              <img className= "wiki" src="//upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif" />
              <p className="paragraph">
                <sub>Retrieved from: <a href="https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes" alt="GIF of algorithm">wikipedia</a></sub>
              </p>
              <p className= "paragraph">Pseudocode for the algorithm:</p>
              <img className="graph" src={alg1} alt="Siv sudocode"></img>
            </li>
            <li>
              <p className= "paragraph"><u>Lucas-Lehmer</u></p>
              <p className= "paragraph">
               The Lucas-Lehmer primality test is a test initally created in 1856 by Édouard Lucas, but was then improved in 1878 by Lucas, and then subsequently by Derrick 
               Henry Lehmer in the 1930s<sup><a href="http://oeis.org/wiki/Lucas%E2%80%93Lehmer_primality_test#:~:text=The%20Lucas%E2%80%93Lehmer%20test%20(LLT,D.%20H.%20Lehmer%20in%20the%201930s.">[1]</a></sup>. 
               Lucas-Lehmer test is a primality test for Mersenne numbers (any number that can be put in the form 2<sup>n</sup>-1), since that M<sub>p</sub> is prime if and only if:
              </p>
              <div className="white-box">
                <p className= "eq">s<sub>p-2</sub> &#8801; (mod M<sub>p</sub>)</p>
              </div>
              <p className= "paragraph">Given:</p>
              <div className="white-box">
                <p className= "eq">s<sub>0</sub> = 4</p>
                <p className= "eq">s<sub>i</sub> = (s<sub>i-1</sub>)<sup>2</sup> -2, where i &#8805; 1</p>
              </div>
              <p className= "paragraph"><u>Pseudocode for the algorithm:</u></p>
              <img className="graph" src={alg2} alt="Siv sudocode"></img>
              <p className= "paragraph">Retrieved from: <a href="http://oeis.org/wiki/Lucas%E2%80%93Lehmer_primality_test#:~:text=The%20Lucas%E2%80%93Lehmer%20test%20(LLT,D.%20H.%20Lehmer%20in%20the%201930s.">OEIS wiki</a></p>
            </li>
          </ul>
          <h3 className="title"><u>Connections to Math 3093</u></h3>
          <ul>
            <li>
              <p className= "paragraph">
                We studied primes over the entirety of the course. From the knowledge gained from class, we know that a prime number 'p' is prime if gcd(p,a) for any integer 1 &lt; a &lt; p.
              </p>
            </li>
            <li>
              <p className= "paragraph">
               When a mersenne prime is converted to base 2, it is simply a string of 1's with length 'p', which is given from the equation. This can also be calculated by using a rearranged formula from above, which is: 
              </p>
              <p className= "paragraph">
              p = log<sub>2</sub>(M<sub>p</sub> +1), where M<sub>p</sub> is a mersenne prime.
              </p>
              <p className= "paragraph">
              <u>Example :</u>
              <p>
                127 is a mersenne prime. <a href="https://www.mersenne.org/report_exponent/?exp_lo=7">Proof</a>
              </p>
              <p>p = log<sub>2</sub>(127 +1) = log<sub>2</sub>(128) = 7</p>
              <p>So the binary representation of (127)<sub>10</sub> is (1111111)<sub>2</sub></p>
              </p>
              <p>
                <u>Side note:</u> JSX (which was used for making this website) uses 32 bit signed numbers, and this is the reason why algorithms designed below can't compute numbers greater than 2<sup>31</sup>. Hence the algorithms below 
                only accepting n less than 31.
              </p>
            </li>
            <li>
              <p className= "paragraph">
                We studied residue classes earlier in the semester. //TODO
              </p>
            </li>
            <li>
              <p className= "paragraph">
                Similar to Sieve, which gives you the set of all primes below an integer 'n', the <a href="https://oeis.org/A000720">pi function</a> which we studied in class returns the number 
                of primes below a given integer 'n'.
              </p>
            </li>
          </ul>

        </div>


        <div className="main">
          <hr/>
          <h2 id= "header2"><u>Try it yourself!</u></h2>
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
          <h3><u>References</u></h3>
          <ul>
            <li id="references-text"><a href="https://oeis.org/A000043"> Mersenne Primes Oeis</a></li>
            <li id="references-text"><a href="https://www.mersenne.org/primes/"> History of Mersenne primes / known primes</a></li>
            <li id="references-text"><a href="https://www.mersenne.org/#:~:text=GIMPS%2C%20the%20Great%20Internet%20Mersenne%20Prime%20Search%2C%20was%20formed%20in,%22needles%20in%20a%20haystack%22.">History of GIMPS</a></li>
            <li id="references-text"><a href="https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes">Info on Sieve of Eratosthenes</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
