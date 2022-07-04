import Component2__2 from "./Component2__2"
import { Counter_Component2 } from "../Store/Store";
import {useDispatch, useSelector} from "react-redux";

export default function Component2(props){
    const count = useSelector(state => state.counts.Component2)
    const dispatch = useDispatch()
    function handler(){
        dispatch(Counter_Component2())
    }
    return(
        <div>
            Component2 count={count} 
            <button onClick={handler}>Count++</button>
            <Component2__2 />
        </div>
    )
}