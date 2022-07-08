import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import './Book.css';
import Page from 'src/components/Page';

export default function UpdateBookInfo(props) {
  const match=useParams()
    const [title,setTitle] = useState([]);
    const [isbn,setIsbn] = useState([]);
    const [author,setAuthor] = useState([]);
    const [description,setDescription] = useState([]);
    const [published_date,setPublished_date] = useState([]);
    const [publisher,setPublisher] = useState([]);

    useEffect(() => {
      axios
      .get('http://localhost:8082/api/books/'+match.id)
      .then(res => {
        setTitle(res.data.title)
        setIsbn(res.data.isbn)
        setAuthor(res.data.author)
        setDescription(res.data.description)
        setPublished_date(res.data.published_date)
        setPublisher(res.data.publisher)
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
    }, []);

    const onChange = (e) => {
          switch(e.target.name){
            case 'title':setTitle(e.target.value); break;
            case 'isbn':setIsbn(e.target.value); break;
            case 'author':setAuthor(e.target.value); break;
            case 'description':setDescription(e.target.value); break;
            case 'published_date':setPublished_date(e.target.value); break;
            case 'publisher':setPublisher(e.target.value); break;
            default: break;
            }
        };
      
    const onSubmit = (e) => {
      e.preventDefault();
  
      const data = {
        title: title,
        isbn: isbn,
        author: author,
        description: description,
        published_date: published_date,
        publisher: publisher
      };
  
      axios
        .put('http://localhost:8082/api/books/'+match.id, data)
        .then(res => {
          // props.history.push('/show-book/'+match.id);
          window.location.href="/app/management/books"
        })
        .catch(err => {
          // console.log("Error in UpdateBookInfo!");
        })
    };

    return(
      <Page title="Update Book Info">
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/app/management/books/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit.bind(null)}>     
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={title}
                onChange={onChange.bind(null)}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">ISBN</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={isbn}
                onChange={onChange.bind(null)}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={author}
                onChange={onChange.bind(null)}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={description}
                onChange={onChange.bind(null)}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={published_date}
                onChange={onChange.bind(null)}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Publisher</label>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={publisher}
                onChange={onChange.bind(null)}
              />
            </div>
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>
        </div>
      </div>
      </Page>
    )
}