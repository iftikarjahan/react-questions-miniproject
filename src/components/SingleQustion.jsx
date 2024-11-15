import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";


export default function SingleQuestion({id,title,info,activeId,toggleId}){
    let isActive=activeId===id;
    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button className="question-btn" onClick={()=>toggleId(id)}>{isActive ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </header>
            <p>{activeId===id ? info : null}</p>
        </article>
    )
}