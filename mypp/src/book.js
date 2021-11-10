import React from 'react'

const Book = (props) => {
	const { img, title, author } = props
	// attribute, event handler
	// onClick, onMouseOver
	const complexExample = () => {
		console.log(author)
	}
	const clickHandler = () => {
		alert('hello world')
	}
	return (
		<article
			className='book'
			onMouseOver={() => {
				console.log(title)
			}}
		>
			<img src={img} alt='' />
			<h1>{title}</h1>
			<h4> {author} </h4>
			<button type='button' onClick={clickHandler}>
				reference example
			</button>
			<button type='button' onClick={() => complexExample(author)}>
				a more complex example
			</button>
		</article>
	)
}

export default Book
