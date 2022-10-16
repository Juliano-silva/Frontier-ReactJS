import React,{useState,useEffect} from "react";
import List from "../Api/List"


const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list){
    return (list = JSON.parse(localStorage.getItem("list")));
  } else{
    return [];
  }
}

const Api = () =>{
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [list,setList] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name,!image){
    }else{
      const newItem = {id: new Date().getTime().toString(),title:name,image:image};
      setList([...list,newItem]);
      setName("");
      setImage("");
    }
  };
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit}>
        </form>
        {list.length > 0 && (
          <div>
            <List items={list} />
          </div>
        )}
      </section>
    </div>
  )
}
export default Api