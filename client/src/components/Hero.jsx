// import { useDispatch, useSelector } from "react-redux";
import Explore from "./Explore";
import { useEffect, useState } from "react";
import TopAstro from "./TopAstro";
// import SignSearch from "./SignSearch";
// import Chatbot from "./Chatbot";
import bg from "../image/bg1.jpg";
import Why from "./Why";
// import Coming from "./Coming";
import logo from "../image/Logo.png"
// import { addBot } from "../store/configAppSlice";
import React, { useRef } from 'react';
const Hero = () => {
  const [topAstro, settopAstro] = useState();
  // const dispatch = useDispatch()

  // const Bot = useSelector((store) => store.configApp.Bot);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{  
      const data = await fetch(
      "https://api.consultant.list.astrotalk.com/AstroTalk/freeAPI/consultant/get-list/filter?appId=4&businessId=1&consultantTypeId=1&timezone=Asia/Kolkata&pageNo=0&pageSize=18&version=1.19.09.23&serviceId=4&languageId=1&hardwareId=&countryCode=&sortByRating=false&sortByExperience=false&sortByPrice=false&sortByOrder=false&isDesc=false&isPoAstrologer=true&userId=34925941"
    );
    const jsonn = await data.json();
    settopAstro(jsonn?.content);
    console.log(jsonn.content);}
    catch (e){
      console.log("there is something wrong brdr");
    }
  };
  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const handleBot = ()=>{
  //   dispatch(addBot())
  // }

  return (
    <div className="w-12/12  relative lg:px-0 2xl:px-44">
      <img
        alt="bg"
        className="h-screen brightness-75 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
        src={bg}
      ></img>
      {/* {Bot && <Chatbot />} */}
      <Explore handleScroll={handleScroll}/>
      <TopAstro list={topAstro} />
      <Why reff={targetRef}/>

      {/* <SignSearch />
      <div className=" lg:bottom-5 2xl:bottom-6 hidden md:block fixed 2xl:right-4 lg:right-7">
        <img src={logo} alt="logo" className="w-24 cursor-pointer" onClick={handleBot}></img>
  </div> */}
    </div>
  );
};
export default Hero;
