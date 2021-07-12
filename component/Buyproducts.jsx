import React, { Component } from 'react';
import sevices from '../services/SystemServices';

class Buyproducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            price: '',
            amount: '',
            products: [],
            total: ''
        }
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.changepamountHandler = this.changepamountHandler.bind(this);
    }
    changepriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }
    changepamountHandler = (event) => {
        this.setState({ amount: event.target.value });
    }
    componentDidMount() {
        sevices.getProductusingproductnid(this.state.id).then(res => {
            this.setState({ products: res.data });
            console.log(this.state.products.price)
        })
        console.log(this.state.id)
    }
    render() {
        return (
            <body>
                <div className="container">
                    <div className="row text-center mt-2">
                        <h5>Calculate Amount</h5>
                    </div>
                    <form className="form-container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-5">
                                <div className="form-group names">
                                    <h5>Name</h5>
                                    <input placeholder="Catergory-Type" name="type" className="form-control"
                                        value={this.state.products.name} onChange={this.changepriceHandler} disabled />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-5">
                                <div className="form-group names">
                                    <h5>Price</h5>
                                    <input placeholder="Catergory-Type" name="type" className="form-control"
                                        value={this.state.products.price} onChange={this.changepriceHandler} disabled />
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-5">
                                <div className="form-group names">
                                    <h5>Amount</h5>
                                    <input placeholder="Amount" name="amount" className="form-control"
                                        value={this.state.amount} onChange={this.changepamountHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-5">
                                <div className="form-group names">
                                    <h5>Total Price</h5>
                                    <input placeholder="Total Price" name="type" className="form-control"
                                        value={this.state.products.price * this.state.amount} onChange={this.changetypeHandler} disabled />
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </body>
        );
    }
}

export default Buyproducts;