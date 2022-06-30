import { Counter_Component1__2 } from "../Store/Store";
import {useDispatch, useSelector} from "react-redux";
import Component1__2__3 from "./Component1__2__3";
import { memo } from "react";

function Component1__2(props){
    const dispatch = useDispatch()
    const count = useSelector(state => state.counts.Component1__2)
    function handler(){
        dispatch(Counter_Component1__2())
    }
    return(
        <div>
            Component1__2 count={count}
            <button onClick={handler}>Count++</button>
            <Component1__2__3/>
        </div>
    )
}
export default memo(Component1__2)