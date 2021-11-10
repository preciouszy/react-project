import React from 'react'
import ReactDom from 'react-dom'
// import css
import './index.css'

// importing books
import { books } from './books'

// importing book frome book js
import Book from './book'
// declearing variables

// const title =
// const author =
// const img =
//

// declearing the render function
function BookList() {
	return (
		// <React.Fragment>
		// <div>
		// 	<Person />
		// 	<Meaasge />
		// </div>
		// /* </React.Fragment> */
		<section className='booklist'>
			{books.map((book) => {
				return <Book key={book.id} {...book}></Book>
			})}
		</section>
	)
}

// // impplicit
// const Person = () => <h2> preciouszy the baddest in all generation</h2>
// // explicit
// const Meaasge = () => {
// 	return <p> if you wanna be the best in the world be like preciouszy</p>}

// const Greeting = () => {
// 	return React.createElement('h1', {}, 'hello world')
// }

ReactDom.render(<BookList />, document.getElementById('root'))
