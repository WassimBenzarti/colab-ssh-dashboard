import { useEffect } from "react";
import { useRecoilState } from "recoil";
import privateKeyAtom from "../atoms/privateKeyAtom";
import useApiFetch from "./useApiFetch";


export default function usePrivateKey(){
	const [fetchApi] = useApiFetch()
	const [key, setKey] = useRecoilState(privateKeyAtom);
	function createPrivateKey () {
		fetchApi("/createKey")
			.then(body=>{
				console.log("hey", body)
			})
	}
	useEffect(()=>{
		localStorage.setItem("privateKey", key)
	},[key])
	return [key, createPrivateKey]
}