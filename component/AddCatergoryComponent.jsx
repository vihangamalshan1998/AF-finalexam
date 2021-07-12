import React, { Component } from 'react';
import sevices from '../services/SystemServices';
import Select from 'react-select';

class AddCatergoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            name: '',
            Description: '',
            selectedproducts: [],
            products: [],
            options: []
        }

        this.changenameHandler = this.changenameHandler.bind(this);
        this.changedescriptionHandler = this.changedescriptionHandler.bind(this);
        this.changeproductHandler = this.changeproductHandler.bind(this);
    }
    changenameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changedescriptionHandler = (event) => {
        this.setState({ Description: event.target.value });
    }
    changeproductHandler = (e) => {
        this.setState({ selectedproducts: e ? e.map(item => item.value) : [] });
    }
    componentDidMount() {
        sevices.getProductsDetails().then(res => {
            this.setState({ products: res.data }, () => {
                let data = [];
                this.state.products.map((item, index) => {
                    let product = {
                        value: item._id,
                        label: item.name
                    }
                    data.push(product)
                });
                this.setState({ options: data });
            });
        });
    }
    addcatergory = (e) => {

        e.preventDefault();
        let catergory = {
            name: this.state.name,
            Description: this.state.Description,
            products: this.state.selectedproducts
        };
        console.log('catergory => ' + JSON.stringify(catergory));

        sevices.addcatergories(catergory).then(res => {
            console.log('success')
            this.props.history.push('/');
        })

    }
    render() {
        return (
            <body>
                <div className="container">
                    <div data-testid="title" className="row text-center">
                        <h5>Create Catergories</h5>
                    </div>
                    <form className="form-container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-5">
                                <div className="form-group names">
                                    <h5>Name</h5>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.type} onChange={this.changenameHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-4">
                                <div className="form-group names">
                                    <h5>Description</h5>
                                    <input placeholder="Description" name="Description" className="form-control"
                                        value={this.state.Description} onChange={this.changedescriptionHandler} />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-4">
                                <div className="form-group names">
                                    <h5>Products</h5>
                                    <Select
                                        options={this.state.options}
                                        onChange={this.changeproductHandler}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="row justify-content-center">

                            <div className="col-md-3 mt-4 mb-5">
                                <button className="btn btn-success btn-block" onClick={this.addcatergory}>Add Catergories</button>
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

export default AddCatergoryComponent;