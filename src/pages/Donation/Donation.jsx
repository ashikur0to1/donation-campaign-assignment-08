import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {


    const [donation, setDonation] = useState([]);

    const [noDataFound, setNoDataFound] = useState("");

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {

        const donationItems = JSON.parse(localStorage.getItem("donation"));

        if(donationItems){
            setDonation(donationItems);
        }

        else{
            setNoDataFound("No Data Found");
        }

    }, [])

    console.log(donation);

    return (
        <div>
            {
                noDataFound ? <p className="h-[80vh] text-2xl font-bold flex justify-center items-center">{noDataFound}</p> 
                
                : <div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-20">
                        {
                            isShow 
                            ? donation.map((DonationCategory, idx) => <DonationCard key={idx} DonationCategory={DonationCategory}></DonationCard>) 
                            : donation.slice(0, 4).map((DonationCategory, idx) => <DonationCard key={idx} DonationCategory={DonationCategory}></DonationCard>)
                        }
                    </div>

                </div>
            }

            {
                donation.length > 4 && ((!isShow) && (<button onClick={() => setIsShow(!isShow)} className="w-[110px] h-[48px] text-[#FFF] text-base font-semibold rounded-lg bg-[#009444] block mx-auto mt-10">See All</button>))
            }

        </div>
    );
};

export default Donation;