'use strict'

class Luu_Tru_Nhan_Vien {

    Lay_Thong_Tin = async (Email) => {
        const data = {Email}
        const Phan_Hoi = await fetch("http://localhost:6102/quanly/nhanvien", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }
}

module.exports = new Luu_Tru_Nhan_Vien()