import React, { Component } from 'react'
import './App.css'
import { WeatherState } from './store/WeatherState'
import { Provider } from 'mobx-react'
import { ShowWeather } from './components/ShowWeather'

let Parser = require('rss-parser')
let parser = new Parser()

class App extends Component {
  store = new WeatherState()

  interval = setInterval(async() => {
    let data = await parser.parseURL('https://w1.weather.gov/xml/current_obs/KMSP.rss')
    this.store.updateWeather({
      link: data.items[0].link,
      contentSnippet: data.items[0].contentSnippet,
      title: data.items[0].title
    })
  }, 60000)

  render() {
    return (
      <Provider store={this.store}>
        <ShowWeather />
      </Provider>
    )
  }
}

export default App;
