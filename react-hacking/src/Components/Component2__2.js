import { Counter_Component2__2 } from "../Store/Store";
import {useDispatch, useSelector} from "react-redux";

export default function Component2__2(props){
    const count = useSelector(state => state.counts.Component2__2)
    const dispatch = useDispatch()
    function handler(){
        dispatch(Counter_Component2__2())
    }
    return(
        <div>
            Component2__2 count={count}
            <button onClick={handler}>Count++</button>
        </div>
    )
}