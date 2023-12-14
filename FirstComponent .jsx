//rahma mohamed



// First Component Company data
const FirstComponent = ({title,subTitle,pragraph,button}) => (
      // Main container: using template literal for dynamic styling
      <section className="first xl:w-full lg:w-full md:w-[768px] sm:w-full p-[2rem] bg-slate-100">
        {/* Text Content container */}
        <h1 className=" md:w-[400px] md:p-[15px] md:text-[30px] sm:w-[300px] sm:p-[10px] sm:text-[20px] w-[800px] m-auto p-[30px] font-bold text-center text-[60px] text-blue-700 "> {title}<span className=" text-blue-900">{subTitle}</span> </h1>
        <p className="sm:w-[300px] sm:text-[16px] w-[550px] m-auto text-[20px] text-blue-800 ">{pragraph}</p>
        <button className=" m-auto text-center flex mt-[20px] p-[10px] rounded-[5px] bg-blue-700 text-white ">{button}</button>
      </section>

    
  );


export default FirstComponent;
