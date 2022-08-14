import {useNavigate} from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem=(props)=>{ 
  const navigate= useNavigate()
  
    return (
        <div className="post">
        <div className="post__content">
          <strong>{props.value.id}.{props.value.title}</strong>
          <div>
             {props.value.body}
          </div>
        </div>
        <div className="post__btns">
          <MyButton style={{marginRight:10}}onClick={()=> navigate(`/post/${props.value.id}`)}>
              Open
          </MyButton>
          <MyButton onClick={()=>props.remove(props.value)}>
              Delete
          </MyButton>
        </div>
      </div>
    )
}

export default PostItem;