// rahma mohamed


// Second Component userData
const SecondComponent = ({numUsers,m,users,numCompanies,k,Companies,numCountries,plus,Countries,numPartner,Partners}) => (
           // Main container: using template
    <section className="secned xl:w-full lg:w-full md:w-[768px]  sm:w-full p-[2rem] flex justify-center bg-white ">
            {/* Text Content container */}    
    <div className="usres md:p-[8px] sm:p-[5px] p-[15px] border-solid border-r-2 border-indigo-600   ">
                    <h1 className=" md:p-[15px] md:text-[30px] sm:p-[8px] sm:text-[15px] p-[30px] font-bold text-[60px] text-center text-blue-700 "> {numUsers} <span className=" text-blue-950"> {m} </span> </h1>
                    <p className=" md:text-[14px] md:p-[15px] sm:text-[10px] sm:p-[8px] text-[20px] text-blue-900 p-[30px] m-auto text-center "> {users} </p>
                </div>
                <div className="usres  md:p-[8px] sm:p-[5px] p-[15px] border-solid border-r-2 border-indigo-600 ">
                    <h1  className=" md:p-[15px] md:text-[30px] sm:p-[8px] sm:text-[15px] p-[30px] font-bold text-[60px] text-center text-blue-700 "> {numCompanies} <span className=" text-blue-950"> {k} </span></h1>
                    <p className=" md:text-[14px] md:p-[15px] sm:text-[10px] sm:p-[8px] text-[20px] text-blue-900 p-[30px] m-auto text-center "> {numCompanies} </p>
                </div>
                <div className="usres  md:p-[8px] sm:p-[5px] p-[15px] border-solid border-r-2 border-indigo-600 ">
                    <h1  className=" md:p-[15px] md:text-[30px] sm:p-[8px] sm:text-[15px] p-[30px] font-bold text-[60px] text-center text-blue-700 "> {numCountries} <span className=" text-blue-950"> {plus} </span></h1>
                    <p className=" md:text-[14px] md:p-[15px] sm:text-[10px] sm:p-[8px] text-[20px] text-blue-900 p-[30px] m-auto text-center "> {Countries} </p>
                </div>
                <div className="usress  md:p-[8px] sm:p-[5px] p-[15px]  ">
                    <h1  className="md:p-[15px] md:text-[30px] sm:p-[8px] sm:text-[15px] p-[30px] font-bold text-[60px] text-center text-blue-700 "> {numPartner} <span className=" text-blue-950"> {plus} </span></h1>
                    <p className="md:text-[14px] md:p-[15px] sm:text-[10px] sm:p-[8px] text-[20px] text-blue-900 p-[30px] m-auto text-center "> {Partners} </p>
                </div>
            </section>
            );
    
    
export default SecondComponent;
