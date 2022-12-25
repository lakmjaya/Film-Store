const React = require('react');


class Index extends React.Component{
    render(){
        const {films}=this.props;
        return(
            <div>
                <div className="main">
                <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
                <div className="title">
                    <h1>"Available DVD Films for Sale !"</h1>
                </div> 
                <ul>
                    {films.map((film)=>{
                        return(
                        <li>
                            <nav>
                                <div>
                                    <h2>
                                    <a href={`/films/${film.id}`}>{film.name}</a>
                                    </h2>
                                </div>
                                <div className='flex-container'>
                                <div>
                                <a href={`/films/${film.id}`}><img src={film.img} width='40%' alt={film.name}/></a>
                                </div>
                                <div>
                                    <h2>
                                    Price : ${film.price} 
                                    </h2>
                                </div>
                                </div>
                                
                            </nav> 
                             <br /><br />
                        </li>
                        );
                    })}
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