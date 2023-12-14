//rahma mohamed


import fristImage from '../assets/images/R.jpeg';
import secondImage from '../assets/images/Mark_Walz_Avatar.png';

// Third Component directorsData
const ThirdComponent = ({hedaer,directorData,name,jobTitel}) => (  
    // Main container: using template literal for dynamic styling
    <section className="therid xl:w-full lg:w-full md:w-[768px]  sm:w-full bg-slate-100">
    {/* Text Content container */}
    <p className=' md:text-[20px] md:mb-[20px] md:p-4 sm:text-[15px] sm:mb-[12px] sm:p-2 font-bold text-[40px] text-center mb-[40px] '> {hedaer} <span className=' text-blue-700'></span> </p>
    <div className="images sm:grid md:flex flex justify-center gap-[25px]">
        <div className="container md:w-[40%] w-[450px] relative bg-white p-[15px] rounded-[15px] ">
            <img className=' grayscale rounded-[10px] w-[450px] h-[500px]  object-cover block ' src={fristImage} alt="Description" />
            <div className="overlay  ">
                <div className="text w-[80%] text-white text-[20px] absolute overflow-hidden top-[50%] left-[50%] "> {directorData} </div>
              </div>
            <h1 className=' text-center text-2xl'> {name} </h1>
            <p className=' text-center text-[20px] text-blue-700'> {jobTitel} </p>
        </div >
        <div className="container md:w-[40%] w-[450px] relative bg-white p-[15px] rounded-[15px]"> 
            <img className=' grayscale rounded-[10px] w-[450px] h-[500px] object-cover block ' src={secondImage} alt="Description" />
            <div className="overlay">
            <div className="text w-[80%] text-white text-[20px] absolute overflow-hidden top-[50%] left-[50%] "> {directorData} </div>
              </div>
            <h1 className=' text-center text-2xl'> {name} </h1>
            <p className=' text-center text-[20px] text-blue-700'> {jobTitel} </p>
        </div>
        
        
    </div>
</section>
)

export default ThirdComponent;
