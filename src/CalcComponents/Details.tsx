import React, { ChangeEvent } from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { setDetailsWeight, setDetailsTrimmed, setDetailsFish } from '../meatSlice';

export default function Details(props: any) {
  
    const meat = useSelector((state: RootState) => state.calculator.meat);
    const cut = useSelector((state: RootState) => state.calculator.cut);
    const weight = useSelector((state: RootState) => state.calculator.details.weight);
    const trimmed = useSelector((state: RootState) => state.calculator.details.trimmed);
    const wholeOrFilet = useSelector((state: RootState) => state.calculator.wholeOrFilet);
    const dispatch = useDispatch();
  
    const handleWeightChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setDetailsWeight(Number(e.target.value)))
    }
  
    const handleTrimmedChange: React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setDetailsTrimmed(e.target.checked))
    }

    const handleFishChange: React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setDetailsFish(e.target.value))
    }

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e: React.FocusEvent<HTMLInputElement>) => {
      if(e.target.value === '0') e.target.value = ''
    }

    if(cut === '') return null
    if(cut === 'Choose') return null
  
    return (
      <div className="Details">
        <label htmlFor='Weight'>Weight</label>
          <input placeholder='' type="number" step={.1} name="Weight" id="Weight" value={weight} onFocus={handleFocus} onChange={handleWeightChange}/>
          <br/>
            {meat === "Fish" 
              ?  
              <>
                <label htmlFor='Whole'>
                <input type="radio" name="WholeOrFilet" id="Whole" value="Whole" checked={wholeOrFilet === "Whole"} onChange={handleFishChange} />
                  Whole
                </label>
                <label htmlFor='Filet'>
                <input type="radio" name="WholeOrFilet" id="Filet" value="Filet" checked={wholeOrFilet === "Filet"} onChange={handleFishChange} />
                  Filet
                </label>
              </>
              :
              <>
                <label htmlFor='Trimmed'>Trimmed</label>
                <input type="checkbox" name="Trimmed" id="Trimmed" checked={trimmed} onChange={handleTrimmedChange} />
              </>
            } 
      </div>
    )
  }