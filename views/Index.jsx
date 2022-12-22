const React = require('react');
const DefaultLayout = require('./Default');

class Index extends React.Component{
    render(){
        const {films}=this.props;
        return(
            <div>
                <div className="main">
                <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
                <div className="title">
                    <h1>"Available Films for Sale !"</h1>
                </div> 
                <ul><h2>
                    {films.map((film)=>{
                        return(
                        <li>
                            <nav>
                                <div>
                                    <a href={`/films/${film.id}`}>{film.name}</a>
                                </div>
                                <div className='flex-container'>
                                <div>
                                    <img src={film.img} width='40%' alt={film.name}/>
                                </div>
                                <div>
                                    <h3>
                                    Price : ${film.price} 
                                    </h3>
                                </div>
                                </div>
                                
                            </nav> 
                             <br /><br />
                        </li>
                        );
                    })}
                    </h2>
                </ul> 
                <nav>
                    <a href="/films/new"> Add a new Film</a> | 
                    <a href="/"> Home</a>
                </nav>
                </div> 
            </div>
        );
    }
}

module.exports = Index;