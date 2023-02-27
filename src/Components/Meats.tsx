import React, { ChangeEvent } from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { setMeat, setCut, setDetailsTrimmed, setDetailsWeight, setDetailsFish, setCookingMethod } from '../meatSlice';
import { meats } from '../options'


export default function Meats(props: any) {

  const meat = useSelector((state: RootState) => state.calculator.meat);
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setMeat(e.target.value))
    dispatch(setCut(''))
    dispatch(setDetailsTrimmed(false))
    dispatch(setDetailsWeight(0))
    dispatch(setDetailsFish(''))
    dispatch(setCookingMethod(''))
  }

  return (
    <div className="Meats">
      <label htmlFor='Meats'>Pick a Meat</label>
        <select name="Meats" id="Meats" onChange={handleChange}>
          <option>Choose</option>
          {meats.sort().map((meat:string,index:number) => (
            <option key={index} value={meat}>
              {meat}
            </option>
          ))}
        </select>
    </div>
  )
}