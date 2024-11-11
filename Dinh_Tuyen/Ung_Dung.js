const express = require("express")
const routes = express.Router()

const XL_Bien_Co_Trang_Chinh = require("../XL_Bien_Co/Bien_Co_Trang_Chinh")
const XL_Bien_Co_Trang_Xuat_Chieu = require("../XL_Bien_Co/Bien_Co_Trang_Xuat_Chieu")
const XL_Bien_Co_Trang_Lap_Lich = require("../XL_Bien_Co/Bien_Co_Trang_Lap_Lich")
const XL_Bien_Co_Trang_Thong_Ke_Ve_Ban = require("../XL_Bien_Co/Bien_Co_Trang_Thong_Ke_Ve_Ban")

routes.use((Yeu_Cau, Phan_Hoi, next) => {
    if (!Yeu_Cau.session.Nguoi_Dung) {
        return Phan_Hoi.redirect("/dang-nhap")
    }
    Phan_Hoi.locals.Nguoi_Dung = Yeu_Cau.session.Nguoi_Dung

    next()
})

routes.get("/", XL_Bien_Co_Trang_Chinh.Man_Hinh_Chinh)

routes.get("/lap-lich/danh-sach", XL_Bien_Co_Trang_Lap_Lich.Man_Hinh_Lap_Lich_Danh_Sach)
routes.get("/lap-lich/them", XL_Bien_Co_Trang_Lap_Lich.Man_Hinh_Lap_Lich_Them)
routes.post("/lap-lich/them", XL_Bien_Co_Trang_Lap_Lich.Tao_Xuat_Chieu)

routes.get("/lap-lich/sua/:ID", XL_Bien_Co_Trang_Lap_Lich.Man_Hinh_Lap_Lich_Sua)
routes.post("/lap-lich/sua/:ID", XL_Bien_Co_Trang_Lap_Lich.Sua_Xuat_Chieu)

routes.get("/lap-lich/xoa/:ID", XL_Bien_Co_Trang_Lap_Lich.Man_Hinh_Lap_Lich_Xoa)
routes.post("/lap-lich/xoa/:ID", XL_Bien_Co_Trang_Lap_Lich.Xoa_Xuat_Chieu)

routes.get("/xuat-chieu/danh-sach", XL_Bien_Co_Trang_Xuat_Chieu.Man_Hinh_Tra_Cuu_Xuat_Chieu)
routes.get("/xuat-chieu/:ID", XL_Bien_Co_Trang_Xuat_Chieu.Man_Hinh_Tra_Cuu_Xuat_Chieu_Chi_Tiet)

routes.get("/thong-ke/ve-thang", XL_Bien_Co_Trang_Thong_Ke_Ve_Ban.Man_Hinh_Thong_Ke_Ve_Ban)
routes.post("/thong-ke/ve-thang", XL_Bien_Co_Trang_Thong_Ke_Ve_Ban.Lay_Thong_Tin_Thong_Ke)

module.exports = routes