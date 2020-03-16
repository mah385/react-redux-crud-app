import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setExistingMobileInReduxForUpdating,
  deleteExistingMobileByIdFromRedux
} from "../../actions/mobileActions";

class ShowAllMobiles extends Component {
  handleSetExistingMobileInReduxForUpdating = existingMobile => {
    this.props.setExistingMobileInReduxForUpdating(
      existingMobile,
      this.props.history
    );
  };

  handleDeleteExistingMobileByIdFromRedux = mobileId => {
    this.props.deleteExistingMobileByIdFromRedux(mobileId);
  };

  render() {
    return (
      <div className="m-4 text-center">
        {this.props.listOfMobiles.length !== 0 ? (
          <table className="table table-bordered table-hover m-auto">
            <thead className="text-white bg-dark">
              <tr>
                <th>Sl.no</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Storage</th>
                <th>Camera</th>
                <th>Battery</th>
                <th>Display</th>
                <th>Ram</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="table-sm bg-light">
              {this.props.listOfMobiles.map((mobile, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{mobile.brand}</td>
                    <td>{mobile.model}</td>
                    <td>{mobile.storage}</td>
                    <td>{mobile.camera}</td>
                    <td>{mobile.battery}</td>
                    <td>{mobile.display}</td>
                    <td>{mobile.ram}</td>
                    <td
                      className="text-success"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.handleSetExistingMobileInReduxForUpdating(mobile)
                      }
                    >
                      <i className="far fa-edit" />
                    </td>
                    <td
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.handleDeleteExistingMobileByIdFromRedux(mobile.id)
                      }
                    >
                      <i className="fas fa-trash-alt" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1>NO MOBILES TO DISPLAY</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listOfMobiles: state.useMobileReducer.listOfMobiles
  };
};

export default connect(mapStateToProps, {
  setExistingMobileInReduxForUpdating,
  deleteExistingMobileByIdFromRedux
})(ShowAllMobiles);
