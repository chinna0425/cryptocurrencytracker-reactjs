import './index.css'

const CryptocurrencyItem = props => {
  const {eachi} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = eachi
  return (
    <div className="elements-contianer">
      <li className="logo-contianer">
        <img src={currencyLogo} className="logosize" alt="currency_name" />
        <p className="currencypara">{currencyName}</p>
      </li>
      <div className="uro-container">
        <p className="currencypara">{euroValue}</p>
        <p className="currencypara">{usdValue}</p>
      </div>
    </div>
  )
}
export default CryptocurrencyItem
