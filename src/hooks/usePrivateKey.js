

export default function usePrivateKey(){
	const [key, setKey] = useState();
	function createPrivateKey(){
		fetchPrivateKey()
			.then(privateKey=>{
				setKey(privateKey)
			})
	}
	return createPrivateKey
}