import './App.css'
import Meats from './Components/Meats'
import Cuts from './Components/Cuts'
import Details from './Components/Details'
import Methods from './Components/Methods'
import Submit from './Components/Submit'

function App() {

  return (
    <>
    <div className="App">
      <Meats/>
      <Cuts/>
      <Details/>
      <Methods/>
      <Submit/>
    </div>
    <a href="https://www.flaticon.com/free-icons/grill" title="grill icons">Icons created by {'{ Grill: Smashicons }'} - Flaticon</a>
    </>
  )
}

export default App
