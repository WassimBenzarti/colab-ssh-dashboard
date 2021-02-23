import { useRecoilValue } from "recoil";
import apiUrlAtom from "../atoms/apiUrlAtom";

export default function useApiFetch(){
	const apiUrl = useRecoilValue(apiUrlAtom)
	function fetchApi(url, options){
		return fetch(apiUrl+url, {
			...options,
		})
			.then(r=>r.json())
	}
	return [fetchApi];
}