import {useState} from 'react';
import { usePost } from '../hooks/usePost';
import { useEffect } from 'react';
import { useFetching } from '../hooks/useFetching';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/button/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import Spinner from '../components/UI/button/loader/MyLoader';

import PostService from '../API/PostServise';
import '../styles/App.css';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/button/pagination/Pagination';

function Post() {
  const [post,setPost]=useState([]);

  const [filter,setFilter] = useState({sort:'',query:''})
  const [modal,setModal]=useState(false);
  const sortAndSearchedPosts=usePost(post,filter.sort,filter.query);

  const [totalPage , setTotalPage]=useState(0);
  const [limit,setLimit]=useState(10);
  const [page,setPage]=useState(1)
  

  const [ fetchPosts , isPostLoading , postError ]=useFetching (async()=>{
    const response=await PostService.getAll(limit,page)
    setPost(response.data)
    const totalCount=response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount,limit))
  })

  const changePage=(page)=>{
    setPage(page);
  }

  useEffect(()=>{
    fetchPosts()
  },[page])

  const createPost=(newPost) => {
    setPost([...post,newPost])
    setModal(false)
  }

  const removePost=(value)=>{
    setPost(post.filter(p=>p.id !== value.id))
  }

  return (
    <div className ="App">
      <MyButton style ={{marginTop:30}} onClick={()=>setModal(true)}>
          Create post
      </MyButton>

      <MyModal visible={modal} setVisibel={setModal}>
          <PostForm create={createPost}/>
      </MyModal>

      <hr style={{margin :'15px '}}/>
      <PostFilter 
          filter={filter}
          setFilter={setFilter}/>
      {postError && <h1> Error !</h1>}
      
      {isPostLoading 
          ? <div style={{display :'flex',justifyContent:'center' ,marginTop:30}}><Spinner/></div>
          : <PostList remove={removePost} post={sortAndSearchedPosts} title =""/>}
     
     <Pagination
        page={page} 
        changePage={changePage} 
        totalPage={totalPage}/>
    </div>
  );
}
export default Post;