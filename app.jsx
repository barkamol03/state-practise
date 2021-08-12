import React from "react";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "",
      data: [
        { id: 1, name: "Barkamol", status: "Student" },
        { id: 2, name: "Sardor", status: "Developer" },
        { id: 3, name: "Akmal", status: "Student" },
        { id: 4, name: "Anvar", status: "Teacher" },
      ],
    };
  }
  render() {
    const onDelete = (id) => {
      console.log("Deleted", id);
      const newData = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: newData });
    };

    const onAdd = () => {
      console.log(this.state.name, this.state.status);
      const newData = [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          name: this.state.name,
          status: this.state.status,
        },
      ];
      this.setState({ data: newData });
    };

    const onChangeName = (e) => {
      this.setState({ name: e.target.value });
    };

    const onChangeStatus = (e) => {
      this.setState({ status: e.target.value });
    };
    return (
      <div>
        <input onChange={onChangeName} placeholder="name" type="text" />
        <input onChange={onChangeStatus} placeholder="status" type="text" />
        <button onClick={onAdd}>ADD</button>
        <table border="1" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.status}</td>
                  <td>
                    <button onClick={() => onDelete(value.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
