import logo from './logo.svg';
import './App.css';
import StudentList from "./StudentList";
import { useState, useEffect } from "react";
function App() {
  //bai doc dem so 1 den hang tram
  const [x, setX] = useState(0);
  const hand_number = () => {
    // setX(x + 2);
    setX((pre) => pre + 1);
  };
  //++++++++++++++++++++++++++
  // bai text 
  const [text, setText] = useState("Meo");
  const hand_text = () => {
    setText("Heo " + x);
  };
  //++++++++++++++++++++++++++
  // bai input.value voi name
  const [name, setName] = useState("");
  const hand_Change_name = (event) => {
    setName(event.target.value);
    setStudents((pre) => ({...pre, name:name}));
  };
  const hand_leog = (e) => {
    e.preventDefault();
    setText(name);
    setName("")
  }
  //++++++++++++++++++++++++++
  // bai check toggle
  const [check, setcheck] = useState(true)
  const hand_toggle = () => {
    setcheck((pre) => !pre);
  }
  //++++++++++++++++++++++++++
  // bai text ho va ten voi input.value 
  const [student, setStudents] = useState({
    name: "Nguyen Quang Toan Thang",
    old: 5,
  });
  //+++++++++++++++++++++++++++
  // bai list setList
  const vd = [
    {name: "Toan Thang", old: 20},
    {name: "Phan Anh", old: 20}
  ];
  const [list,setList] = useState(() => {
    let listLocal;
    if (localStorage.getItem("list")) {
      listLocal = JSON.parse(localStorage.getItem("list"));
    } else {
      listLocal = vd;
    }
    console.log(listLocal);
    return listLocal;
  });
  //+++++++++++++++++++++++++++++++
  const hand_adds = () => {
    setList((pre) => {
    const newList = [...pre, {name: name, old : 5}];
    // localStorage.setItem("list", JSON.stringify(newList));
    return newList;
    });
  };

  return (
    <div>
      <h2>React js</h2>
      <h1>{x}</h1>
      <h1>name:{text}</h1>
      <h1>
        Ho va Ten: {student["name"]}, Tuoi: {student.old}{" "}
        {/* {JSON.stringify(student)} */}
      </h1>
      <button onClick={hand_number}>Number</button>
      <button onClick={hand_text}>Text</button>
      <form onSubmit={hand_leog}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={hand_Change_name}
        >
        </input>
      </form>
      <button onClick={hand_toggle}>toggle</button>
      {check ? <StudentList /> : ""}
     
      <ul>
        {
          list.map((st,key) => {
            return <li>{st.name + " " + st.old}</li>
          })
        }
      </ul>
      <button onClick={hand_adds}>hand_adds</button>
    </div>


  );
}

export default App;
