import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CountItem from './components/CountItem'
import './App.css'

const initialCountList = []

// Replace your code here
class App extends Component {
  state = {
    display: true,
    countList: initialCountList,
    character: '',
    count: '',
  }

  addChar = event => {
    event.preventDefault()
    this.setState({display: false})
    const {character, count} = this.state
    const newList = {
      id: uuidv4(),
      character,
      count,
    }
    this.setState(prev => ({
      countList: [...prev.countList, newList],
      character: '',
      count: '',
    }))
  }

  textChange = event => {
    this.setState({character: event.target.value})
  }

  render() {
    const {character, display, countList} = this.state
    return (
      <div className="main">
        <div className="left">
          <h1 className="left-heading">Count the characters like a Boss...</h1>
          {display ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="imageC"
            />
          ) : (
            <ul className="list-container">
              {countList.map(each => (
                <CountItem countDetails={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
        <div className="right">
          <h1 className="right-heading">Character Counter</h1>
          <div className="input-container">
            <form className="input-container" onSubmit={this.addChar}>
              <input
                value={character}
                placeholder="Enter the characters here"
                className="inputEle"
                onChange={this.textChange}
              />
              <button type="submit" className="addBtn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
