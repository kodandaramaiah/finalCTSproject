import React, { Component } from "react";
import Category from "./category";
import Book from "./bookcatgo";
import Pagination from "./pagination";
import _ from "lodash";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [
      {
        _id: 1,
        title: "The Last Wish",
        pageCount: 422,
        rating: 5,
        publishedDate: "2009-06-03",
        authors: "Ben Frain",
        genre: " fantasy",
        price: 712,
        url: "https://m.media-amazon.com/images/I/51H9T3jvcZL.jpg",
      },
      {
        _id: 2,
        title: "IF You were Mine",
        pageCount: 456,
        rating: 5,
        publishedDate: "2013-03-19",
        authors: "Chris Northwood",
        genre: "Romance",
        price: 799,
        url: "https://m.media-amazon.com/images/I/51pUMqRRC-L.jpg",
      },
      {
        _id: 3,
        title: "Smoke Bitten",
        pageCount: 458,
        rating: 7,
        publishedDate: "2011-01-05",
        authors: ["Stephen Hay"],
        genre: " fantasy",
        price: 636,
        url: "https://m.media-amazon.com/images/I/513A3QXBIHL.jpg",
      },
      {
        _id: 4,
        title: "Children Of Time",
        pageCount: 400,
        rating: 8,
        publishedDate: "	May 02, 2017",
        authors: "	Adrian Tchaikovsky",
        genre: "Science Fiction",
        price: 840,
        url: "https://m.media-amazon.com/images/I/51tuexbxdIL.jpg",
      },
      {
        _id: 5,
        title: "Children of Ruin",
        pageCount: 400,
        rating: 7,
        publishedDate: "May 14, 2019",
        authors: "Adrian Tchaikovsky",
        genre: "Science Fiction",
        price: 796,
        url: "https://m.media-amazon.com/images/I/61OzgiEriXL.jpg",
      },
      {
        _id: 6,
        title: "Infinity Born",
        pageCount: 378,
        rating: 6.5,
        publishedDate: "August 08, 2017",
        authors: ["Douglas E. Richards"],
        genre: "Science Fiction",
        price: 340,
        url: "https://m.media-amazon.com/images/I/51zl9Ff2ytL.jpg",
      },
      {
        _id: 7,
        title: "The Rise of Magicks ",
        pageCount: 402,
        rating: 6,
        publishedDate: "2010-11-05",
        authors: ["Jennifer Niederest Robbins"],
        genre: " fantasy",
        price: 512,
        url: "https://m.media-amazon.com/images/I/51esMvpkSKL.jpg",
      },
      {
        _id: 8,
        title: "React Up and Running",
        pageCount: 295,
        rating: 8,
        publishedDate: "2018-10-15",
        authors: ["Stoyan Stefanov"],
        genre: "Science Fiction",
        price: 582,
        url:
          "https://images-na.ssl-images-amazon.com/images/I/51hZEL2WpqL._SX379_BO1,204,203,200_.jpg",
      },
      {
        _id: 9,
        title: "From This Moment",
        pageCount: 393,
        rating: 4.5,
        publishedDate: "October 01, 2018",
        authors: "	Melanie Harlow",
        genre: "Romance",
        price: 500,
        url: "https://m.media-amazon.com/images/I/510amwftxeL.jpg",
      },
      {
        _id: 10,
        title: "The Silent Wife",
        pageCount: 331,
        rating: 7,
        publishedDate: "2015-12-11",
        authors: ["Sharma Hoque"],
        genre: "drama",
        price: 490,
        url: "https://m.media-amazon.com/images/I/51EfhkKzPHL.jpg",
      },

      {
        _id: 11,
        title: "Titan's Addiction",
        pageCount: 288,
        rating: 10,
        publishedDate: "2015-11-08",
        authors: ["Anna Zaires"],
        genre: "Science Fiction",
        price: 650,
        url: "https://m.media-amazon.com/images/I/51ItNrpr+vL.jpg",
      },
      {
        _id: 12,
        title: "True Places",
        pageCount: 212,
        rating: 9,
        publishedDate: "2016-09-01",
        authors: ["Kristina"],
        genre: "drama",
        price: 988,
        url: "https://m.media-amazon.com/images/I/51-gDmd6iUL.jpg",
      },

      {
        _id: 13,
        title: "The Chain of Time",
        pageCount: 550,
        rating: 9,
        publishedDate: "2010-08-16",
        authors: ["Marjin"],
        genre: "horror",
        price: 668,
        url: "https://m.media-amazon.com/images/I/5129MmCrLzL.jpg",
      },
      {
        _id: 14,
        title: "Intercepts",
        pageCount: 590,
        rating: 9,
        publishedDate: "2010-08-16",
        authors: ["Allen Reilly"],
        genre: "horror",
        price: 421,
        url: "https://m.media-amazon.com/images/I/31vQYd-boqL.jpg",
      },

      {
        _id: 15,
        title: "Global Strike",
        pageCount: 404,
        rating: 9,
        publishedDate: "2009-07-02",
        authors: ["Shelly Powers"],
        genre: "Action and Adventure",
        price: 542,
        url: "https://m.media-amazon.com/images/I/51j8M81zmRL.jpg",
      },
      {
        _id: 16,
        title: "The War Stage ",
        pageCount: 555,
        rating: 6,
        publishedDate: "2004-08-05",
        authors: ["Guillermo Rauch"],
        genre: "Action and Adventure",
        price: 920,
        url: "https://m.media-amazon.com/images/I/51yndBbYY4L.jpg",
      },
      {
        _id: 17,
        title: "Broken Grace",
        pageCount: 289,
        rating: 6,
        publishedDate: "2016-08-12",
        authors: ["Alex Giamas"],
        genre: "drama",
        price: 1250,
        url: "https://m.media-amazon.com/images/I/41WRifoQhiL.jpg",
      },
    ],
    genres: [
      { id: 1, name: "Romance" },
      { id: 2, name: "Science Fiction" },
      { id: 3, name: "Action and Adventure" },
      { id: 4, name: "horror" },
      { id: 5, name: " fantasy" },
      { id: 6, name: "drama" },
    ],
    selectedGenre: 1,
    pageSize: 2,
    selectedPage: 1,
  };
  handleSelectedGenre = (genre) => {
    console.log(genre);
    this.setState({ selectedGenre: genre.id });
  };
  handlePageSelect = (page) => {
    this.setState({ selectedPage: page });
  };
  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };

  render() {
    const { genres } = this.state;
    const { selectedGenre } = this.state;
    const genre = genres.filter((genre) => genre.id === selectedGenre);
    console.log(genre);

    const filteredBooks = this.state.books.filter(
      (book) => book.genre === genre[0].name
    );
    console.log(filteredBooks);

    const paginatedBooks = this.paginate(
      filteredBooks,
      this.state.selectedPage,
      this.state.pageSize
    );
    return (
      <div
        className="container shadow"
        style={{ backgroundColor: " rgba(255, 255, 128, .5)" }}
      >
        <div className="row">
          <div className="col-lg-3">
            <Category
              genres={this.state.genres}
              selectedGenre={this.state.selectedGenre}
              handleSelectedGenre={this.handleSelectedGenre}
            />
          </div>

          <div className="col-9">
            {/* <Prefer />*/}
            {paginatedBooks.map((book) => (
              <Link
                to={{ pathname: `/books/${book._id}`, state: { book } }}
                style={{ textDecoration: "none" }}
              >
                <Book book={book} />
              </Link>
            ))}
          </div>
        </div>

        <Pagination
          pageSize={this.state.pageSize}
          totalBooks={filteredBooks.length}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        />
      </div>
    );
  }
}

export default Books;
