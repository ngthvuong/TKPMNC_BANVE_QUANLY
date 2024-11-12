'use strict'

class Luu_Tru_Ve {
    Thong_Ke_So_Ve_Ban_Theo_Thang = async (Thang, Nam) => {
        const Phan_Hoi = await fetch(`http://localhost:6102/quanly/ve/thongke/${Thang}/${Nam}`, {
            method: "GET"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }
}

module.exports = new Luu_Tru_Ve()
