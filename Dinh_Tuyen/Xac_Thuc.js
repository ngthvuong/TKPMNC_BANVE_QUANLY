const express = require("express")
const routes = express.Router()

const Xu_Ly_Bien_Co = require("../XL_Bien_Co/Bien_Co_Xac_Thuc")

routes.get("/dang-nhap", Xu_Ly_Bien_Co.Man_Hinh_Dang_Nhap)
routes.post("/dang-nhap", Xu_Ly_Bien_Co.Dang_Nhap)
routes.get("/dang-xuat", Xu_Ly_Bien_Co.Dang_Xuat)

module.exports = routes