'use strict'

class Luu_Tru_Xuat_Chieu {
    Lay_Danh_Sach_Xuat_Chua_Chieu = async () => {
        const Phan_Hoi = await fetch("http://localhost:6102/quanly/xuatchieu/danhsachchuachieu", {
            method: "GET"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }
    Lay_Danh_Sach_Chua_Chieu_Theo_Quan_Ly = async (ID) => {
        const Phan_Hoi = await fetch(`http://localhost:6102/quanly/xuatchieu/danhsachchuachieu/${ID}`, {
            method: "GET"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }

    Lay_Thong_Tin_Xuat_Chieu = async (ID) => {
        const Phan_Hoi = await fetch(`http://localhost:6102/quanly/xuatchieu?ID=${ID}`, {
            method: "GET"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }

    Them_Xuat_Chieu = async (
        Ngay_Chieu,
        Don_Gia,
        Phim_ID,
        Ca_ID,
        Phong_ID
    ) => {
        const data = {
            Ngay_Chieu,
            Don_Gia,
            Phim_ID,
            Ca_ID,
            Phong_ID
        }
        const Phan_Hoi = await fetch("http://localhost:6102/quanly/xuatchieu", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }

    Sua_Xuat_Chieu = async (
        ID,
        Ngay_Chieu,
        Don_Gia,
        Phim_ID,
        Ca_ID,
        Phong_ID
    ) => {
        const data = {
            Ngay_Chieu,
            Don_Gia,
            Phim_ID,
            Ca_ID,
            Phong_ID
        }
        const Phan_Hoi = await fetch(`http://localhost:6102/quanly/xuatchieu/${ID}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }

    Xoa_Xuat_Chieu = async (ID) => {
        const Phan_Hoi = await fetch(`http://localhost:6102/quanly/xuatchieu/${ID}`, {
            method: "DELETE"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }
}

module.exports = new Luu_Tru_Xuat_Chieu()
