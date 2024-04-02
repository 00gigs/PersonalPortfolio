import "./App.css";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/**fill in styled divs with components that make up application */}
      <div className="bg-[#28373951] h-[70vh] w-full">
        {/**make |hero section| sections with styled div*/}
        <div className="grid grid-cols-2">
          <h1 className=" font-rubik font-bold text-center text-5xl py-10 ">MEET JAMES HARRINGTON, The FullStack Dev👨🏻‍💻</h1>
          {/**Main title or welcome message */}
          <p className="flex justify-start ml-12 font-raleway font-thin mt-8">
            First i would like to thank you for taking the time to  visit my page. You are here to view my skill set and understand why we should engage in business. I want my technology and skills to benefit you and fit your needs.
        
          </p>
        </div>
      </div>
      <div className="bg-[#2c5d63] h-[45vh] w-full">
        {/**make sections with styled div*/}
      </div>
      <div className="bg-[#a2c11c] h-[69vh] w-full">
        {/**make sections with styled div*/}
      </div>
      <div className="bg-[#adacac] h-[50vh] w-full">
        {/**make sections with styled div*/}
      </div>
      <div className="bg-[#2c5d63] h-[20vh] w-full">
        {/**make sections with styled div*/}
      </div>
    </div>
  );
}

export default App;
