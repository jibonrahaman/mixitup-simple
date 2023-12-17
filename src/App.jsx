import { useState } from "react"
import b1 from "./assets/b1.jpg"
import datas from "./data"
function App() {
 const [showCar,setshowCar]=useState([datas])

  const handleCar=(name)=>{
    console.log(name);
  }
  return (
    <>
     <section>
      <div className=" flex justify-center gap-x-24 mt-16">
       <h2 className="bg-red-500 px-6 rounded-lg py-1 text-white hover:bg-red-700 duration-500" onClick={()=>handleCar("Red")}>Red</h2>
       <h2 className="bg-black px-6 rounded-lg py-1 text-white hover:bg-[#434141] duration-500" onClick={()=>handleCar("Black")}>Black</h2>
       <h2 className="bg-blue-500 px-6 rounded-lg py-1 text-white hover:bg-blue-700 duration-500" onClick={()=>handleCar("Blue")}>Blue</h2>
       <h2 className="bg-yellow-500 px-6 rounded-lg py-1 text-white hover:bg-yellow-700 duration-500" onClick={()=>handleCar("Yellow")}>Yellow</h2>
      </div>

     <div className=" flex flex-wrap gap-x-9 ml-20 mt-8">
     <div className="w-[300px] my-4">
   <img src={b1} alt={b1} className=""/>
   <div className=" flex justify-between">
   <p>Colour: Blue</p>
   <p>Price:2Core</p>
   </div>
      </div> 
 
      </div>
    
      </section>     
    </>
  )
}

export default App
