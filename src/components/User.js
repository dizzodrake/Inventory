import UserTable from "./UserTable"

const User = ({goods, deductGood})=>{
    return(
        <center>
            <UserTable goods={goods} deductGood={deductGood}/>
        </center>
    )
}
export default User;