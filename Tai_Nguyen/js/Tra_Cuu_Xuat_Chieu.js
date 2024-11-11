'use strict'

class Tra_Cuu_Xuat_Chieu {
    Danh_Sach_Xuat_Chieu_Goc = []
    Danh_Sach_Xuat_Chieu_Da_Loc = []
    Loc_Phim_ID = 0
    Loc_Rap_ID = 0
    Loc_Ca_ID = 0
    Loc_Ngay_Chieu = ""
    Xu_Ly_Su_Kien = []

    constructor(Danh_Sach_Xuat_Chieu_Goc) {
        this.Danh_Sach_Xuat_Chieu_Goc = Danh_Sach_Xuat_Chieu_Goc
        this.Danh_Sach_Xuat_Chieu_Goc.forEach(Xuat_Chieu => {
            this.Danh_Sach_Xuat_Chieu_Da_Loc.push(Xuat_Chieu)
        })
    }

    Gan_Phim_ID = (Phim_ID) => {
        this.Loc_Phim_ID = parseInt(Phim_ID)
    }
    Gan_Rap_ID = (Rap_ID) => {
        this.Loc_Rap_ID = parseInt(Rap_ID)
    }
    Gan_Ca_ID = (Ca_ID) => {
        this.Loc_Ca_ID = parseInt(Ca_ID)
    }
    Gan_Ngay_Chieu = (Ngay_Chieu) => {
        this.Loc_Ngay_Chieu = (Ngay_Chieu) ? Ngay_Chieu : ""
    }

    So_Sanh_Phim = (Phim_ID) => {
        return !this.Loc_Phim_ID || Phim_ID === this.Loc_Phim_ID
    }
    So_Sanh_Rap = (Rap_ID) => {
        return !this.Loc_Rap_ID || Rap_ID === this.Loc_Rap_ID
    }
    So_Sanh_Ca = (Ca_ID) => {
        return !this.Loc_Ca_ID || Ca_ID === this.Loc_Ca_ID
    }
    So_Sanh_Ngay_Chieu = (Ngay_Chieu) => {
        return !this.Loc_Ngay_Chieu || Ngay_Chieu === this.Loc_Ngay_Chieu
    }

    Loc_Xuat_Chieu = () => {
        this.Danh_Sach_Xuat_Chieu_Da_Loc = this.Danh_Sach_Xuat_Chieu_Goc.filter(Xuat_Chieu => {
            return (
                this.So_Sanh_Phim(Xuat_Chieu.Phim.ID)
                && this.So_Sanh_Rap(Xuat_Chieu.Phong.Rap.ID)
                && this.So_Sanh_Ca(Xuat_Chieu.Ca.ID)
                && this.So_Sanh_Ngay_Chieu(Xuat_Chieu.Ngay_Chieu)
            )
        })

        this.Thuc_Thi_Xu_Ly_Su_Kien()
    }

    Dang_Ky_Xu_Ly_Su_Kien = (Ham_Xu_Ly) => {
        this.Xu_Ly_Su_Kien.push(Ham_Xu_Ly)
    }

    Thuc_Thi_Xu_Ly_Su_Kien = () => {
        this.Xu_Ly_Su_Kien.forEach(Ham_Xu_Ly => {
            Ham_Xu_Ly()
        })
    }
}