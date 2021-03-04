export interface MessageStructure{
    content: string,
    sender: string,
    convo: string
    timestamp?: string
    status?: string
}

export async function send(m: MessageStructure):Promise<string> {

    const res =  await fetch(`/messages/global/${m.sender}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(m),
    }).then(res => res.json())

    return res
}

export async function load(sender:string, convo:string, since?:string):Promise<MessageStructure[]> {

    const res =  await fetch(`/messages/${convo}?since=${since ?? ''}`, {
        //method: 'GET',
        //headers: {'Content-Type': 'application/json'},
        //body: JSON.stringify({timestamp: since}),
    }).then(res => res.json())

    if(!res.success) throw 'getting messages failed'

    return res.messages.map(i=>{return {
        content: i.content,
        sender: i.sender,
        time: i.ts,
    }})
}