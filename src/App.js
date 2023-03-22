import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div>
      <Countries></Countries>

    </div>
  );
}




// const LoadCountries = () => {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(resp => resp.json())
//       .then(data => setCountries(data))  //The data will be set in "countries"
//   }
//     , [])
//   return (
//     <>
//       <h1>ALL Countries Data</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       <div className='container'>
//         {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//         }
//       </div>
//     </>
//   )
// }

// Country Component
// const Country = props =>{
//   return (
//     <div className='country'>
//       <h3>Country Name: {props.name}</h3>
//       <h6>Population: {props.population}</h6>
//     </div>
//   )
// }


export default App;

