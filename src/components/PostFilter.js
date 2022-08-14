import MySelect from "./UI/button/select/MySelect";
import MyInput from "./UI/button/input/MyInput";

const PostFilter=({filter,setFilter})=>{
return (
        <div>
            <MyInput 
                value={filter.query}
                onChange={e=>setFilter({...filter, query: e.target.value})}
                placeholder = "Search"/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
                defaultValue="Sort by"
                options={[
                    {value:'title',name:'By Name'},
                    {value:'body',name:'By Description'}
            ]}/>
        </div>
        )
}

export default PostFilter;