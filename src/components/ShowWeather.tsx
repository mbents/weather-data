import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { WeatherState } from '../store/WeatherState'

export const ShowWeather = inject("store") (
  observer (
    class ShowWeather extends Component<{store?: WeatherState}> {
      render() {
        return (
          <ul>
            {this.props.store?.weatherUpdates.map((update, index) =>
            <li key={index}>
              <h4>
                {`${index}: ${update.title}`}
              </h4>
              <div>
                <a href={update.link}>{update.link}</a>
              </div>
              <div>
                {update.contentSnippet}
              </div>
            </li>
            )}
          </ul>
        )
      }
    }
  )
)
