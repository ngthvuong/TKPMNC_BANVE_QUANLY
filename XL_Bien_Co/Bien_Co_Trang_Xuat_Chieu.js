'use strict'

const Luu_Tru_Xuat_Chieu = require("../XL_Luu_Tru/Luu_Tru_Xuat_Chieu")
const Nghiep_Vu_Xuat_Chieu = require("../XL_Nghiep_Vu/Nghiep_Vu_Xuat_Chieu")

const controller = {}

controller.Man_Hinh_Tra_Cuu_Xuat_Chieu = async (Yeu_Cau, Phan_Hoi) => {
    const Danh_Sach_Xuat_Chieu = await Luu_Tru_Xuat_Chieu.Lay_Danh_Sach_Xuat_Chua_Chieu()
    const Danh_Sach_Phim = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Phim(Danh_Sach_Xuat_Chieu)
    const Danh_Sach_Ngay_Chieu = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Ngay_Chieu(Danh_Sach_Xuat_Chieu)
    const Danh_Sach_Ca = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Ca(Danh_Sach_Xuat_Chieu)
    return Phan_Hoi.render("Man_Hinh_Tra_Cuu_Xuat_Chieu", {
        Danh_Sach_Xuat_Chieu: JSON.stringify(Danh_Sach_Xuat_Chieu),
        Danh_Sach_Phim,
        Danh_Sach_Ngay_Chieu,
        Danh_Sach_Ca
    })
}

controller.Man_Hinh_Tra_Cuu_Xuat_Chieu_Chi_Tiet = async (Yeu_Cau, Phan_Hoi) => {
    const ID = Yeu_Cau.params.ID
    const Xuat_Chieu = await Luu_Tru_Xuat_Chieu.Lay_Thong_Tin_Xuat_Chieu(ID)
    if(!Xuat_Chieu){
        return Phan_Hoi.redirect("/danh-sach-xuat-chieu")
    }
    return Phan_Hoi.render("Man_Hinh_Tra_Cuu_Xuat_Chieu_Chi_Tiet", {
        Xuat_Chieu: JSON.stringify(Xuat_Chieu)
    })
}

module.exports = controller