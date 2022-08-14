import MyInput from "../components/UI/button/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login=()=>{
    return (
        <div>
            <h1>Authorization page</h1>
            <form action="">
                <MyInput type="text" placeholder="Login " />
                <MyInput type="password" placeholder="Password " />
                <MyButton>Input</MyButton>
            </form>
        </div>
    )
}

export default Login;