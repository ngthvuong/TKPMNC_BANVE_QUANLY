'use strict'

class Luu_Tru_Ve {
    Tao_Ve = async (Thang, Nam) => {
        const data = {
            Thang,
            Nam
        }
        const Phan_Hoi = await fetch("http://localhost:6102/quanly/ve/thongke", {
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

module.exports = new Luu_Tru_Ve()
