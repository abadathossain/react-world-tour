import { useState } from 'react';
import './Country.css'
export default function Country({country}) {
    // console.log(country)
    const {name,area,flags}=country;

    const [visited, setVisited]=useState(false)
    
    const handleVisited=()=>{
      setVisited(!visited)
    }
  return (
    <div className="country">
      <img src={flags.png} alt="" />
        <h3 >Country:{name.common}</h3>
        <h3 >Country:{area}</h3>
        <button onClick={handleVisited}>{ visited ? 'Visited':'Not Visited'}</button>
        {visited?'visited':'Not visited'}
    </div>
  )
}
