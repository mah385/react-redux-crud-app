import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewMobile } from "../../actions/mobileActions";
import { v4 as UUIDv4 } from "uuid";

class AddNewMobile extends Component {
  state = {
    id: "",
    brand: "",
    model: "",
    storage: "",
    camera: "",
    battery: "",
    display: "",
    ram: ""
  };

  handleStateOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormOnSubmit = event => {
    event.preventDefault();
    const { brand, model, storage, camera, battery, display, ram } = this.state;
    const newMobile = {
      id: UUIDv4(),
      brand: brand,
      model: model,
      storage: storage,
      camera: camera,
      battery: battery,
      display: display,
      ram: ram
    };
    this.props.addNewMobile(newMobile, this.props.history);
  };

  render() {
    return (
      <div className="m-4">
        <div className="border border-primary bg-light rounded w-50 m-auto text-success">
          <h3 className="m-4 text-center">MOBILE DETAILS</h3>
          <form
            className="text-right"
            onSubmit={event => {
              this.handleFormOnSubmit(event);
            }}
          >
            <div className="form-group row">
              <label className="col-4 col-form-label">Brand</label>
              <div className="col-lg-6 col-sm-7">
                <input
                  type="text"
                  name="brand"
                  className="form-control"
                  placeholder="Enter Brand"
                  onChange={this.handleStateOnChange}
                  value={this.state.brand}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-4 col-form-label">Model</label>
              <div className="col-lg-6 col-sm-7">
                <input
                  type="text"
                  name="model"
                  className="form-control"
                  placeholder="Enter Model"
                  onChange={this.handleStateOnChange}
                  value={this.state.model}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-4 col-form-label">Storage</label>
              <div className="col-lg-6 col-sm-7">
                <input
                  type="text"
                  name="storage"
                  className="form-control"
                  placeholder="Enter Storage"
                  onChange={this.handleStateOnChange}
                  value={this.state.storage}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-4 col-form-label">Camera</label>
              <div className="col-lg-6 col-sm-7">
                <input
                  type="text"
                  name="camera"
                  className="form-control"
                  placeholder="Enter Camera"
                  onChange={this.handleStateOnChange}
                  value={this.state.camera}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-4 col-form-label">Battery</label>
              <div className="col-lg-6 col-sm-7">
                <input
                  type="text"
                  name="battery"
                  className="form-control"
                  placeholder="Enter Battery"
                  onChange={this.handleStateOnChange}
                  value={this.state.battery}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-4 col-form-label">Display</label>
              <div className="col-lg-6 col-sm-7">
                <input
                  type="text"
                  name="display"
                  className="form-control"
                  placeholder="Enter Display"
                  onChange={this.handleStateOnChange}
                  value={this.state.display}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-4 col-form-label">RAM</label>
              <div className="col-lg-6 col-sm-7">
                <input
                  type="text"
                  name="ram"
                  className="form-control"
                  placeholder="Enter RAM"
                  onChange={this.handleStateOnChange}
                  value={this.state.ram}
                  required
                />
              </div>
            </div>

            <div className="my-4 text-center">
              <button type="submit" className="btn btn-sm btn-outline-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleMobile: state.useMobileReducer.singleMobile
  };
};

export default connect(mapStateToProps, { addNewMobile })(AddNewMobile);
