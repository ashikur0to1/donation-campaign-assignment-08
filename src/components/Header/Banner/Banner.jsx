
// import banner from "../../../assets/Rectangle-4281.png";

import bannerImage from "../../../assets/Rectangle-4281.png"

const Banner = () => {
    return (
        <div className="w-full h-[600px] relative" style={{backgroundImage: `url(${bannerImage})`}}>
            <div className="w-full h-[600px] absolute bg-[#fffffff2]">
                <h1 className="text-[#0B0B0B] font-bold text-5xl text-center mb-14 pt-[200px]">I Grow By Helping People In Need</h1>
                <div className="flex justify-center">
                    <input className="w-[470px] h-[50px] border border-solid border-l-1 border-t-1 border-b-1 border-[#DEDEDE] bg-[#FFF] text-[#0b0b0b66] pl-4 rounded-l-lg" type="text" placeholder="Search here...." />
                    <button className="text-base font-semibold text-[#FFF] bg-[#FF444A] px-7 h-[50px] rounded-r-lg">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;