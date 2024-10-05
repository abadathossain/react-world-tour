import { useEffect, useState } from "react"
import Country from "../Country/Country"
import '../Country/Country.css'

export default function Countries() {

    const [countries, setCountries]=useState([])
    const [visitedCountries, setVisitedCountries]=useState([])

    const handleVisitedCountries=(country)=>{
      console.log(country)
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
     <div className="countries">
     {
        countries.map(country=><Country country={country} 
          handleVisitedCountries={handleVisitedCountries}
          key={country.id} ></Country>)
      }
     </div>
    </>
  
  )
}
