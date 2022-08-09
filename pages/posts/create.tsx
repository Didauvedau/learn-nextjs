import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

const create = () => {
	return (
		<div className="container m-3">
			<h1>Create Page</h1>
			<Link href="/" className="m-3">
				back to home
			</Link>
		</div>
	)
}

export default create
