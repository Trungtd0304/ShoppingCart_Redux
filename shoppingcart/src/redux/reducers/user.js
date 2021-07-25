let stateGioHang = {
  //state con của bài giỏ hàng
  //list san pham tổng
  userList: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ],
  //detail san pham (thể hiện mặt định ra UI)
  detailProduct: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  ],
  listCart: [], //state của model giỏ hàng, nơi chứa các sản phẩm người dùng chọn
};

const gioHangReduce = (state = stateGioHang, action) => {
  console.log(action);
  switch (action.type) {
    //them san pham
    case "ADDCART": {
      let listCart = [...state.listCart];
      let index = listCart.findIndex(
        (item) => item.maSP === action.payload.maSP
      );
      if (index !== -1) {
        listCart[index].soLuong += 1;
      } else {
        listCart.push(action.payload);
      }
      state.listCart = listCart;
      return { ...state };
    }

    //xoa san pham
    case "DELETE_PRODUCT": {
      let listCart = [...state.listCart];
      let index = listCart.findIndex((item) => item.maSP === action.payload);
      if (index !== -1) {
        listCart.splice(index, 1);
      }
      state.listCart = listCart;
      return { ...state };
    }

    //tang giam san pham
    case "UPDATE_PRODUCT": {
      const { status } = action;
      console.log(action.payload);
      let listCart = [...state.listCart];
      let index = listCart.findIndex(
        (item) => item.maSP === action.payload.maSP
      );
      if (index !== -1) {
        if (status) {
          //Tăng SL
          listCart[index].soLuong += 1;
        } else {
          //Giảm SL
          if (listCart[index].soLuong > 1) {
            listCart[index].soLuong -= 1;
          }
        }
        //Update state
        state.listCart = listCart;
      }

      return { ...state };
    }

    //xem chi tiet san pham
    case "SHOW_PRODUCT": {
      state.detailProduct = action.payload;
      return { ...state };
    }

    default:
      // Trả về state mới
      return { ...state };
  }
};

export default gioHangReduce;
