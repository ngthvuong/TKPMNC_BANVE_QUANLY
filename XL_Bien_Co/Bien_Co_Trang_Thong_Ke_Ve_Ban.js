'use strict'

const controller = {}

controller.Man_Hinh_Thong_Ke_Ve_Ban = (Yeu_Cau, Phan_Hoi) =>{
    return Phan_Hoi.render("Man_Hinh_Thong_Ke_Ve_Ban")
}

controller.Lay_Thong_Tin_Thong_Ke = (Yeu_Cau, Phan_Hoi) =>{
    return Phan_Hoi.json("Lay_Thong_Tin_Thong_Ke")
}

module.exports = controller