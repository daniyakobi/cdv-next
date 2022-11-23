import React, { useState, useRef, useCallback, useEffect } from 'react'
import classnames from 'classnames'
import mr_style from '../../styles/inputs/InputMultiRange.module.scss'

const InputMultiRange = ({ min, max, change }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)

  const minValRef = useRef(null)
  const maxValRef = useRef(null)
  const range = useRef(null)

  // Convert to percentage
  // const getPercent = useCallback((value) => {
  //   Math.round(((value - min) / (max - min)) * 100);
  // }, [min, max]);
  const getPercent = (value) => {
    return Math.round(((value - min) / (max - min)) * 100);
  };

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); 

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
        console.log(range.current.style.width,  range.current.style.left);
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
      change({ min: minVal, max: maxVal });
  }, [minVal, maxVal, change]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={ `${ mr_style.thumb } ${ mr_style.thumb_zindex_3 } ${ minVal > max - 100 ? mr_style.thumb_zindex_5 : '' }` }
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={ `${ mr_style.thumb } ${ mr_style.thumb_zindex_4 }` }
      />
      <div className={ mr_style.multi_range }>
        <div className={ mr_style.multi_range__track } />
        <div ref={ range } className={ mr_style.multi_range__range } />
        <div className={ mr_style.multi_range__left }>{minVal}</div>
        <div className={ mr_style.multi_range__right }>{maxVal}</div>
      </div>
    </>
  )
}

export default InputMultiRange