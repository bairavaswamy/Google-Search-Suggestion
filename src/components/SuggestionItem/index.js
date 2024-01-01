// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, arrowFunctionInputChange} = props
  const {suggestion} = eachSuggestion
  const onArrow = () => {
    arrowFunctionInputChange(suggestion)
  }
  return (
    <li className="suggestion-arrow-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={onArrow}
      />
    </li>
  )
}

export default SuggestionItem
