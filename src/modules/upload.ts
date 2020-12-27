export default async function(file:File):Promise<boolean>{ 
	console.log(file)
	let res = {success: undefined}
	try {
		let raw  = await fetch('/upload/girls', {
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