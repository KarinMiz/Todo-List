import React, { Fragment } from "react";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import History from "./pages/History";
import "./App.css";
import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;

// class App extends Tasks{
//   state = {tasks:[], currentTask:""}
//   render(){
//     const {tasks} = this.state;
//     return (
//       <div className="App flex">
//         <Paper elevation={3} className="container">
//           <div className = "heading">TO - DO</div>
//           <form
//           onSubmit={this.handleSubmit}
//           className="flex"
//           style={{margin:"15px 0"}}
//           >
//             <TextField
//             variant="outlined"
//             size="small"
//             style={{width:"80px"}}
//             value={this.state.currentTask}
//             required={true}
//             onChange={this.handleChange}
//             placeholder="Add New TO-DO task"
//             />
//             <Button
//             style={{height:"40px"}}
//             color="primary"
//             variant="outlined"
//             type="submit"
//             >
//               Add task
//             </Button>
//           </form>
//           <div>
//             {tasks.map((task)=>(
//               <Paper
//               key={task._id}
//               className="flex task_container">
//                 <Checkbox
//                 checked={task.completed}
//                 onClick={()=>this.handleUpdate(task._id)}
//                 color="primary"
//                 />
//                 <div
//                 className={task.completed?"task line_through" : "task"}
//             >{task}</div>
//               </Paper>
//             ))}
//           </div>
//           <Button
//           onClick={()=> this.handleDelete(tasks._id)}
//           color="secondary"
//           >
//             delete
//           </Button>
//         </Paper>
//       </div>
//     );
//   }

// }

// export default App;
