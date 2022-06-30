import { Counter_Component1__2__3 } from "../Store/Store";
import {useDispatch, useSelector} from "react-redux";

export default function Component1__2__3(props){
    const count = useSelector(state => state.counts.Component1__2__3)
    const dispatch = useDispatch()
    function handler(){
        dispatch(Counter_Component1__2__3())
    }
    return(
        <div>
            Component1__2__3 count={count} 
            <button onClick={handler}>Count++</button>
        </div>
    )
}