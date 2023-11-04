import DonationCategoriesCard from "./DonationCategoriesCard";

const DonationCategories = ({donationCategories}) => {
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[100px] mb-[182px]">
                {
                    donationCategories?.map((donationCategory, idx) => <DonationCategoriesCard key={idx} donationCategory={donationCategory}></DonationCategoriesCard>)
                }
            </div>
        </div>
    );
};

export default DonationCategories;