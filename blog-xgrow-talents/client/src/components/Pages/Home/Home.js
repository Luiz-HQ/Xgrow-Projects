import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './MainPost.css'
import './SubPost.css'

function Home () {
    
    const [posts, setPosts] = useState();
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
    },[])
    
    return (
       <main className='mainContent'>
        {posts ? (
            <section className='container'>
            <Link className='linkPost' to={`/post/${1}`}>  
              <h1 className='mainTitle'>{posts[0].title}</h1>
              <p className='mainSubTitle'>Aqui você ficará bem informado com nosso blog super top</p>
              <img className='mainImagePost' src={posts[0].image_url} alt='um simples notbook' width={512}/>
              <p className='mainParagraph'>Aprender a programar é como aprender uma nova língua. No início, tudo parece estranho e desafiador...</p>
            <div className='timeView'>
              <p className='timeRead'>{posts[0].time_read + " min •"}</p>
              <p className='created_at'>{posts[0].created_at}</p>
            </div>
            </Link>
            </section>
                ) : null}

            <section className='containerSubPosts'>
            
                <ul>    
                    {posts && posts.map((post, index) => (
                    index > 0 && (
                <Link className='linkPost' to={`/post/${post.id}`}>         
                    <li className='post' key={index}>
                        <img  src={post.image_url} alt="imagens" width={512} />
                        <div className='containerParagraph'>
                            <h2 className='firstTitle'>{post.title}</h2>
                            <p className='bodyText'>{post.body}</p>
                        <div className='timeToRead'>
                            <p className='timeRead'>{post.time_read + " min •"}</p>
                            <p className='dayRead'>{post.created_at}</p>
                        </div>    
                        </div>
                    </li>
                </Link>   
                        )
                    ))}
                </ul>
                
            </section>
       </main>
    )

}
    
export default Home;