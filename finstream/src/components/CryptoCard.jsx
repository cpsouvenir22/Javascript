

const CryptoCard = props => {
    const { symbol, name, price } = props;

    return(
        
        <div class="card-group d-inline-flex w-25 p-3 justify-content-around align-items-center m-5">
        <div class="card ">
            <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <p class="card-header">Symbol: {symbol}</p>
            <p class="card-header">Price(USD): {price}</p>
        </div>
        </div>
        </div>

        
        

    )

}
    
export default CryptoCard;