import React from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { setCookingMethod } from '../meatSlice';
import { cookingMethods } from '../options'


export default function Methods(props: any) {

  const weight = useSelector((state: RootState) => state.calculator.details.weight);
  const method = useSelector((state: RootState) => state.calculator.cookingMethod);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCookingMethod(e.target.value))
  }

  if(weight === 0) return null

  return (
    <div className="Methods">
      <label htmlFor='Methods'>Pick a Method</label>
        <select name="Methods" id="Methods" onChange={handleChange}>
          <option key={method}>Choose</option>
          {cookingMethods.sort().map((method:string,index:number) => (
            <option key={index} value={method}>
              {method}
            </option>
          ))}
        </select>
    </div>
  )
}