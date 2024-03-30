import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const validList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="search-container">
          <div className="search-input-container">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            />
            <input
              className="inputEle"
              placeholder="Search Google"
              type="search"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
          </div>
          <ul className="suggetion-list">
            {validList.map(each => (
              <SuggestionItem
                suggestionsDetails={each}
                key={each.id}
                onChangeInput={this.onChangeInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
