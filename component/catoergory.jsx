import React, { Component } from 'react';
import sevices from '../services/SystemServices';

class catoergory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: []
        }
    }
    componentDidMount() {
        sevices.getCatergoryDetails().then(res => {
            this.setState({ category: res.data })
            console.log(this.state.category)
        })
        
    }
    NavigationPreloadManager(e, catergoryid) {
        this.props.history.push('/Viewcatergories/'+ catergoryid);
    }
    render() {
        return (
            <body>
                <div className="container-fluid mt-5">
                    <div data-testid="title" className="row text-center">
                        <h5>Catergories</h5>
                    </div>
                    <div className="row">
                        {
                            this.state.category.map(
                                category =>
                                    <div className="col-md-4">
                                        <div className="card mt-3 sellercard">
                                            <div className="product text-center mt-3">
                                                <span>Catergory Name:<h5>{category.name}</h5></span>
                                            </div>
                                            <div className="product text-center mt-3">
                                                <span>Catergory Description:<h5>{category.Description}</h5></span>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                    <div className="p-3 text-center text-white mt-2 cursor">
                                                        <button className="btn btn-success btn-block" onClick={e => this.NavigationPreloadManager(e, category._id)}>View Products</button> <br />
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

export default catoergory;