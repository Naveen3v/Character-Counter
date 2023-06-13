import './index.css'

const CountItem = props => {
  const {countDetails} = props
  const {id, character, count} = countDetails
  return (
    <li className="list-item">
      <p className="paraList">{character}: </p>
      <p className="paraList">{character.length} characters</p>
    </li>
  )
}

export default CountItem
