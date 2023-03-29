import Meats from '../CalcComponents/Meats'
import Cuts from '../CalcComponents/Cuts'
import Details from '../CalcComponents/Details'
import Methods from '../CalcComponents/Methods'
import Submit from '../CalcComponents/Submit'

function Calc() {
  return (
    <div>
      <Meats />
      <Cuts />
      <Details />
      <Methods />
      <Submit />
    </div>
  )
}

export default Calc