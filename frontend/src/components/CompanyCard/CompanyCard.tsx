import React from 'react';
import './CompanyCard.css';
import {ICompany} from "../../common/interfaces";
import SolidarityIcon from "./solidarity-icon.png";
import {ReactComponent as LocationPin} from "./location.svg";

interface ICompanyCardProps {
    company: ICompany
}

const CompanyCard: React.FC<ICompanyCardProps> = ({company}) => {

    function getFormattedCityName(name: string): string {
        return name[0].toUpperCase() + name.substring(1).toLowerCase()
    }

    return (
        <div className="company-card">
            <img className="company-icon" src={SolidarityIcon} alt="Company Icon"/>
            <div className="company-text">
                <div className="company-name">
                    {company.name}
                </div>
                <div className="company-location">
                    <LocationPin
                        className="location-pin"/>{getFormattedCityName(company.city)}, {company.state.toUpperCase()}, {company.country_code.toUpperCase()}
                </div>
            </div>
        </div>
    );
}

export default CompanyCard;
