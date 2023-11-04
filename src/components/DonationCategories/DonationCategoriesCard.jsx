import { Link } from "react-router-dom";
const DonationCategoriesCard = ({donationCategory}) => {

    const {id, picture, title, category, category_bg, card_bg, text_button_bg, description, price} = donationCategory || {}

    return (
        <div>
            <Link to={`/donationCategory/${id}`}>
                <div className="w-[315px] my-5 rounded-lg">
                    <figure><img className="w-full" src={picture} alt="Donation Category Picture" /></figure>
                    <div className="card-body rounded-b-lg" style={{backgroundColor:card_bg}}>
                        <h3 className="card-title text-sm font-medium"><span className="px-[10px] py-1 rounded" style={{backgroundColor:category_bg, color:text_button_bg}}>{category}</span></h3>
                        <h1 className="text-xl font-semibold" style={{color:text_button_bg}}>{title}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCategoriesCard;