const React = require('react');
const DefaultLayout = require('./Default');

class Edit extends React.Component{
    render(){
        return(
            <DefaultLayout title='Edit Film DVD Details'>
                <link rel="stylesheet" type="text/css" href="/css/style.css"/>
            <div className='main'>
               <form action={`/films/${this.props.item.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name='name' defaultValue={this.props.item.name}/> <br /><br />
                    Image: <input type="text" name='img' defaultValue={this.props.item.img}/><br /> <br />
                    Price: <input type="text" name='price' defaultValue={this.props.item.price}/>
                    <br />
                    <br />
                    Description: <textarea className="text-area" type="text" name='descripton' defaultValue={this.props.item.description}/> <br /> <br />
                    Quantity: <input type="number" name='quantity' defaultValue={this.props.item.quantity} min='0' max='100'/> <br /> <br />
                    
                    <input type="submit" className='submit-button' value='Submit Changes'/>
               </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;