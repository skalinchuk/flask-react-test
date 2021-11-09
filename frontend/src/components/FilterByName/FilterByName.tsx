import React from 'react';
import './FilterByName.css';
import {ReactComponent as SearchIcon} from './search-icon.svg';

interface IFilterProps {
    change: (event: any) => void
}

const FilterByName: React.FC<IFilterProps> = ({change}) => {
    function handleChange(event: React.FormEvent<HTMLInputElement>): void {
        change(event.currentTarget.value);
    }

    return (
        <div className="filter-box">
            <div className="filter-header">
                Organisations Name Filter
            </div>
            <div className="search-wrapper">
                <SearchIcon className="search-icon"/>
                <input className="search-input" placeholder="Search by name" onInput={handleChange}/>
            </div>
        </div>
    );
}

export default FilterByName;
