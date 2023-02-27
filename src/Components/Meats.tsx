import React, { ChangeEvent } from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { setMeat } from '../meatSlice';
import { meats } from '../options'


export interface options {
  meats: string[];
}

export default function Meats(props: any) {

  const meat = useSelector((state: RootState) => state.calculator.meat);
  const dispatch = useDispatch();


  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setMeat(e.target.value))
  }

  return (
    <div className="Meats">
      <label htmlFor='Meats'>Pick a Meat</label>
        <select name="Meats" id="Meats" onChange={handleChange}>
          <option>Choose</option>
          {meats.map((meat:string,index:number) => (
            <option key={index} value={meat}>
              {meat}
            </option>
          ))}
        </select>
    </div>
  )
}