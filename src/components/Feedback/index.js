import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFeedbackGiven: false,
      emojis: props.resources.emojis,
      loveEmojiUrl: props.resources.loveEmojiUrl,
    }
  }

  handleEmojiClick = () => {
    this.setState({isFeedbackGiven: true})
  }

  render() {
    const {emojis, loveEmojiUrl, isFeedbackGiven} = this.state
    return (
      <div className="feedback-container">
        {!isFeedbackGiven ? (
          <div className="feedback-card">
            <h1 className="feedback-question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="emoji-card">
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="emoji"
                    onClick={this.handleEmojiClick}
                  />
                  <p className="name">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="feedback-card">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="thanking-user">Thank You!</h1>
            <p className="thanking-msg">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
