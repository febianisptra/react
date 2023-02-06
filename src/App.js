import './App.css';
import Sidebar from './componets/Sidebar';
import Header from './componets/Header';

function App() {
  return (
    <div className='w-full min-h-screen flex flex-row'>
      <Sidebar/>
      <Header/>  
    </div>
    
  );
}

export default App;
