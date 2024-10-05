import { useEffect, useState } from "react"
import Country from "../Country/Country"
import '../Country/Country.css'

export default function Countries() {

    const [countries, setCountries]=useState([])
    const [visitedCountries, setVisitedCountries]=useState([])
    const [flags, setFlags]=useState([])

    const handleVisitedCountries=(country)=>{
     const newVisitedCountries=[...visitedCountries, country]
     setVisitedCountries(newVisitedCountries)
    }

    const handleFlags=(flag)=>{
      const newFlags=[...flags,flag]
      setFlags(newFlags)
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setCountries(data))
      
    },[])
  return (
    <>
      <div>Countries:{countries.length}</div>
      <div>Visited countries:{visitedCountries.length}</div>
      <ul>
        {
          visitedCountries.map(country=><li key={country.cca2} >{country.name.common}</li>)
        }
      </ul>

      <div className="flag-container">
        {
          flags.map((flag,idx)=><img key={idx} src={flag}></img>)
        }
      </div>
     <div className="countries">
     {
        countries.map(country=><Country country={country} 
          handleVisitedCountries={handleVisitedCountries}
          handleFlags={handleFlags}
          key={country.id} ></Country>)
      }
     </div>
    </>
  
  )
}
