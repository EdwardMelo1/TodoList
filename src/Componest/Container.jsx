import React, { useState } from "react";/* se llaman el usestated de react */
import TaskList from "./Tasklist";/* se llama el documento jsx TaskList */
import FormTodo from "./FormTodo";/* se llama el documento jsx FormTodo */

const Container = () => {/* se crea el container */
const [list, setList] = useState([]); /*  se crea una constante y se le asignan lo valores para el usestate*/


const handleAddItem = addItem => {/* se crea otra constante llamada handleAddItem y se le da un parametro  */
setList([...list, addItem]); 
};
return (
<div>{/* dentro del div se llaman lo otros elemento */}
<FormTodo handleAddItem={handleAddItem} />
<TaskList list={list} setList={setList} />
</div>
);
};

export default Container;/* se exporta elemento container */