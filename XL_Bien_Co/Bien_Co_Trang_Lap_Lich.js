'use strict'
const Nghiep_Vu_Xuat_Chieu = require("../XL_Nghiep_Vu/Nghiep_Vu_Xuat_Chieu")
const Nghiep_Vu_Rap = require("../XL_Nghiep_Vu/Nghiep_Vu_Rap")

const Luu_Tru_Xuat_Chieu = require("../XL_Luu_Tru/Luu_Tru_Xuat_Chieu")
const Luu_Tru_Ca = require("../XL_Luu_Tru/Luu_Tru_Ca")
const Luu_Tru_Phim = require("../XL_Luu_Tru/Luu_Tru_Phim")
const Luu_Tru_Rap = require("../XL_Luu_Tru/Luu_Tru_Rap")


const controller = {}

controller.Man_Hinh_Lap_Lich_Danh_Sach = async (Yeu_Cau, Phan_Hoi) => {
    const Quan_Ly_ID = Phan_Hoi.locals.Quan_Ly.id

    const Danh_Sach_Xuat_Chieu = await Luu_Tru_Xuat_Chieu.Lay_Danh_Sach_Chua_Chieu_Theo_Quan_Ly(Quan_Ly_ID)
    const Danh_Sach_Phim = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Phim(Danh_Sach_Xuat_Chieu)
    const Danh_Sach_Ngay_Chieu = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Ngay_Chieu(Danh_Sach_Xuat_Chieu)
    const Danh_Sach_Ca = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Ca(Danh_Sach_Xuat_Chieu)
    return Phan_Hoi.render("Man_Hinh_Lap_Lich_Danh_Sach", {
        Danh_Sach_Xuat_Chieu: JSON.stringify(Danh_Sach_Xuat_Chieu),
        Danh_Sach_Phim,
        Danh_Sach_Ngay_Chieu,
        Danh_Sach_Ca
    })
}
controller.Man_Hinh_Lap_Lich_Them = async (Yeu_Cau, Phan_Hoi) => {
    const Quan_Ly_ID = Phan_Hoi.locals.Quan_Ly.id

    const Danh_Sach_Ca = await Luu_Tru_Ca.Lay_Danh_Sach_Ca()
    const Danh_Sach_Phim = await Luu_Tru_Phim.Lay_Danh_Sach_Phim()
    const Danh_Sach_Rap = await Luu_Tru_Rap.Lay_Danh_Sach_Rap_Quan_Ly(Quan_Ly_ID)

    const Danh_Sach_Phong_Theo_Rap = Nghiep_Vu_Rap.Xep_Danh_Sach_Phong_Theo_Rap(Danh_Sach_Rap)

    return Phan_Hoi.render("Man_Hinh_Lap_Lich_Them", {
        Danh_Sach_Ca,
        Danh_Sach_Phim,
        Danh_Sach_Rap,
        Danh_Sach_Phong_Theo_Rap: JSON.stringify(Danh_Sach_Phong_Theo_Rap)
    })
}
controller.Tao_Xuat_Chieu = async (Yeu_Cau, Phan_Hoi) => {
    const { Ngay_Chieu, Don_Gia, Phim_ID, Ca_ID, Phong_ID } = Yeu_Cau.body
    const Xuat_Chieu_Moi = await Luu_Tru_Xuat_Chieu.Them_Xuat_Chieu(
        Ngay_Chieu,
        Don_Gia,
        Phim_ID,
        Ca_ID,
        Phong_ID
    )
    return Phan_Hoi.json(Xuat_Chieu_Moi)
}

controller.Man_Hinh_Lap_Lich_Sua = async (Yeu_Cau, Phan_Hoi) => {

    const ID = Yeu_Cau.params.ID

    const Xuat_Chieu = await Luu_Tru_Xuat_Chieu.Lay_Thong_Tin_Xuat_Chieu(ID)
    if(!Xuat_Chieu){
        return redirect("/lap-lich/danh-sach")
    }

    const Quan_Ly_ID = Phan_Hoi.locals.Quan_Ly.id

    const Danh_Sach_Ca = await Luu_Tru_Ca.Lay_Danh_Sach_Ca()
    const Danh_Sach_Phim = await Luu_Tru_Phim.Lay_Danh_Sach_Phim()
    const Danh_Sach_Rap = await Luu_Tru_Rap.Lay_Danh_Sach_Rap_Quan_Ly(Quan_Ly_ID)

    const Danh_Sach_Phong_Theo_Rap = Nghiep_Vu_Rap.Xep_Danh_Sach_Phong_Theo_Rap(Danh_Sach_Rap)

    return Phan_Hoi.render("Man_Hinh_Lap_Lich_Sua", {
        Danh_Sach_Ca,
        Danh_Sach_Phim,
        Danh_Sach_Rap,
        Danh_Sach_Phong_Theo_Rap: JSON.stringify(Danh_Sach_Phong_Theo_Rap),
        Xuat_Chieu: JSON.stringify(Xuat_Chieu)
    })
}
controller.Sua_Xuat_Chieu = async (Yeu_Cau, Phan_Hoi) => {
    const { Ngay_Chieu, Don_Gia, Phim_ID, Ca_ID, Phong_ID } = Yeu_Cau.body
    const ID = Yeu_Cau.params.ID

    const Xuat_Chieu_Moi = await Luu_Tru_Xuat_Chieu.Sua_Xuat_Chieu(
        ID,
        Ngay_Chieu,
        Don_Gia,
        Phim_ID,
        Ca_ID,
        Phong_ID
    )
    return Phan_Hoi.json(Xuat_Chieu_Moi)
}

controller.Man_Hinh_Lap_Lich_Xoa = async (Yeu_Cau, Phan_Hoi) => {
    const ID = Yeu_Cau.params.ID

    const Xuat_Chieu = await Luu_Tru_Xuat_Chieu.Lay_Thong_Tin_Xuat_Chieu(ID)
    if(!Xuat_Chieu){
        return redirect("/lap-lich/danh-sach")
    }

    return Phan_Hoi.render("Man_Hinh_Lap_Lich_Xoa", {
        Xuat_Chieu: JSON.stringify(Xuat_Chieu)
    })
}
controller.Xoa_Xuat_Chieu = async (Yeu_Cau, Phan_Hoi) => {
    const ID = Yeu_Cau.params.ID
    const Ket_Qua = await Luu_Tru_Xuat_Chieu.Xoa_Xuat_Chieu(ID)
    return Phan_Hoi.json(Ket_Qua)
}


module.exports = controller