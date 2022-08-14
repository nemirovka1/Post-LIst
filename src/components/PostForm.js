import {useState} from 'react';
import MyInput from './UI/button/input/MyInput';
import MyButton from './UI/button/MyButton';


const PostForm=({create})=>{
    const [value ,setValue]=useState({ title:'',body:''});

    const addNewPost=(event)=>{
        event.preventDefault()
        const newPost ={
            ...value, id: Date.now()
        }
        create(newPost)
        setValue({title:'', body:''})
    }
    
    return (
        <form>
                <MyInput
                    value={value.title}
                    onChange={event=>setValue({...value, title:event.target.value})}
                    type="text"
                    placeholder='Post name'/>
                <MyInput 
                    value={value.body}
                    onChange={event=>setValue({...value, body:event.target.value})}
                    type="text" 
                    placeholder='Description name' />
            <MyButton onClick={addNewPost} >Add post</MyButton>
        </form>
    )
}

export default PostForm;