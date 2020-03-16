import React, { Component } from "react";
import { connect } from "react-redux";

class ShowAllMobiles extends Component {
  render() {
    return (
      <div className="m-4 text-center">
        {this.props.listOfMobiles.length !== 0 ? (
          <table className="table table-bordered table-hover m-auto">
            <thead className="text-white bg-dark">
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Storage</th>
                <th>Camera</th>
                <th>Battery</th>
                <th>Display</th>
                <th>Ram</th>
              </tr>
            </thead>
            <tbody className="table-sm bg-light">
              {this.props.listOfMobiles.map((singleMobile, index) => {
                return (
                  <tr key={index}>
                    <td>{singleMobile.brand}</td>
                    <td>{singleMobile.model}</td>
                    <td>{singleMobile.storage}</td>
                    <td>{singleMobile.camera}</td>
                    <td>{singleMobile.battery}</td>
                    <td>{singleMobile.display}</td>
                    <td>{singleMobile.ram}</td>
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

export default connect(mapStateToProps, null)(ShowAllMobiles);
