import './Components.css'
import Login from './LogIn';
const Landing = ()=>{
    return(
        <div className='landing'>
            <center>
                Welcome to <b>BOLT</b> Inventory System
            </center>
            <Login/>
        </div>
    )
}
export default Landing;