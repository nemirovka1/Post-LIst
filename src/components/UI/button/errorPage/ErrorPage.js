import {Link} from 'react-router-dom';

const ErrorPage=()=>{
    return (
        <div>
            <p style={{'textAlign':'center','fontWeight':'bold','fontSize':'24px'}}>Page doeesn't exist</p>
            <Link style={{'display':'block','textAlign':'center','fontWeight':'bold','fontSize':'24px',
            'marginTop':'30px'}} to="/post">Back to post</Link>
        </div>
    )
}

export default ErrorPage;