import Component1__2 from "./Component1__2";
import {useDispatch, useSelector} from "react-redux";
import { Counter_Component1 } from "../Store/Store";

export default function Component1(props){
    const dispatch = useDispatch()
    const count = useSelector(state => state.counts.Component1)
    function handler(){
        dispatch(Counter_Component1())
    }
    return(
        <div>
            Component1 count={count} 
            <button onClick={handler}>Count++</button>
            <Component1__2/>
        </div>
    )
}