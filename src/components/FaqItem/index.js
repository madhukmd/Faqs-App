import {Component} from 'react'
import './index.css'

const minus = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

const plus = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {
    active: false,
  }

  toggle = () => {
    this.setState(prev => ({active: !prev.active}))
  }

  render() {
    const {active} = this.state
    const {faqList} = this.props

    const {questionText, answerText} = faqList

    const imgIcon = active ? minus : plus
    const altText = active ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="faq-heading-container">
          <h1 className="faq-item-heading">{questionText}</h1>
          <button type="button" className="button">
            <img src={imgIcon} alt={altText} onClick={this.toggle} />
          </button>
        </div>
        {active ? (
          <div>
            <hr className="line" />
            <p className="faq-item-description">{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
