
const DonationCard = ({ DonationCategory }) => {

    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price} = DonationCategory || {}

    return (
        <div>
            <div className="grid md:flex">
                <img className="w-full md:w-[220px] h-[200px]" src={picture} alt="Donation Category Picture" />
                <div className="h-[200px] md:w-[428px] md:h-[200px] pt-7 pl-6" style={{ backgroundColor: card_bg }}>
                    <h3 className="card-title text-sm font-medium"><span className="px-[10px] py-1 rounded" style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</span></h3>
                    <h1 className="text-xl font-semibold mt-2 mb-1" style={{ color: text_button_bg }}>{title}</h1>
                    <h2 className="text-base font-semibold" style={{color: text_button_bg}}>${price}</h2>
                    <button className="px-4 py-[9px] text-[#FFF] text-lg font-semibold rounded mt-2" style={{ backgroundColor: text_button_bg }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;