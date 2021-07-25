import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.getDetailProduct(product);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.addCart(product);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //them san pham
    addCart: (product) => {
      const listCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        dongGia: product.giaBan,
      };
      const action = {
        type: "ADDCART",
        payload: listCart,
      };
      dispatch(action);
    },

    //xem chi tiet san pham
    getDetailProduct: (product) => {
      const action = {
        type: "SHOW_PRODUCT",
        payload: product,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
