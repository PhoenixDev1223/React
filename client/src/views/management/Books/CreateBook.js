import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import './Book.css';
import axios from 'axios';
import Page from 'src/components/Page';

export default function CreateBook(props) {
    const [title,setTitle] = useState([]);
    const [isbn,setIsbn] = useState([]);
    const [author,setAuthor] = useState([]);
    const [description,setDescription] = useState([]);
    const [published_date,setPublished_date] = useState([]);
    const [publisher,setPublisher] = useState([]);
    const [source, setSource] = useState([]);

    const onChange = (e) => {
        switch(e.target.name){
            case 'title':setTitle(e.target.value); break;
            case 'isbn':setIsbn(e.target.value); break;
            case 'author':setAuthor(e.target.value); break;
            case 'description':setDescription(e.target.value); break;
            case 'published_date':setPublished_date(e.target.value); break;
            case 'publisher':setPublisher(e.target.value); break;
            case 'source': setSource(e.target.value); break;
            default: break;
            }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        e.persist();
        const data = {
            title: title,
            isbn: isbn,
            author: author,
            description: description,
            published_date: published_date,
            publisher: publisher,
            source: source
        };
        axios
        .post('http://localhost:8082/api/books', data)
        .then(res => {
        switch(e.target.name){
            case 'title':setTitle(''); break;
            case 'isbn':setIsbn(''); break;
            case 'author':setAuthor(''); break;
            case 'description':setDescription(''); break;
            case 'published_date':setPublished_date(''); break;
            case 'publisher':setPublisher(''); break;
            case 'source': setSource(''); break;
            default: break;
            }
          window.location.href="/app/management/books"
        })
        .catch(err => {
          console.log(err.message);
        })
    };

    return(
        <Page title="Create Book">
        <div className='CreateBook'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br />
                            <Link to="/app/management/books/" className="btn btn-outline-warning float-left">
                                Show Book List
                            </Link>
                        </div>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center'>Add Book</h1>
                            <p className='lead text-center'>Create new book</p>
                            <form noValidate onSubmit={onSubmit.bind(null)}>
                                <div className='form-group'>
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
                                    <input
                                        type='text'
                                        placeholder='Publisher of this Book'
                                        name='publisher'
                                        className='form-control'
                                        value={publisher}
                                        onChange={onChange.bind(null)}
                                    />
                                    <br />
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>                    
                        </div>
                    </div>
                </div>
        </div>
        </Page>
    );
}