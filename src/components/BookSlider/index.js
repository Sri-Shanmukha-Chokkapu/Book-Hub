import {Component} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

class BookSlider extends Component {
  renderSlider = () => {
    const {topRatedBooks} = this.props

    return (
      <Slider {...settings}>
        <ul className="slick-item home-book-list">
          {topRatedBooks.map(eachLogo => {
            const {id, coverPic, title, authorName} = eachLogo
            return (
              <li key={id}>
                <Link to={`/books/${id}`} className="home-link-item">
                  <img className="logo-image" src={coverPic} alt={title} />
                  <h1 className="top-rated-book-heading">{title}</h1>
                  <p className="top-rated-book-author">{authorName}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </Slider>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    )
  }
}

export default BookSlider
