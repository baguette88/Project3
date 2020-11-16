import React, { Component } from 'react'
import NewForm from './components/NewForm.js'

const baseURL = 'http://localhost:3003'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: []
    }
  
    this.getHolidays = this.getHolidays.bind(this)
    this.handleAddHoliday = this.handleAddHoliday.bind(this)
    this.toggleCelebrated = this.toggleCelebrated.bind(this)
    this.deleteHoliday = this.deleteHoliday.bind(this)
  }

  componentDidMount() {
    this.getHolidays()
  }

  handleAddHoliday(holiday) {
    this.setState({
      holidays: this.state.holidays.concat(holiday)
    })
  }

  getHolidays() {
    fetch(baseURL + '/holidays')
    .then(data => {
      return data.json()
    }).then(parsedData => {
      this.setState({
        holidays: parsedData
      })
    })
  }

  toggleCelebrated(holiday) {
    fetch(baseURL + '/holidays/' + holiday._id, {
      method: 'PUT',
      body: JSON.stringify({ celebrated: !holiday.celebrated }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
        const copyHolidays = [...this.state.holidays]
        const findIndex = this.state.holidays.findIndex(holiday => holiday._id === resJson._id)
        copyHolidays[findIndex].celebrated = resJson.celebrated
        this.setState({holidays: copyHolidays})
      })
  }

  deleteHoliday(id) {
    fetch(baseURL + '/holidays/' + id, {
      method: 'DELETE'
    }).then( response => {
      const findIndex = this.state.holidays.findIndex(holiday => holiday._id === id)
      const copyHolidays = [...this.state.holidays]
      copyHolidays.splice(findIndex, 1)
      this.setState({ holidays: copyHolidays })
    })
  }

  render() {
    return (
      <div>
        <h1>Holidays!</h1>
        <NewForm handleAddHoliday={this.handleAddHoliday} />
        <table>
          <tbody>
            {
              this.state.holidays.map(holiday => {
                return (
                  <tr>
                    <td key={holiday._id}
                        onDoubleClick={ () => this.toggleCelebrated(holiday)}
                        className={holiday.celebrated ? 'celebrated' : null }
                    > {holiday.name} </td>
                    <td onClick={ () => this.deleteHoliday(holiday._id) }>X</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

