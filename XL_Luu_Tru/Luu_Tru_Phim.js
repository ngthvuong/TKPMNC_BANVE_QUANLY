'use strict'

class Luu_Tru_Phim {
    Lay_Danh_Sach_Phim = async () => {
        const Phan_Hoi = await fetch("http://localhost:6102/quanly/phim/danhsach",{
            method: "GET"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }
}

module.exports = new Luu_Tru_Phim()
