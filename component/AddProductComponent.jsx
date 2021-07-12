import React, { Component } from 'react';
import sevices from '../services/SystemServices';
import Select from 'react-select';

class AddProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code: '',
            name: '',
            size: '',
            amount: '',
            price: '',
            category: [],
            options: [],
            selecteCatergory: []

        }

        this.changcodedHandler = this.changcodedHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changensizeHandler = this.changensizeHandler.bind(this);
        this.changeamountHandler = this.changeamountHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.changecatergoryHandler = this.changecatergoryHandler.bind(this);
    }
    changcodedHandler = (event) => {
        this.setState({ code: event.target.value });
    }
    changenameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changensizeHandler = (event) => {
        this.setState({ size: event.target.value });
    }
    changeamountHandler = (event) => {
        this.setState({ amount: event.target.value });
    }
    changepriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }
    changecatergoryHandler = (e) => {
        this.setState({ selecteCatergory: e ? e.map(item => item.value) : [] });
    }
    componentDidMount() {
        sevices.getCatergoryDetails().then(res => {
            this.setState({ category: res.data }, () => {
                let data = [];
                this.state.category.map((item, index) => {
                    let catergory = {
                        value: item._id,
                        label: item.name
                    }
                    data.push(catergory)
                });
                this.setState({ options: data });
            });
        });
    }
    addproduct = (e) => {
        e.preventDefault();
        let product = {
            code: this.state.code,
            name: this.state.name,
            size: this.state.size,
            amount: this.state.amount,
            price: this.state.price,
            categories: this.state.selecteCatergory
        };
        console.log('product => ' + JSON.stringify(product));

        sevices.addproducts(product).then(res => {
            console.log('success')
            this.props.history.push('/');
        })

    }
    render() {
        return (
            <body>
                <div className="container">
                    <div data-testid="title" className="row text-center">
                        <h5>Create Products</h5>
                    </div>
                    <form className="form-container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-5">
                                <div className="form-group names">
                                    <h5>Code</h5>
                                    <input placeholder="P00" name="code" className="form-control"
                                        value={this.state.code} onChange={this.changcodedHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-4">
                                <div className="form-group names">
                                    <h5>Name</h5>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changenameHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-4">
                                <div className="form-group names">
                                    <h5>Amount</h5>
                                    <input type="number" placeholder="amount" name="amount" className="form-control"
                                        value={this.state.amount} onChange={this.changeamountHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-4">
                                <div className="form-group names">
                                    <h5>Size</h5>
                                    <input type="number" placeholder="size" name="size" className="form-control"
                                        value={this.state.size} onChange={this.changensizeHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-4">
                                <div className="form-group names">
                                    <h5>Price</h5>
                                    <input type="number" placeholder="price" name="price" className="form-control"
                                        value={this.state.price} onChange={this.changepriceHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-4">
                                <div className="form-group names">
                                    <h5>Categories</h5>
                                    <Select
                                        options={this.state.options}
                                        onChange={this.changecatergoryHandler}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">

                            <div className="col-md-3 mt-4 mb-5">
                                <button className="btn btn-success btn-block" onClick={this.addproduct}>Add Product</button>
                            </div>

                            <div className="col-md-3 mt-4 mb-5 ">
                                <button className="btn btn-danger btn-block" onClick={this.cancle}>cancle</button>
                            </div>

                        </div>
                    </form>
                </div>
            </body>
        );
    }
}

export default AddProductComponent;