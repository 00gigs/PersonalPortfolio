import "./App.css";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/**fill in styled divs with components that make up application */}
      <div className="bg-[#283739] h-[50vh] w-full">
        {/**make |hero section| sections with styled div*/}asf
      </div>
      <div className="bg-[#2c5d63] h-[30vh] w-full">{/**make sections with styled div*/}</div>
      <div className="bg-[#a2c11c] h-[20vh] w-full">{/**make sections with styled div*/}</div>
      <div className="bg-[#adacac] h-[20vh] w-full">{/**make sections with styled div*/}</div>
      <div className="bg-[#2c5d63] h-[20vh] w-full">{/**make sections with styled div*/}</div>
    </div>
  );
}

export default App;
