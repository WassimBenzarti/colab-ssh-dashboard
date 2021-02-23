import { atom } from "recoil";


export default atom({
	key:"app.privateKey",
	default: localStorage.getItem("privateKey")
})