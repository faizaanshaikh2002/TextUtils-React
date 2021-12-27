import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    // <div className="blank">Lovely</div>
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
