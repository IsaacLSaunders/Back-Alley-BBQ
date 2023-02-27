import React from 'react';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';

export default function Submit(props: any) {
  
    const state = useSelector((state: RootState) => state.calculator);
    const meat = useSelector((state: RootState) => state.calculator.meat);
    const cut = useSelector((state: RootState) => state.calculator.cut);
    const weight = useSelector((state: RootState) => state.calculator.details.weight);
    const method = useSelector((state: RootState) => state.calculator.cookingMethod);
  
    if(meat === '' || cut === '' || weight === 0 || method === '') return null
  
    const handleClick = () => {
      console.log('clicked')
      console.log(state)
    }

    return (
      <div className="Submit">
        <button type="submit" onClick={handleClick}>Submit</button>
      </div>
    )
  }