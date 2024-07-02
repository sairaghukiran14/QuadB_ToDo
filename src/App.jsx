import { Provider } from "react-redux";
import store from "./app/store";

import "./App.css";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
