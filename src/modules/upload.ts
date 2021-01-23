export default async function(file:File):Promise<boolean>{ 
	console.log(file.name)
	let arr = file.name.split('.')
	const ext = arr[arr.length - 1]

	let res = {success: undefined}
	try {
		let raw  = await fetch(`/upload/girls/${ext}`, {
			method: 'POST',
			body: file
		})
		res = await raw.json()
		
	} catch (err) {
		console.error(err)
		return false
	}

	if(res.success != undefined)
		return res.success
	else return false
	
	
}