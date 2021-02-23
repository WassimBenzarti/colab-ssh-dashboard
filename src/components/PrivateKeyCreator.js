import usePrivateKey from "../hooks/usePrivateKey"


export default function PrivateKeyCreator(){
	const [key, createPrivateKey] = usePrivateKey()

	return <div>
		<p>Create your private key first</p>
		<p>{key}</p>
		<button onClick={createPrivateKey}>
			Create my private key
		</button>
	</div>
}