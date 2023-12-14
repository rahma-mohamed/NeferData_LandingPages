//rahma mohamed


import thirdImage from '../assets/images/images (4).jpeg'
// Fourth Component aboutData
const FourthComponent = ({hed,det}) => (     // Main container: using template literal for dynamic styling
 
            <section className="forth xl:w-full lg:w-full md:w-[768px]  sm:w-full  sm:justify-center bg-slate-100 p-[2rem] flex justify-center ">
               {/* Text Content container */}
            <img className=' md:object-cover  sm:object-cover sm:h-[200px] sm:text-center  md:w-[40%] w-auto rounded-[10px] ' src={thirdImage} alt="Description" />
                <div className=' md:w-[40%] w-[50%] sm:text-center text-center p-[2rem] '>
                    <h1 className='sm:text-[20px] md:text-center text-[40px] text-blue-900 '> {hed} <span className=' text-blue-700'> Mission</span></h1>
                    <p className=' sm:w-[200px] sm:text-[14px] md:text-center sm:text-center text-[20px] text-blue-800 leading-[25px] '> {det} </p>
                </div>
            </section>)

export default FourthComponent;
