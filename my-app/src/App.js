import './App.css';
import './styles/First.css';
import './styles/Second.css';
import './styles/Post.css'
import First from './component/First';
import Second from './component/Second.js';
import Post from './component/Post.js';
import './images/shiva.jpeg'
function App() {
  return (
    <div className="main-content">
      <First />
      <Second />
      <Post />
    </div>
  )
}

export default App;
