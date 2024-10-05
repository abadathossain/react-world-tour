import { useState } from 'react';
import './Country.css'
export default function Country({country,handleVisitedCountries}) {
    // console.log(country)
    const {name,area,flags}=country;

    const [visited, setVisited]=useState(false)

    const handleVisited=()=>{
      setVisited(!visited)
    }
  return (
    <div className={`country ${visited && 'visited'}`}>
    {/* <div className="country"> */}
      <img src={flags.png} alt="" />
        <h3 style={{color:visited?'purple':'black'}}>Country:{name.common}</h3>
        <h3 >Country:{area}</h3>
        <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button><br /><br />
        <button onClick={handleVisited}>{ visited ? 'Visited':'Not Visited'}</button>
        {visited?'visited':'Not visited'}
    </div>
  )
}
