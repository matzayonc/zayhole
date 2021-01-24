export interface MessageStructure{
    content: string,
    sender: string,
    recipient: string
    timestamp?: string
    status?: string
}

export async function send(m: MessageStructure):Promise<string> {

    console.log('a')
    const res =  await fetch(`/message/${m.sender}/${m.recipient}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(m),
    }).then(res => res.json())


    return res
}