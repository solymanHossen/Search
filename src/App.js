import "./App.css";
import { Users } from "./data";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const keys=["first_name","last_name","email"]


  console.log(Users[0])

  const search = (data) => {
    return data.filter(

      (item)=>
      keys.some(key=>item[key].toLowerCase().includes(query))
      // (item) =>
      //   item.first_name.toLowerCase().includes(query) ||
      //   item.last_name.toLowerCase().includes(query) ||
      //   item.email.toLowerCase().includes(query)
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search...."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
      {/* <ul className="list">
        {Users.filter((user)=>
        user.first_name.toLowerCase().includes(query)).map((user) => (
          <li key={user.id} className="listItem">{user.first_name}</li>
        ))}

        <li className="listItem">Ashik</li>
        <li className="listItem">Arif</li>
      </ul> */}
    </div>
  );
}

export default App;
