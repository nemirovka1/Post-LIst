import {useMemo} from 'react';

export const useSortedPost =(post,sort)=>{
    const sortedPost = useMemo(() => {
        if(sort){
          return [...post].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
        return post;
    },[sort,post]);

    return sortedPost;
}

export const usePost =(post,sort,query)=>{
    const sortedPost=useSortedPost(post,sort)
    const sortAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post=>post.title.toLowerCase().includes(query))
  },[query,sortedPost])

  return sortAndSearchedPosts;
}