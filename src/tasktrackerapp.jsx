import { useState } from "react";
export default function Tasktrackerapp() {
  const [tudo, setTudo] = useState([]);
  const [value, setValue] = useState("");
  function handle(e) {
    e.preventDefault();
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var newformat = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours < 10 ? "0" + hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var time = hours + ":" + minutes + " " + newformat;
    let newitem = value;
    let newlist = [...tudo, { text: newitem + " - " + time + " " }];
    setTudo(newlist);
    setValue("");
  }
  function remove(e) {
    var index = Number(e.target.id);
    let temp = [...tudo];
    temp.splice(index, 1);
    setTudo(temp);
  }
  const list = tudo.map((item, index) => {
    return (
      <div key={index} id="task">
        <li className="list">
          {item.text} <button onClick={remove}>-</button>
        </li>
      </div>
    );
  });
  return (
    <>
      <div className="div-list">{list}</div>
      <br />
      <form onSubmit={handle}>
        <input
          type="text"
          value={value}
          placeholder="Add event"
          onChange={(e) => setValue(e.target.value)}
        />{" "}
        Please Enter to Submit
      </form>
    </>
  );
}
