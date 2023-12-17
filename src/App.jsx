import { useState } from "react"
import datas from "./data"
function App() {
 const [showCar,setShowCar]=useState(datas)
const [task,setTask]=useState([])
  const handleCar=(name)=>{
    // console.log(name);
   const filterdata= showCar.filter((item)=>{
      return item.colour==name
    })
    setTask(filterdata)
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
    {
      showCar.map((item,index)=>{
        const {img,price}=item
       return <div key={index} className="w-[300px] my-4">
        <img src={img} alt={img} className=" w-full h-[200px]"/>
        <div className=" flex justify-between">
        {/* <p>Colour: {colour}</p> */}
        <p>Price:{price}</p>
        </div>
           </div>       })
    }
 
      </div>
    
      </section>     
    </>
  )
}

export default App
