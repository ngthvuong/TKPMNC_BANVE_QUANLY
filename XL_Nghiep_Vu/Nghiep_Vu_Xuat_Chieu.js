'use strict'

class Nghiep_Vu_Xuat_Chieu {

    Lay_Danh_Sach_Phim = (Danh_Sach_Xuat_Chieu) => {
        const Danh_Sach_Phim = []
        Danh_Sach_Xuat_Chieu.forEach(Xuat_Chieu => {
            if (Xuat_Chieu.Phim && Xuat_Chieu.Phim.ID) {
                const PhimID = Xuat_Chieu.Phim.ID
                if (!Danh_Sach_Phim.some(Phim => Phim.ID === PhimID)) {
                    Danh_Sach_Phim.push(Xuat_Chieu.Phim)
                }
            }
        });
        Danh_Sach_Phim.sort((a, b) => {
            if(a.Ten > b.Ten) return 1
            if(a.Ten < b.Ten) return -1
            return 0
        })
        return Danh_Sach_Phim
    }
    Lay_Danh_Sach_Rap = (Danh_Sach_Xuat_Chieu) => {
        const Danh_Sach_Rap = []
        Danh_Sach_Xuat_Chieu.forEach(Xuat_Chieu => {
            if (Xuat_Chieu.Phong && Xuat_Chieu.Phong.Rap && Xuat_Chieu.Phong.Rap.ID) {
                const RapID = Xuat_Chieu.Phong.Rap.ID
                if (!Danh_Sach_Rap.some(Rap => Rap.ID === RapID)) {
                    Danh_Sach_Rap.push(Xuat_Chieu.Phong.Rap)
                }
            }
        });
        Danh_Sach_Rap.sort((a, b) => {
            if(a.Ten > b.Ten) return 1
            if(a.Ten < b.Ten) return -1
            return 0
        })
        return Danh_Sach_Rap

    }
    Lay_Danh_Sach_Ngay_Chieu = (Danh_Sach_Xuat_Chieu) => {
        const Danh_Sach_Ngay_Chieu = []
        Danh_Sach_Xuat_Chieu.forEach(Xuat_Chieu => {
            if (Xuat_Chieu.Ngay_Chieu) {
                if (!Danh_Sach_Ngay_Chieu.includes(Xuat_Chieu.Ngay_Chieu)) {
                    Danh_Sach_Ngay_Chieu.push(Xuat_Chieu.Ngay_Chieu)
                }
            }
        });
        Danh_Sach_Ngay_Chieu.sort((a, b) => {
            const Date_a = new Date(a)
            const Date_b = new Date(b)

            if(Date_a > Date_b) return 1
            if(Date_a < Date_b) return -1
            return 0
        })
        return Danh_Sach_Ngay_Chieu
    }
    Lay_Danh_Sach_Ca = (Danh_Sach_Xuat_Chieu) => {
        const Danh_Sach_Ca = []
        Danh_Sach_Xuat_Chieu.forEach(Xuat_Chieu => {
            if (Xuat_Chieu.Ca && Xuat_Chieu.Ca.ID) {
                const CaID = Xuat_Chieu.Ca.ID
                if (!Danh_Sach_Ca.some(Ca => Ca.ID === CaID)) {
                    Danh_Sach_Ca.push(Xuat_Chieu.Ca)
                }
            }
        });
        Danh_Sach_Ca.sort((a, b) => {
            if(a.Bat_Dau > b.Bat_Dau) return 1
            if(a.Bat_Dau < b.Bat_Dau) return -1
            return 0
        })
        return Danh_Sach_Ca
    }
}

module.exports = new Nghiep_Vu_Xuat_Chieu()