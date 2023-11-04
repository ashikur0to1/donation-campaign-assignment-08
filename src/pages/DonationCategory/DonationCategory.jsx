import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCategoryCard from "./DonationCategoryCard";

const DonationCategory = () => {

    const [DonationCategory, setDonationCategory] = useState({})

    const {id} = useParams();

    const DonationCategories = useLoaderData();

    useEffect(() => {

        const findDonationCategory = DonationCategories?.find(DonationCategory => DonationCategory.id === id);

        setDonationCategory(findDonationCategory);

    },[id, DonationCategories])

    console.log(DonationCategory);

    return (
        <div>
            <DonationCategoryCard DonationCategory={DonationCategory}></DonationCategoryCard>
        </div>
    );
};

export default DonationCategory;