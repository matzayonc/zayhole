export interface MessageStructure{
    content: string,
    sender: string,
    recipient: string
    timestamp?: string
    status?: string
}

export async function send(m: MessageStructure):Promise<string> {

    const res =  await fetch(`/message/${m.sender}/${m.recipient}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(m),
    }).then(res => res.json())


    return res
}

export async function load(sender:string, recipient:string, since?:string):Promise<MessageStructure[]> {


    console.log('a')
    const res =  await fetch(`/message/${sender}/${recipient}?since=${since ?? ''}`, {
        //method: 'GET',
        //headers: {'Content-Type': 'application/json'},
        //body: JSON.stringify({timestamp: since}),
    }).then(res => res.json())

    if(!res.success) return []

    return res.messages.map(i=>{return {
        content: i.content,
        sender: sender,
        recipient: recipient,
        timestamp: i.timestamp,
    }})
}