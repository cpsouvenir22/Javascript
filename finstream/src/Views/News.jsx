import {useState, useEffect} from 'react';
import Axios from 'axios';
import Link from '@reach/router';
import FinanceCard from '../components/FinanceCard.jsx';

console.log (process.env.REACT_APP_CNBC_API_KEY);
const API_KEY = process.env.REACT_APP_CNBC_API_KEY;

const News = props => {

    const[articles, SetArticles]= useState([]);

    // const [toggle, setToggle]= useState (false);

    const options = {
        method: 'GET',
        url: 'https://cnbc.p.rapidapi.com/news/v2/list-trending',
        params: {tag: 'Articles', count: '15'},
        headers: {'x-rapidapi-host': 'cnbc.p.rapidapi.com',
        'x-rapidapi-key': '39d86d9d0amshb4767653d314d44p196fb5jsnb3ef8ccad018' } 
        };

    useEffect(() => {
        
            Axios.request(options)
                .then (res => SetArticles(res.data.data.mostPopularEntries.assets))
                .catch(err => console.log(err))
        }
        ,[]);

    return (
        <div>
            <h1 className= "text-warning p-3"> Today's News </h1>
            
            {
                    articles.map((a,i) => {
                        return <FinanceCard
                                    key = {i}
                                    headline= {a.headline}
                                    url = {a.url}
                                    

                            

                    />
                    
                    })
                }
            
        </div>

        
    );
}

export default News;