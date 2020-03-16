import React, { Component } from "react";
import { connect } from "react-redux";
import { updateExistingMobileInRedux } from "../../actions/mobileActions";

class UpdateMobile extends Component {
  state = {
    id: this.props.existingMobile.id,
    brand: this.props.existingMobile.brand,
    model: this.props.existingMobile.model,
    storage: this.props.existingMobile.storage,
    camera: this.props.existingMobile.camera,
    battery: this.props.existingMobile.battery,
    display: this.props.existingMobile.display,
    ram: this.props.existingMobile.ram
  };

  handleStateOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormOnSubmit = event => {
    event.preventDefault();
    const {
      id,
      brand,
      model,
      storage,
      camera,
      battery,
      display,
      ram
    } = this.state;
    const updatedExistingMobile = {
      id: id,
      brand: brand,
      model: model,
      storage: storage,
      camera: camera,
      battery: battery,
      display: display,
      ram: ram
    };
    this.props.updateExistingMobileInRedux(
      updatedExistingMobile,
      this.props.history
    );
  };

  render() {
    return (
      <div className="m-4">
        <div className="border border-primary bg-light rounded w-50 m-auto text-success">
          <h4 className="m-4 text-center">MOBILE DETAILS</h4>
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
                Update
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
    existingMobile: state.useMobileReducer.singleMobile
  };
};

export default connect(mapStateToProps, { updateExistingMobileInRedux })(
  UpdateMobile
);
