const React = require('react');

class New extends React.Component{
    render(){
        return(
            <div className="main">
            <body>
            <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
                <div className="title">
                    <h1>Add New Film DVD Page</h1>
                </div> 
                <form action="/films" method='POST'>
                    <fieldset className="fieldset-container">
                    <div className="input-container">
                    <div className="cont-1">
                    Name:  <input className="input" placeholder="Name" type="text" name="name"/> <br /> <br />
                    <div>
                    Image URL: <input className="input" placeholder="URL" type="text" name='img'/> <br /> <br />
                    </div>
                    </div>
                    <div  className="cont-3" >
                    Price: <input className="number" type="text" placeholder="Price" name='price'/> <br /> <br />
                    </div>
                    Description: <textarea className="text-area" rows="7" cols="50"  placeholder="Description"  type='text' name='description'/> <br /> <br />
                    Quantity: <input className="number" type="number" placeholder="Quantity" name='quantity' min='0' max='100'/><br />
                    </div>
                    <div className="submit-container">
                    <input type="submit" className="submit-button" name='' value="Add Film"/>
                    </div>
                    </fieldset>
                </form>
                <div className="nav-container">
                <a href='/films'>Film List</a>  <a href='/'> Home </a>
                </div>
            </body>
            </div>
        );
    }
}

module.exports = New;