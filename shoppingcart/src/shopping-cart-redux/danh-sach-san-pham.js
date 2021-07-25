import React, { Component } from "react";
import SanPham from "./san-pham";
import { connect } from "react-redux";

class DanhSachSanPham extends Component {
  renderListProduct = () => {
    //Duyệt mảng và render lần lượt ra các SanPham tương ứng
    const { product } = this.props;
    return product.map((product) => {
      return (
        <SanPham
          key={product.maSP}
          product={product}
          getDetailProduct={this.props.getDetailProduct}
          //   getProductAddCart={this.props.getProductAddCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // state từ tông của ứng dụng chứa các state con
  return {
    product: state.gioHangReduce.userList,
  };
};

export default connect(mapStateToProps, null)(DanhSachSanPham);
