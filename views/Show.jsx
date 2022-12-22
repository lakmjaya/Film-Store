const React = require('react');
const DefaultLayout = require('./Default');

class Show extends React.Component{
    render(){
        const {films} = this.props;
        const showBuyBtn =()=>{
            if(films.quantity>0){
               return( <form action={`/films/${films.id}?_method=PUT`} method="POST">
                     <input className="submit-button" type="submit" name="quantity" value="BUY" /> <br />
                  <br />
                  </form>
                  );  
            }
            else{
                return(<div>Out Of Stock</div>);
            }
            
        } 
        return(
            <DefaultLayout> 
                <link rel="stylesheet" type="text/css" href="../styles/new.css"/> */}
                <div className="main">
                <div>
                <h2>
                {films.name}
                </h2> 
                </div>  
                <div><img src={films.img} width='40%' alt={films.name}/></div>
                <div>Description: {films.description} </div><br />
                </div>
                
                <div className='flex-container'>
                <div>
                <nav>
                <a href="/films"><input className="submit-button" type="button" value={`Return to Films`}/></a>
                <a href={`/films/${films._id}/Edit`}><input className="submit-button" type="button" value="Edit"/></a>
                </nav>
                </div>
                
                <div>
                Price : ${films.price} <br /> 
                Quantity: {films.quantity}
                </div>
                <div></div>
                
                <div> 
                {showBuyBtn()}
                </div>
                <div>
                <form action={`/films/${films._id}?_method=DELETE`} method="POST">
                <input className="submit-button" type="submit" value="Delete"/>        
                <br /><br />
                </form>
                </div>
                </div> 
           
            </DefaultLayout>
        );
    }
}

module.exports = Show;