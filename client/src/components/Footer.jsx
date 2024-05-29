
import { Link } from "react-router-dom";
import logo from "../image/Logo.png";

const Footer = () => {
  const LiCss =
    "font-normal lg:text-base md:text-base text-xs lg:pt-3 md:pt-3 pt-2 text-zinc-400 lg:tracking-wide tracking-wider md:tracking-wide  cursor-pointer";
  const titleCss =
    "font-extrabold lg:text-lg md:text-lg text-base text-gray-50 tracking-wide lg:pb-4 md:pb-4 pb-2";

  return (
    <div>
      <div className="flex justify-center items-start lg:px-12  md:px-12 px-4 lg:flex-row md:flex-row flex-row bg-purple-950 bg-opacity-80 lg:gap-10 md:gap-10 gap-16 lg:w-12/12 md:w-12/12 w-12/12 lg:py-16 md:py-16 py-10 pb-20 flex-wrap">
        <div className=" lg:w-3/12 w-4/12 md:w-3/12 ">
          <div className="flex justify-center items-center flex-col gap-2">
            <img alt="logo" className="lg:w-32 w-16 rounded-3xl md:w-28" src={logo}></img>
            <span className="font-extrabold lg:text-lg md:text-lg text-base text-gray-50 tracking-wide">
            AstroGPT
            </span>
            <div className="flex justify-evenly md:gap-4 gap-3 lg:gap-5 items-center flex-row">
              <Link
                target="_blank"
                to={"https://www.instagram.com/iam_satyamrandhawa/"}
              >
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-instagram-line"></i>
                </span>
              </Link>
              <Link target="_blank" to={"https://github.com/satyamkumar2692"}>
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-github-fill"></i>
                </span>
              </Link>
              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/satyamsatyam"}
              >
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-linkedin-box-fill"></i>
                </span>
              </Link>
              {/* <Link target="_blank" to={"https://twitter.com/VivekKhule"}>
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-twitter-x-fill"></i>
                </span>
              </Link> */}
            </div>
          </div>
        </div>

        <div className="lg:w-2/12 w-4/12 md:w-2/12">
          <span className={titleCss}>Shubh Muhurat 2024</span>
          <ul>
            <li className={LiCss}>Marriage Muhurat</li>
            <li className={LiCss}>Car/Bike Muhurat</li>
            <li className={LiCss}>Gold Buying Muhurat</li>
            <li className={LiCss}>Griha Pravesh Muhurat</li>
            <li className={LiCss}>NaamKaran Muhurat</li>
          </ul>
        </div>
        <div className="lg:w-2/12 w-4/12 md:w-2/12">
          <span className={titleCss}>Horoscope</span>
          <ul>
            <li className={LiCss}>Today's Horoscope</li>
            <li className={LiCss}>Today's Love Horoscope</li>
            <li className={LiCss}>Tomorrow's Horoscope</li>
            <li className={LiCss}>Weekly Horoscope</li>
            <li className={LiCss}>Monthly Horoscope</li>
          </ul>
        </div>
        
        <div className="lg:w-2/12 w-4/12 md:w-2/12 ">
          <span className={titleCss}>Corporate Info</span>
          <ul>
            <li className={LiCss}>About</li>
            <li className={LiCss}>Contact Us</li>
            <li className={LiCss}>Terms and Conditions</li>
            <li className={LiCss}>Privacy Policy</li>
            <li className={LiCss}>Disclaimer</li>
            <li className={LiCss}>Pricing Policy</li>
          </ul>
        </div>
      </div>
      <div className="bg-purple-950 bg-opacity-95 text-white text-center py-5">
        <span className="tracking-wide">
          © 2024 All Rights Reserved Astro Magic
        </span>
      </div>
    </div>
  );
};
export default Footer;
