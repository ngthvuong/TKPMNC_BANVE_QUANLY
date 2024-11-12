'use strict'
const XL_Luu_Tru_Ve = require("../XL_Luu_Tru/Luu_Tru_Ve")

const controller = {}

controller.Man_Hinh_Thong_Ke_Ve_Ban = (Yeu_Cau, Phan_Hoi) =>{
    return Phan_Hoi.render("Man_Hinh_Thong_Ke_Ve_Ban")
}

controller.Lay_Thong_Tin_Thong_Ke = async (Yeu_Cau, Phan_Hoi) =>{
    const {Thang, Nam} = Yeu_Cau.body
    const Thong_Ke_So_Ve_Ban_Theo_Thang = await XL_Luu_Tru_Ve.Thong_Ke_So_Ve_Ban_Theo_Thang(Thang, Nam)
    return Phan_Hoi.json(Thong_Ke_So_Ve_Ban_Theo_Thang)
}

module.exports = controller