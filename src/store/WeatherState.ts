import { observable, action, decorate, computed } from "mobx"
import { IWeather } from "../model/IWeather"

export class WeatherState {
  updates: Array<IWeather> = []

  updateWeather = (update: IWeather) => {
    this.updates.push(update)
  }

  get weatherUpdates(): Array<IWeather> {
    return this.updates
  }
}

decorate(WeatherState, {
  updates: observable,
  updateWeather: action,
  weatherUpdates: computed
})
