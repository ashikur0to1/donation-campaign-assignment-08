import { useLoaderData } from "react-router-dom";
import DonationCategories from "../../components/DonationCategories/DonationCategories";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {

    const donationCategories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <DonationCategories donationCategories={donationCategories}></DonationCategories>
        </div>
    );
};

export default Home;