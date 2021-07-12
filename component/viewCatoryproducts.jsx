import React, { Component } from 'react';
import sevices from '../services/SystemServices';

class viewCatoryproducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            products: []
        }
    }
    componentDidMount() {
        sevices.getCatergoryusingpCatergorynid(this.state.id).then(res => {
            this.setState({ products: res.data.products });
            console.log(this.state.products)
        })
        console.log(this.state.id)
    }
    NavigationPreloadManager(e, productid) {
        this.props.history.push('/buy/' + productid);
    }
    render() {
        return (
            <body>
                <div className="container-fluid mt-5">
                    <div className="row text-center">
                        <h5>Products</h5>
                    </div>
                    <div className="row">
                        {
                            this.state.products.map(
                                products =>
                                    <div className="col-md-4">
                                        <div className="card mt-3 sellercard">
                                            <div className="product text-center mt-3">
                                                <span>Product Code:<h5>{products.code}</h5></span>
                                            </div>
                                            <div className="product text-center mt-3">
                                                <span>Product Code:<h5>{products.name}</h5></span>
                                            </div>
                                            <div className="product text-center mt-3">
                                                <span>Product Name:<h5>{products.size}</h5></span>
                                            </div>
                                            <div className="product text-center mt-3">
                                                <span>Product Amount:<h5>{products.amount}</h5></span>
                                            </div>
                                            <div className="product text-center mt-3">
                                                <span>Product Price:<h5>{products.price}</h5></span>
                                            </div>
                                            
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                    <div className="p-3 text-center text-white mt-2 cursor">
                                                        <button className="btn btn-success btn-block" onClick={e => this.NavigationPreloadManager(e, products._id)}>Buy</button> <br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </body>
        );
    }
}

export default viewCatoryproducts;