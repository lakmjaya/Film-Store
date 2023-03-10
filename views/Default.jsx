const React = require('react');

class DefaultLayout extends React.Component{
    render(){
        return(
            <html>
                <link rel="stylesheet" type="text/css" href="../css/style.css"/>
                <head>
                    <title><h1>{this.props.title}</h1></title>
                </head>               
                <body>               
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>       
            </html>
        );
    };
};

module.exports = DefaultLayout;