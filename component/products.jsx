import React, { Component } from 'react';
import sevices from '../services/SystemServices';

class products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }
    componentDidMount() {
        sevices.getProductsDetails().then(res => {
            this.setState({ products: res.data })
            console.log(this.state.products)
        })
    }
    NavigationPreloadManager(e, productid) {
        this.props.history.push('/buy/' + productid);
    }
    delete(e, productid) {
        sevices.deletePrductById(productid).then(res => {
            this.setState({ products: this.state.products.filter(products => products.id !== productid) });
        });
    }
    render() {
        return (
            <body>
                <div className="container-fluid mt-5">
                    <div data-testid="title" className="row text-center">
                        <h5>Products</h5>
                    </div>
                    <div className="row">
                        {
                            this.state.products.map(
                                products =>
                                    <div className="col-md-4">
                                        <div className="card mt-3 sellercard">
                                            <div className="text-center mt-3">
                                            <span>Product Code:<h5>{products.code}</h5></span>
                                            </div>
                                            <div className="text-center mt-3">
                                                <span>Product Code:<h5>{products.name}</h5></span>
                                            </div>
                                            <div className="text-center mt-3">
                                                <span>Product Name:<h5>{products.size}</h5></span>
                                            </div>
                                            <div className="text-center mt-3">
                                                <span>Product Amount:<h5>{products.amount}</h5></span>
                                            </div>
                                            <div className="text-center mt-3">
                                                <span>Product Price:<h5>{products.price}</h5></span>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                    <div className="p-3 text-center text-white mt-2 cursor">
                                                        <button className="btn btn-success btn-block" onClick={e => this.NavigationPreloadManager(e, products._id)}>Buy</button> <br />
                                                    </div>
                                                </div>
                                            </div>
                                            <form action="">
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                    <div className="p-3 text-center text-white mt-2 cursor">
                                                        <button className="btn btn-danger btn-block" onClick={e => this.delete(e, products._id)}>Delete</button> <br />
                                                    </div>
                                                </div>
                                                </div>
                                            </form>
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

export default products;