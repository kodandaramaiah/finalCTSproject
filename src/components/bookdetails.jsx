import React, { Component } from "react";

class BookDetails extends Component {
  state = {};
  handleBack = () => {
    this.props.history.push("/books");
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Book Details Page</h1>
        <h2>
          <i>Selected Book #{this.props.match.params.id}</i>
        </h2>
        <h2 className="text-center text-danger">
          {this.props.location.state.book.title}
        </h2>
        <h3 className="text-center text-secondary ">
          <em>{this.props.location.state.book.authors}</em>
        </h3>

        <h3 className="text-center text-secondary">
          <em> {this.props.location.state.book.genre}</em>
        </h3>
        <h3 className="text-center text-secondary">
          <em> {this.props.location.state.book.publishedDate}</em>
        </h3>
        <h3 className="text-center text-secondary">
          <em> {this.props.location.state.book.rating}/10</em>
        </h3>
        <h3 className="text-center text-secondary">
          <em> Rs.{this.props.location.state.book.price}</em>
        </h3>
        <center>
          <button className="btn btn-warning" onClick={this.handleBack}>
            Add to cart
          </button>
        </center>
        <br />
        <center>
          <button className="btn btn-danger " onClick={this.handleBack}>
            Back
          </button>
        </center>
      </div>
    );
  }
}

export default BookDetails;
