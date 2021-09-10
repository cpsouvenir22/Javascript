

const FinanceCard = props => {
    const { headline, url } = props;

    return(

        <div className="d-inline-flex w-25 p-3 justify-content-around align-content-center m-5 card mb-5">
            <div className="card-body">
                <h4 className="card-title">{headline}</h4>
                <a href= {url}>Read</a>
            </div>
            
        </div>
        

    )

}
    
export default FinanceCard;