import { atom } from "recoil";


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('api');

export default atom({
	key: "apiUrl",
	default: myParam || "/api"
})