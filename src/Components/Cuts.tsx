import React, { ChangeEvent } from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { setCut } from '../meatSlice';
import { cuts } from '../options'


export interface options {
  cuts: object[];
}

export default function Meats(props: any) {

  const cut = useSelector((state: RootState) => state.calculator.cut);
  const meat = useSelector((state: RootState) => state.calculator.meat);
  const dispatch = useDispatch();


  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCut(e.target.value))
  }

  console.log(cut)
  console.log(meat)
  console.log(cuts.meat)

  if(meat === '') return null

  return (
    <div className="Cuts">
      <label htmlFor='Cuts'>Pick a Cut</label>
        <select name="Cuts" id="Cuts" onChange={handleChange}>
          <option>Choose</option>
          {cuts[meat].map((cut:string,index:number) => (
            <option key={index} value={cut}>
              {cut}
            </option>
          ))}
        </select>
    </div>
  )
}