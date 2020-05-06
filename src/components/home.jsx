import React, { Component } from "react";
import it1 from "./images/item1.jpg";
import it2 from "./images/item2.jpg";
import it3 from "./images/item3.jpg";
import it4 from "./images/item4.jpg";
import it5 from "./images/item5.jpg";
import it6 from "./images/item6.jpg";
import { Link } from "react-router-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
class Home extends Component {
  divStyle = {
    backgroundColor: "#E3EdC8",
  };
  catstyle = {
    width: 150,
    height: 150,
  };
  state = {};
  render() {
    return (
      <div style={this.divStyle}>
        <div className="jumbotron">
          <h4 className="text-danger">
            <marquee>*Newly Arraival Books*</marquee>
          </h4>

          <h1 className="display-5 " align="center">
            BookStore
          </h1>
          <center>
            <em>A town isn't a town without a Bookstore</em>
          </center>
        </div>
        <h1 className="text-center">Newly Coming Books</h1>
        <div className="row m-5 p-4 ml-5">
          <div
            className="card "
            style={{ width: 300 }}
            className="ml-5 mr-5 border border-danger"
          >
            <img
              src={it1}
              class="card-img-top"
              style={{ width: 300, height: 300 }}
              alt="..."
            />

            <div
              className="card-body"
              style={{ backgroundColor: " rgba(255, 255, 128, .5)" }}
            >
              <h5 className="card-title">Title: BITSAT ENGLISH</h5>

              <h6 className="card-title">Author: DISHA</h6>
              <p className="card-text">
                it is very awesome book,it is very helpful for JEE entrance
                exam.
              </p>
              <Link to="/" className="btn btn-warning">
                Add to Cart
              </Link>
            </div>
          </div>

          <div
            className="card"
            style={{ width: 300 }}
            className="ml-5 mr-5 border border-danger"
          >
            <img
              src={it2}
              className="card-img-top"
              style={{ width: 300, height: 300 }}
              alt="..."
            />
            <div
              className="card-body"
              style={{ backgroundColor: " rgba(255, 255, 128, .5)" }}
            >
              <h5 className="card-title">Title: BITSAT PRACTICE PAPERS</h5>
              <h6 className="card-title">Author: DISHA</h6>
              <p className="card-text">
                it is very awesome book,it is very helpful for JEE entrance
                exam.
              </p>
              <Link to="/" className="btn btn-warning">
                Add to Cart
              </Link>
            </div>
          </div>

          <div
            className="card "
            style={{ width: 300 }}
            className="ml-5 mr-5 border border-danger"
          >
            <img
              src={it3}
              className="card-img-top"
              style={{ width: 300, height: 300 }}
              alt="..."
            />
            <div
              className="card-body"
              style={{ backgroundColor: " rgba(255, 255, 128, .5)" }}
            >
              <h5 className="card-title">Title: ITEEE SOLVED PAPERS</h5>
              <h6 className="card-title">Author: DISHA</h6>
              <p className="card-text">
                it is very awesome book,it is very helpful for JEE entrance
                exam.
              </p>
              <Link to="/" className="btn btn-warning">
                Add to Cart
              </Link>
            </div>
          </div>

          <div
            className="card"
            style={{ width: 300 }}
            className="ml-5 mr-5 border border-danger"
          ></div>
        </div>

        <h2 className="mt-5 mb-3 text-center">Most Searched Books</h2>

        <div className="row m-5 p-4 ml-5">
          <div
            className="card"
            style={{ width: 300 }}
            className="ml-5 mr-5 border border-danger"
          >
            <img
              src={it4}
              className="card-img-top"
              style={{ width: 300, height: 300 }}
              alt="..."
            />
            <div
              className="card-body "
              style={{ backgroundColor: " rgba(255, 255, 128, .5)" }}
            >
              <h5 className="card-title">Title: IIT JEE Mathematics</h5>
              <h6 className="card-title">Author:AMIT M AGARWAL</h6>
              <p className="card-text">
                it is very awesome book,it is very helpful for JEE entrance
                exam... because,it is fullfill with last 41 que.papers with
                their solution...so it is easy to study respectful with customer
              </p>
              <Link to="/" className="btn btn-warning">
                Add to Cart
              </Link>
            </div>
          </div>
          <div
            className="card"
            style={{ width: 300 }}
            className="ml-5 mr-5 border border-danger"
          >
            <img
              src={it5}
              className="card-img-top"
              style={{ width: 300, height: 300 }}
              alt="..."
            />
            <div
              className="card-body"
              style={{ backgroundColor: " rgba(255, 255, 128, .5)" }}
            >
              <h5 className="card-title">Title: IIT JEE Mathematics</h5>
              <h6 className="card-title">Author:AMIT M AGARWAL</h6>
              <p className="card-text">
                it is very awesome book,it is very helpful for JEE entrance
                exam... because,it is fullfill with last 41 que.papers with
                their solution...so it is easy to study respectful with customer
              </p>
              <Link to="/" className="btn btn-warning">
                Add to Cart
              </Link>
            </div>
          </div>

          <div
            className="card"
            style={{ width: 300 }}
            className="ml-5 mr-5 border border-danger"
          >
            <img
              src={it6}
              className="card-img-top"
              style={{ width: 300, height: 300 }}
              alt="..."
            />
            <div
              className="card-body"
              style={{ backgroundColor: " rgba(255, 255, 128, .5)" }}
            >
              <h5 className="card-title">Title: IIT JEE Chemistry</h5>
              <h6 className="card-title">Author: AMIT M AGARWAL</h6>
              <p className="card-text">
                it is very awesome book,it is very helpful for JEE entrance
                exam... because,it is fullfill with last 41 que.papers with
                their solution...so it is easy to study respectful with customer
              </p>
              <a to="/" className="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
