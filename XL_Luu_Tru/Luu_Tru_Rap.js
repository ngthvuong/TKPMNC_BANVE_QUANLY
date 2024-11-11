'use strict'

class Luu_Tru_Rap {
    Lay_Danh_Sach_Rap_Quan_Ly = async (Quan_Ly_ID) => {
        const Phan_Hoi = await fetch(`http://localhost:6102/quanly/rap/danhsachquanly/${Quan_Ly_ID}`, {
            method: "GET"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }
}

module.exports = new Luu_Tru_Rap()
