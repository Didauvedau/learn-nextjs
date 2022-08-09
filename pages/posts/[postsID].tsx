import { useRouter } from 'next/router'
import React from 'react'

const PostsID = () => {
	const router = useRouter()
	// console.log(router.query.postsID)

	return (
		<div>
			<h1>PostID pAge</h1>
			<p>{JSON.stringify(router.query)}</p>
		</div>
	)
}

export default PostsID
