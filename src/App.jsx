import questions from "./data";
import { useState } from "react";
import Questions from "./components/Qustions";

const App = () => {
  /*
  ->Note that here we can also work without creating a state because we are not modifying
  the questions array in any form
  ->If the data was dynamic like we are adding,removing, sorting etc.--then we would need 
  a state.
  ->Remember that we should use state only when data needs to be dynamic and changeable 
  */ 
  const[data,setData]=useState(questions);
  const[activeId,setActiveId]=useState(null);
  /*
  ->Note that here activeId is a dynamic data. So here we would need a state
  */ 

  const toggleId=(id)=>{
    let newActiveId= id===activeId ? null : id;
    setActiveId(newActiveId)
  }

  return(
    <main>
      <Questions data={data} activeId={activeId} toggleId={toggleId}/>
    </main>
  )
};
export default App;
