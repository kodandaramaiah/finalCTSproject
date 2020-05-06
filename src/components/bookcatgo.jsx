import React from "react";
const Book = (props) => {
  return (
    <div className=" mb-3 row shadow mt-4 ">
      <div className="col-lg-4 pl-0">
        <img src={props.book.url} alt="Image" width="200px" height="200px" />
      </div>
      <div className="col-lg-5">
        <h3 className="text-danger"> {props.book.title}</h3>
        <p className="text-dark"><b>Page Count:</b> {props.book.pageCount}</p>
        <p className="text-dark"><b>Published Date:</b> {props.book.publishedDate}</p>
        <p className="text-dark"><b>Authors:</b> {props.book.authors}</p>
        <p className="text-dark"><b>Categories:</b> {props.book.genre}</p>
      </div>
    </div>
  );
};

export default Book;
