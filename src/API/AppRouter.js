import {Route,Routes,Navigate} from "react-router-dom";
import ErrorPage from "../components/UI/button/errorPage/ErrorPage";
import { privateRoutes} from "../router";

const AppRouter=()=>{
    return (
       <Routes>
        {privateRoutes.map(route=>
          <Route
            path={route.path}
            element={route.element}/>)} 
          <Route path='/' element={ <Navigate to="/post" /> }/> 
          <Route path='*'element={<ErrorPage/>}/>
      </Routes>
    )
}
export default AppRouter;