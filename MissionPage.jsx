//rahma mohamed


// We're beginning by importing necessary libraries, components, images, and videos
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";

const MissionPage = () => {

    // Kept these data variables separately for clean coding, and can be refactored to separate json file if they grow more
    const productData = {
      title: 'Helping millions',
      subTitle: 'schedule better',
      pragraph: 'From small businesses to Fortune 100 companies, millions of people around the world rely on Calendly to close deals, land candidates, build relationships, and grow their business—faster.',
      button:'Sign up',
    };
    const userData ={
      numUsers: 20,
      m: 'm',
      users: 'Users worldwide',
      numCompanies: 100,
      k: 'k',
      Companies: 'Companies use Calendly',
      numCountries: 230,
      plus: '+',
      Countries: 'Countries with monthly active users',
      numPartner: 100,
      Partners: 'Partner integrations'
    }
    const directorsData = {
      hedaer: 'Our founding team has decades of experience founding, building, and investing in SaaS companies. We used our deep expertise to create the SaaSGrid framework.',
      directorData: 'SaaSGrid is the productization of the SaaS operating framework David has spent years honing through his experience as a founder, operator, and investor. Read more about Davids thoughts on SaaS at including his piece on The SaaS Metrics that Matter a foundational article that articulates the pressing need for a SaaS-specific dashboarding and BI tool like SaaSGrid.',
      name: 'David Sacks',
      jobTitel: 'Co-Founder',
    }
    const about ={
      hed: 'Our ',
      det: 'What started as a simple, time-saving scheduling link has grown into an omni-channel scheduling platform for teams and businesses around the world. Our belief is that a scheduling automation platform should provide broad and deep support for various meeting scenarios — especially for teams that schedule meetings with external parties at scale.'
    }
    const mission = {
      tit: 'Calendly in the news',
      para: 'Get the latest Calendly news. Plus, a media kit and tools for journalists',
      bot: 'Explore the newsroom'
    }
  // Returned JSX code is cleaner and easier to read
  return (
    
     
     <>
        <FirstComponent {...productData} />
        <SecondComponent {...userData} />
        <ThirdComponent {...directorsData} />
        <FourthComponent {...about} />
        <FifthComponent {...mission} />
     </>
  )
};

export default MissionPage ;
