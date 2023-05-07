import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoitems: [], isActive: true}

  componentDidMount() {
    this.getTheElements()
  }

  getTheElements = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachitem => ({
      currencyLogo: eachitem.currency_logo,
      currencyName: eachitem.currency_name,
      euroValue: eachitem.euro_value,
      usdValue: eachitem.usd_value,
      id: eachitem.id,
    }))
    this.setState({cryptoitems: updatedData, isActive: false})
  }

  render() {
    const {cryptoitems, isActive} = this.state
    return (
      <div className="cryptocurrencylist-container">
        <h1 className="cryptoheading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="mainlogo"
        />
        {isActive ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="coins-contianer1">
            <div className="coins-contianer2">
              <p className="coinpara">Coin Type</p>
              <div className="amount-container">
                <p className="coinpara">USD</p>
                <p className="coinpara">EURO</p>
              </div>
            </div>
            <div className="coins-contianer3">
              {cryptoitems.map(each => (
                <CryptocurrencyItem eachi={each} key={each.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
