import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

// Setup Variables
const books = [
{
  img: 'https://m.media-amazon.com/images/I/91xUsdujK3L._AC_UL640_QL65_.jpg',
  title: 'Cat Kid Comic Club',
  autor: 'Dav Pilkey',
},
{
  img: 'https://m.media-amazon.com/images/I/916OF0f3xvL._AC_UL640_QL65_.jpg',
  title: 'The Year We Learned to Fly',
  autor: 'Jacqueline Woodson y Rafael López',
},
{
  img: 'https://m.media-amazon.com/images/I/819CF9e7CPL._AC_UL640_QL65_.jpg',
  title: 'The Marvellers',
  autor: 'Dhonielle Clayton',
},
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
      return (
      <Book book={book}></Book>
      );
    })}
    </section>
  );
}

const Book = (props) => {
  const {img, title, autor} = props.book;
  return (
  <article className='book'>
    <img src={img} alt=''/>
    <h1>{title}</h1>
    <h4 >{autor}</h4>
  </article>
  );
};

ReactDOM.render(<BookList/>, document.getElementById('root'));