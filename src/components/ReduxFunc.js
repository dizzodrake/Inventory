import { useSelector, useDispatch } from "react-redux"

const ReduxFunc = () => {
    let valInStore = useSelector(state=>state.school);
    let dispatch = useDispatch();   

    return (
        <>
            i am the functional component
            My school is {valInStore}
            <button onClick={()=>dispatch({type:"CHANGETOLAUTECh", school:"LAUTECH"})}></button>
        </>
    )
}
export default ReduxFunc;