import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostServise';
import Spinner from '../components/UI/button/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage=()=>{
    const params =useParams()
    const [post,setPost]=useState({});
    const [comments,setComments]=useState([])
    const [fetchById,isLoading,error]=useFetching(async ()=>{
        const response= await PostService.getById(params.id);
        setPost(response.data)
    })

    const [fetchCooments,isComLoading,comError]=useFetching(async ()=>{
        const response= await PostService.getCommentsById(params.id);
        setComments(response.data)
    })

    useEffect(()=>{
        fetchById(params.id);
        fetchCooments(params.id)
    },[])

    return(
        <div>
            <h1> You open page of {params.id}</h1>
            {isLoading
            ? <Spinner/>
            : <div>{post.id}.{post.title} </div>
            }
            <h1>
                Comments
            </h1>
            {isComLoading
            ?<Spinner/>
            :<div>
                {comments.map(com=>
                  <div style = {{marginTop:'15px'}}>
                    <h5>{com.email}</h5>
                    <div>{com.body}</div>
                  </div> 
                )}
            </div>
            }
        </div>   
    )
}
export default PostIdPage;