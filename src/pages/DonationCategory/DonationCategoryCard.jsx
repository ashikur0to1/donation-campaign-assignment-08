import swal from "sweetalert";

const DonationCategoryCard = ({DonationCategory}) => {

    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price} = DonationCategory || {}

    const handleAddToDonation = () =>{
        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem("donation"));

        if(!donationItems){
            addedDonationArray.push(DonationCategory);
            localStorage.setItem("donation", JSON.stringify(addedDonationArray));
            swal("Good job!", "You donated successfully!", "success");
        }

        else{

            const isExist = donationItems.find(DonationCategory => DonationCategory.id === id);

            if(!isExist){
                addedDonationArray.push(...donationItems, DonationCategory);
                localStorage.setItem("donation", JSON.stringify(addedDonationArray));
                swal("Good job!", "You donated successfully!", "success");
            }

            else{
                swal("Error!", "You already donated to this category!", "error");
            }
            
        }
    }

    return (
        <div>
            <div className="relative">
                <img className="w-full h-[700px] mt-12" src={picture} alt="" />
                <div className="w-full h-[130px] absolute bg-[#0b0b0b80] mt-[-130px] flex items-center">
                    <button onClick={handleAddToDonation} className="px-[26px] py-4 rounded text-xl font-semibold text-[#FFF] ml-[37px]" style={{backgroundColor:text_button_bg}}>Donate ${price}</button>
                </div>
            </div>
            
            <h1 className="text-[40px] font-bold mt-14 mb-6 text-[#0B0B0B]">{title}</h1>
            <p className="text-[16px] font-normal text-[#0b0b0bb3] mb-[122px]">{description}</p>
        </div>
    );
};

export default DonationCategoryCard;