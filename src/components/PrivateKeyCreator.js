

export default function(){
	const [createPrivateKey] = usePrivateKeyCreator()

	return <div>
		<p>Create your private key first</p>.
		<button onClick={createPrivateKey}>
			Create my private key
		</button>
	</div>

}