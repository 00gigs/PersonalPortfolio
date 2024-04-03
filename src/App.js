import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Technologies from "./components/Technologies";
function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      {/**fill in styled divs with components that make up application */}
      <div className="bg-[#88b5bb51] h-[70vh] w-full">
        {/**make |hero section| sections with styled div*/}
        <div className="grid  grid-cols-2">
         <Header/> 
          {/**Main title or welcome message */}
          <p className="flex justify-start font-raleway font-thin text-[25px] mt-8">
          First, thank you for taking the time to visit my page. You are here to view my skills and understand why we should engage in business.
         I want my technology and skills to benefit you and fit your needs. As we peel back the layers of my full-stack development capabilities, you'll discover  solutions  that have propelled businesses forward. My portfolio you are seeking  is not just coding exercises; they are a testament to strategic problem-solving and cutting-edge  design. Prepare to witness how my expertise can transform your ideas into reality, leaving you anticipating the untapped potential we can unlock together.   
          </p>
        </div>
      </div>
      <div className="bg-[#2c5d63] h-[65vh] w-full text-center">
        {/**make sections with styled div*/}
        <h1 className="pt-5 font font-roboto font-bold text-4xl">PERSONAL GROWTH🚀</h1>
      </div>
      <div className="bg-[#a2c11c] h-[69vh] w-full">
      <Technologies/>
      </div>
      <div className="bg-[#e3cccc] h-[50vh] w-full">
        {/**make sections with styled div*/}
      </div>
      <div className="bg-[#2c5d63] h-[20vh] w-full">
        {/**make sections with styled div*/}
      </div>
    </div>
  );
}

export default App;
