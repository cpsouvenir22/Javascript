import { useState,useEffect } from "react/cjs/react.development";
import Axios from 'axios';
import {Link} from '@reach/router';
import CryptoCard from "../components/CryptoCard";
require ('dotenv').config();

const Crypto = props => {
    const [crypto, setCrypto] = useState ([]);

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        headers:   {***************************************}
        };
    useEffect(() => {
        
            Axios.request(options)
                .then (res => setCrypto(res.data.data.coins))
                .catch(err => console.log(err))
        }
    ,[]);

    
    return(
        
        <div>
        <h1 className= "text-white"> Cryptocurrencies </h1>
        
                {
                crypto.map((c,i) => {
                    return <CryptoCard
                                key = {i}
                                name = {c.name}
                                symbol = {c.symbol}
                                price = {c.price}
                            />
                            
                })
            }

    </div>

    )
}

export default Crypto;
