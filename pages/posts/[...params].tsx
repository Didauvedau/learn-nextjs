import { useRouter } from 'next/router'
import React from 'react'

const Params = () => {
	const router = useRouter()
    console.log(router.query.params)
	return (
		<div>
			<h1>Params Page</h1>
			<p>{JSON.stringify(router.query)}</p>
		</div>
	)
}

export default Params
