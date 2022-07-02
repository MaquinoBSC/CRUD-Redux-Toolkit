import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const tasks = useSelector(state => state.tasks);
  console.log(tasks);

  
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
