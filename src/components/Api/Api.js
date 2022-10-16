import React,{useState,useEffect} from "react";
import List from "./List"


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
  const [editId,setEditID] = useState(null);
  const [isEditing,setIdEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name,!image){
    }else if(name && isEditing,image && isEditing){
      setList(
        list.map((item) => {
          if(item.id === editId){
            return {...item,title:name,image:image}
          }
          return item
        })
      );
      setName("");
      setImage("");
      setEditID(null);
      setIdEditing(false);
    }else{
      const newItem = {id: new Date().getTime().toString(),title:name,image:image};
      setList([...list,newItem]);
      setName("");
      setImage("");
    }
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const EditItem = (id) => {
    const EditItem = list.find((item) => item.id === id);
    setIdEditing(true);
    setEditID(id);
    setName(EditItem.title);
    setImage(EditItem.image);

  };
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" onChange={(e) => setImage(e.target.value)} value={image} />
            <button type="submit">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div>
            <List items={list} removeItem={removeItem} editItem={EditItem}/>
          </div>
        )}
      </section>
    </div>
  )
}
export default Api