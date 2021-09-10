import React, {Component} from 'react';

class PropCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

        ageUp(){
            this.setState(
                {age:this.state.age+1}
                );
        }
    
    

    render () {
        
            const {firstName, lastName, hairColor,img} = this.props;
            return(
                <div className="card col-6 text-center m-4 p-2 d-flex flex-wrap justify-content-center align-items-center ">
                    <div className="card-body col-4 text-center ">
                        <img src={img} alt={firstName} className= "card-img-top"/>
                        <h3 className= "card-title">
                            Name: {lastName}, {firstName} 
                        </h3>
                        <p className= "card-text"> Age: {this.state.age} </p>
                        <p className= "card-text"> Hair: {hairColor}</p>
                        <button onClick={ ()=>this.ageUp() }>Age Me</button>
                    </div>
                </div>
            );
    
        } 
    }

    
    
export default PropCard;