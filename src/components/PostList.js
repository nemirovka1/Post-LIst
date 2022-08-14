import PostItem from "./PostItem"
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const PostList =({post,title,remove})=>{
    if (!post.length){
        return (
            <h1 style={{textAlign:'center'}}>
                Posts not found !
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Post</h1>
            <TransitionGroup>
                { post.map((value,index)=>
                <CSSTransition
                    key={value.id}
                    timeout={500}
                    classNames="post"
                    >
                    <PostItem remove={remove} number={index + 1}  value={value}/>
                </CSSTransition>
                    
                )}
            </TransitionGroup>
           
        </div>   
    )
}

export default PostList;