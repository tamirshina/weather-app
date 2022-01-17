import api from '../api/config'
import { useState } from 'react'
import '../styles/Home.module.css'
import PaginationComp from '../components/Pagination'
const Weather = ({ posts }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-5">Tamir</h2>
            <ul className="list-group mb-4" >
                {
                    posts && currentPosts.map(post => (
                        <li key={post.id} className="list-group-item shina">{post.title}</li>
                    ))
                }
            </ul >
        </div>
    )
}

export default Pagination

export async function getStaticProps() {
    const res = await fetch(api.paths.postsUrl)
    const posts = await res.json()

    console.log(posts)

    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts },
    }
}