import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, onChangeInput} = props
  const {suggestion} = suggestionsDetails

  const onClickFun = () => {
    onChangeInput(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion-text">{suggestion}</p>
      <img
        className="arrow"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        onClick={onClickFun}
      />
    </li>
  )
}

export default SuggestionItem
