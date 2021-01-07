import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>let's go cryssie!</h1>

      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* sidebar */}
      {/* react-router -> chat screen */}
    </div>
  );
}

export default App;
