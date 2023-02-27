import React, { ChangeEvent } from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { setCut, setDetailsTrimmed, setDetailsWeight, setDetailsFish, setCookingMethod } from '../meatSlice';
import { cuts } from '../options'

export default function Meats(props: any) {

  const meat = useSelector((state: RootState) => state.calculator.meat);
  const dispatch = useDispatch();


  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCut(e.target.value))
    dispatch(setDetailsTrimmed(false))
    dispatch(setDetailsWeight(0))
    dispatch(setDetailsFish(''))
    dispatch(setCookingMethod(''))
  }

  if(meat === '') return null
  if(meat === 'Choose') return null

  const orderedCuts = cuts[meat].sort();

  return (
    <div className="Cuts">
      <label htmlFor='Cuts'>{meat === "Fish" ? 'Pick a Fish' : 'Pick a Cut'}</label>
        <select key={meat} name="Cuts" id="Cuts" onChange={handleChange}>
          <option defaultChecked>Choose</option>
          {orderedCuts.map((cut:string,index:number) => (
            <option key={index} value={cut}>
              {cut}
            </option>
          ))}
        </select>
    </div>
  )
}