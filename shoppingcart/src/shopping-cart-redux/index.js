import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
// import data from "./data.json";
import { connect } from "react-redux"; //thư viện kết nối với redux

class ShoppingCart extends Component {
  renderSoLuong = () => {
    return this.props.listCart.reduce((sum, maSP) => {
      return (sum += maSP.soLuong);
    }, 0);
  };

  render() {
    const { detailProduct } = this.props;
    console.log(detailProduct);
    return (
      <div>
        <div className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.renderSoLuong()})
          </button>
        </div>
        <DanhSachSanPham />
        <Modal />

        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{detailProduct.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{detailProduct.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{detailProduct.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{detailProduct.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{detailProduct.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{detailProduct.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // state từ tông của ứng dụng chứa các state con
  return {
    detailProduct: state.gioHangReduce.detailProduct,
    listCart: state.gioHangReduce.listCart,
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);
//hàm connect có 2 giá trị 1.mapStateToProps 2.mapDispatchToProps
//mapStateToProps: chứ giỏ hàng
//mapDispatchToProps: chứa hành động đẩy lên state
