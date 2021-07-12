import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Addcatergory from './component/AddCatergoryComponent';
import AddProduct from './component/AddProductComponent';
import catergories from './component/catoergory';
import Viewcatergories from './component/viewCatoryproducts';
import products from './component/products';
import Buy from './component/Buyproducts';
import Navbar from './component/navbar';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Router>
            <Navbar/>
            <Switch>

                <Route path="/" exact component={catergories}></Route>
                <Route path="/products" component={products}></Route>
                <Route path="/buy/:id" component={Buy}></Route>
                <Route path="/Addcatergory"  component={Addcatergory}></Route>
                <Route path="/AddProduct"  component={AddProduct}></Route>
                <Route path="/Viewcatergories/:id" component={Viewcatergories}></Route>

            </Switch>
        </Router>
    }

}
