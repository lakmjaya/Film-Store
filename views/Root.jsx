const React = require('react');

class Rootpage extends React.Component{
    render(){
        return(
        <html>
            <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
            <head> 
                <title>Film DVD Store</title>
            </head>
            <body>
            <div className="main">
                <h1>Welcome to the Film DVD Store!</h1>
                Here you will find all the favorite Films you need! <br />
                Please click <a href="/films">here</a>  to see our selected DVDs and more. 
            </div>
            </body>
        </html>
        )
    }
}

module.exports = Rootpage;