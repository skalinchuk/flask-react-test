import get, {AxiosRequestConfig} from 'axios';

interface IApiQueryParameters extends AxiosRequestConfig {
    params: {
        name: string,
        page: number,
    }
}

const getCompanies = function(name: string, currentPage: number = 1): Promise<any> {
    const query: IApiQueryParameters = {params: {name: name, page: currentPage}};

    return get('/api/search', query);
}

export {getCompanies}
