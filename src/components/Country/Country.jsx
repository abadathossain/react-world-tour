import './Country.css'
export default function Country({country}) {
    console.log(country)
    const {name,area,flags}=country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
        <h3 >Country:{name.common}</h3>
        <h3 >Country:{area}</h3>
    </div>
  )
}
