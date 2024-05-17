import { useParams } from 'react-router-dom';
import './Post.css'
import { useState, useEffect } from 'react'

function Post() {

    const {postId} = useParams();

    const [comment, setComment] = useState();
    const [posts, setPosts] = useState();
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data[postId-1]))

        fetch("http://localhost:3001/comments")
        .then((res) => res.json())
        .then((data) => setComment(data))
    },[])
    

    

    return (
        
            posts && postId > 0 ? (
                <main className='mainContainer'>
                    <section className='container'>
                        <div className='postInfo'>
                            <h1 className='mainTitlePost'>{posts.title}</h1>
                            <p className='timeReadPost'>{posts.time_read + " min •"} {posts.created_at}</p>
                        </div>      
                            <img className='mainImageToPost' src={posts.image_url} alt='um simples notbook' width={512}/>
                            <p className='mainParagraphPost'>{posts.body}</p> 
                    </section>  
                 
                    <section className='comments'>
                        <h2>Comentários:</h2>
                        {comment ? 
                            (<ul className='listComments'>
                                {comment.map((comments, index) => (
                                    <li key={index} className='postItem'>                            
                                        <img className='userAvatar' src={comments.avatar} alt='comentario' />
                                        <div className='commentContent'>  
                                            <p><b>Usuário: </b>{comments.username} | {comments.email}</p>
                                            <p><b>Mensagem: </b>{comments.comment}</p>
                                        </div>      
                                    </li>
                                )) }
                            </ul>) : null}   
                    </section>

               </main>       
            )  : null


            
    )
}

export default Post;