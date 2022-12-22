const React = require('react');
const DefaultLayout = require('./Default');

class Index extends React.Component{
    render(){
        const {films}=this.props;
        return(
            <DefaultLayout title={"Available Films for Sale !"}>
                {/* <link rel="stylesheet" type="text/css" href="../css/style.css"/> */}
                <div className="main">
                <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
                <div className="title">
                    <h1>"Available Films for Sale !"</h1>
                </div> 
                <ul><h2>
                    {films.map((film)=>{
                        return(
                        <li>
                            <a href={`/films/${film.id}`}>{film.name}</a> 
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
            </DefaultLayout>
        );
    }
}

module.exports = Index;