import Loader from 'react-loader-spinner'
import {BsFillStarFill} from 'react-icons/bs'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import FailureView from '../FailureView'
import './index.css'

const apiStatusConstant = {
  initial: 'initial',
  inProgress: 'inProgress',
  success: 'success',
  failure: 'failure',
}

class BookDetails extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    bookDetails: {},
  }

  componentDidMount() {
    this.getBooksApi()
  }

  getFormatedData = data => {
    const bookDetails = data.book_details
    const updatedData = {
      aboutAuthor: bookDetails.about_author,
      aboutBook: bookDetails.about_book,
      authorName: bookDetails.author_name,
      coverPic: bookDetails.cover_pic,
      id: bookDetails.id,
      readStatus: bookDetails.read_status,
      rating: bookDetails.rating,
      title: bookDetails.title,
    }
    this.setState({
      bookDetails: updatedData,
      apiStatus: apiStatusConstant.success,
    })
  }

  getBooksApi = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/book-hub/books/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      this.getFormatedData(fetchedData)
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderBookItemDetails = () => {
    const {bookDetails} = this.state
    const {
      aboutAuthor,
      aboutBook,
      authorName,
      coverPic,
      readStatus,
      rating,
      title,
    } = bookDetails
    return (
      <div className="book-item-details-success-view" data-testid="bookItem">
        <div className="book-item-details-sub-container">
          <img src={coverPic} alt={title} className="book-item-details-image" />
          <div className="book-item-details-text-container">
            <h1 className="book-item-details-title">{title}</h1>
            <p className="book-item-author-rating-status">{authorName}</p>
            <div className="book-item-details-rating-container">
              <p className="book-item-author-rating-status">Avg Rating</p>
              <BsFillStarFill className="book-item-details-star" />
              <p className="book-item-author-rating-status">{rating}</p>
            </div>
            <div className="book-item-details-read-status-container">
              <p className="book-item-author-rating-status">Status:</p>
              <p className="book-item-read-status">{readStatus}</p>
            </div>
          </div>
        </div>
        <hr className="book-item-details-line" />
        <div className="book-item-details-author-details-container">
          <h1 className="book-item-details-author-heading">About Author</h1>
          <p className="book-item-details-author-description">{aboutAuthor}</p>
        </div>
        <div className="book-item-details-author-details-container">
          <h1 className="book-item-details-author-heading">About Book</h1>
          <p className="book-item-details-author-description">{aboutBook}</p>
        </div>
      </div>
    )
  }

  renderBookItemLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  )

  onClickTryAgin = () => {
    this.getBooksApi()
  }

  renderBookItemFailureView = () => (
    <FailureView onClickTryAgin={this.onClickTryAgin} />
  )

  renderBookDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderBookItemDetails()
      case apiStatusConstant.inProgress:
        return this.renderBookItemLoader()
      case apiStatusConstant.failure:
        return this.renderBookItemFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="book-details-container">
          {this.renderBookDetails()}
          <div className="book-item-details-footer">
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default BookDetails
