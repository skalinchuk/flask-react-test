import React from 'react';
import './App.css';
import FilterByName from "../FilterByName/FilterByName";
import {ICompany, IPagination} from "../../common/interfaces";
import {getCompanies} from "../../common/utils";
import CompanyCard from "../CompanyCard/CompanyCard";
import Pagination from "../Pagination/Pagination";

function App() {

    const [companies, setCompanies] = React.useState<Array<ICompany>>([]);
    const [searchName, setSearchName] = React.useState<string>("");
    const [pagination, setPagination] = React.useState<IPagination>({currentPage: 1, totalPages: 0});

    function handleNameChange(name: string): void {
        setSearchName(name);
        refreshList(name, pagination.currentPage);
    }

    function handlePageChange(newPage: number): void {
        setPagination({...pagination, currentPage: newPage});
        refreshList(searchName, newPage);
    }

    function refreshList(name: string = searchName, page: number = pagination.currentPage): void {
        getCompanies(name, page).then(
            (data) => {
                setCompanies(data.data.data);
                setPagination({currentPage: data.data.page, totalPages: data.data.total_pages});
            }
        )

    }

    return (
        <div className="app">
            <header className="header">
        <span className="header-text">
          Organisations Filter
        </span>
                <span className="clear-all">
          Clear All
        </span>
            </header>
            <FilterByName change={handleNameChange}/>
            {companies && companies.map((company, key) => {
                return <CompanyCard company={company} key={key}/>
            })}
            {pagination.totalPages > 0 && <Pagination pagination={pagination} change={handlePageChange}/>}
        </div>
    );
}

export default App;
