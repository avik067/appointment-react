// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appList: [], t: '', d: ''}

  inputTitle = event => {
    const title = event.target.value
    this.setState({t: title})
  }

  inputDate = event => {
    const date = event.target.value
    this.setState({d: date})
  }

  validateAdd = event => {
    event.preventDefault()
    const {t, d} = this.state
    const date = format(new Date(d), 'dd MMMM yyyy, EEEE')

    console.log(d)

    const newOb = {
      title: t,
      date,
      id: uuidv4(),
      stared: false,
    }
    this.setState(pre => ({
      appList: [...pre.appList, newOb],
      t: '',
      d: '',
    }))
  }

  active = id => {
    this.setState(pre => ({
      appList: pre.appList.map(each => {
        if (id === each.id) {
          return {...each, stared: !each.stared}
        }
        return each
      }),
    }))
  }

  onlyShowStared = () => {
    this.setState(pre => ({
      ...pre,
      appList: pre.appList.filter(each => each.stared),
    }))
  }

  render() {
    const {t, d} = this.state
    const {appList} = this.state

    return (
      <div className="main-box">
        <div className="card">
          <div className="given">
            <form className="input-area">
              <h1>Add Appointment</h1>
              <div>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={t}
                  onChange={this.inputTitle}
                />
              </div>
              <div>
                <label htmlFor="date">DATE</label>
                <br />
                <input
                  type="date"
                  id="date"
                  placeholder="dd/mm/yyyy"
                  value={d}
                  onChange={this.inputDate}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="add"
                  onClick={this.validateAdd}
                >
                  Add
                </button>
              </div>
            </form>
            <div className="image-box">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="result">
            <div className="row-apt">
              <div>
                <h4>Appointments</h4>
              </div>
              <div>
                <button
                  type="button"
                  className="show-star"
                  onClick={this.onlyShowStared}
                >
                  Starred
                </button>
              </div>
            </div>
            <ul className="row-list-container">
              {appList.map(each => (
                <AppointmentItem
                  key={each.id}
                  details={each}
                  trigger={this.active}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
