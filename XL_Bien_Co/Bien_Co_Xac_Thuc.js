'use strict'

const Luu_Tru_Nhan_Vien = require("../XL_Luu_Tru/Luu_Tru_Nhan_Vien")

const controller = {}

controller.Man_Hinh_Dang_Nhap = (Yeu_Cau, Phan_Hoi) =>{
    if(Yeu_Cau.session.Nguoi_Dung){
        return Phan_Hoi.redirect("/")
    }
    return Phan_Hoi.render("Man_Hinh_Dang_Nhap")
}

controller.Dang_Nhap = async (Yeu_Cau, Phan_Hoi) =>{
    try{
        const {Email, Mat_Khau} = Yeu_Cau.body
        if(!Email){
            throw new Error("Vui lòng nhập Email!")
        }
        if(!Mat_Khau){
            throw new Error("Vui lòng nhập Mật Khẩu!")
        }

        const Nhan_Vien = await Luu_Tru_Nhan_Vien.Lay_Thong_Tin(Email)
        if(!Nhan_Vien){
            throw new Error("Người dùng không tồn tại!")
        }

        if(Nhan_Vien.Mat_Khau !== Mat_Khau){
            throw new Error("Mật khẩu không chính xác!")
        }

        Yeu_Cau.session.Nguoi_Dung = Nhan_Vien

        return Phan_Hoi.json({ message: "Đăng nhập thành công!" })
    }
    catch(error){
        console.error(error)
        return Phan_Hoi.json({
            error:{
                message: error.message
            }
        })
    }
}

controller.Dang_Xuat = (Yeu_Cau, Phan_Hoi) => {
    delete Yeu_Cau.session.Nguoi_Dung
    return Phan_Hoi.redirect("/dang-nhap")
}

module.exports = controller