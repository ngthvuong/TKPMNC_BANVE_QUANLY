'use strict'

class Nghiep_Vu_Rap {
    Xep_Danh_Sach_Phong_Theo_Rap = (Danh_Sach_Rap) =>{
        
        const Danh_Sach_Phong_Theo_Rap = {}

        Danh_Sach_Rap.forEach(Rap => {
            Danh_Sach_Phong_Theo_Rap[Rap.ID] = Rap.Phongs
        })

        return Danh_Sach_Phong_Theo_Rap
    }
}

module.exports = new Nghiep_Vu_Rap()