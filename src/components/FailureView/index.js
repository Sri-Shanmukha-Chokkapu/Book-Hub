import './index.css'

const FailureView = props => {
  const {onClickTryAgin} = props

  const onClickTry = () => {
    onClickTryAgin()
  }

  return (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dy9cgmtik/image/upload/v1644416997/Group_7522failure_iqntgf.svg"
        alt="failure view"
        className="book-item-failure-image"
      />
      <p className="book-item-failure-message">
        Something went wrong. Please try again
      </p>
      <button type="button" className="try-again-button" onClick={onClickTry}>
        Try Again
      </button>
    </div>
  )
}

export default FailureView
