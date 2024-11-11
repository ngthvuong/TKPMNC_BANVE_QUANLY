const express = require("express")
const routes = express.Router()

const Dinh_Tuyen_Xac_Thuc = require("./Xac_Thuc")
const Dinh_Tuyen_Ung_Dung = require("./Ung_Dung")

routes.use("/", Dinh_Tuyen_Xac_Thuc)
routes.use("/", Dinh_Tuyen_Ung_Dung)


module.exports = routes