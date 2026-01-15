// src/App.jsx
import Navbar from './components/Navbar';
import PreCita from './pages/PreCita';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content-wrapper">
        <PreCita />
      </main>
    </div>
  );
}

export default App;