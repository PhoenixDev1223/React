import React from 'react'
import axios from 'axios';
import { Link ,useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import './Book.css';
import Page from 'src/components/Page';

export default function ShowBookDetails(props) {
    const match=useParams()
    const [book,setBook] = useState([]);
    
    useEffect(() => {
      console.log(match)
      axios
      .get('http://localhost:8082/api/books/' + match.id)
      .then(res => {
        console.log("Print-showBookDetails-API-response: " + res.data);
        setBook(res.data)
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })
    }, []);
    
    const onDeleteClick = (id) => {
      axios
      .delete('http://localhost:8082/api/books/'+id)
      .then(res => {
          console.log('Good');
          window.location.href="/app/management/books"
        })
        .catch(err => {
          console.log("Error form ShowBookDetails_deleteClick");
        })
    };

      let BookItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ book.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ book.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ book.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ book.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ book.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

  return (
    <Page title="Book Details">
    <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/app/management/books/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr style={{backgroundColor: "lightgreen"}} /> 
              <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>
          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={onDeleteClick.bind(null, book._id)}>Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/app/management/books/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}
        </div>
      </div>
      </Page>
  )
}
