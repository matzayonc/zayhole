<script lang='ts'>
export let location
location = location
import {onMount, afterUpdate} from 'svelte';
import Message from '../comp/Message.svelte'
import {send, load} from '../modules/chat'


    const sender = 'a'
    const recipient = 'a'

    interface MessageStructure{
        content: string,
        sender: string,
        convo: string
        time?: string
        status?: string
    }

    let messages: MessageStructure[] = []

    let shouldScroll = false

    let text = ''

    function sendMessage(){
        let mess = {
            content: text,
            sender: sender,
            convo: recipient,
            status: 'send'
        }
        const id = messages.length
        messages.push(mess)
        messages = messages
        shouldScroll = true


        send(mess).then(res => messages[id].status = 'send')
        .catch(err => {
            messages[id].status = 'err'
            console.error(err)
        })
    }

    async function getMessages(){
        try {
            const fresh:MessageStructure[] = await load(sender, recipient, findLastTimestamp()) 
            while(messages.length){

                const last = messages[messages.length - 1]

                if(last.status == 'send' || JSON.stringify(last) == JSON.stringify(fresh[0]))
                    messages.pop()
                else break
            }

            messages = messages.concat(fresh);
            shouldScroll = true
        } catch (err) {
            console.error(err)
        }
    }

    function findLastTimestamp():string|undefined{

        for(let i = messages.length-1; i > 0; i--)
            if(messages[i].time)
                return messages[i].time

        return undefined
    }

    messages = messages
    shouldScroll = true


    onMount(async () => {
        await getMessages()
        setInterval(getMessages, 500)
    })

    afterUpdate(() => {if(shouldScroll) scrollToBottom()})
    
    
    function scrollToBottom(){
        const container = document.getElementById('messages')
        container.scrollTo(0, container.scrollHeight)
        shouldScroll = false
    }


</script>


<h1>Messages</h1>

<section id='messages'>
    {#each messages as m}
         <Message {...m} />
    {/each}
</section>

<div>
    <textarea bind:value={text} placeholder='Your message' draggable=false/>
    <br/>
    <button on:click={sendMessage}>Send</button> 
</div>


<style lang='sass'>
    @import '../style/Vars'

    h1
        margin: 5px
        line-height: 50px

    section
        height: calc(100vh - 250px)
        overflow-y: scroll
        font-size: 16px


    div
        height: 100px

        textarea
            height: 30%
            margin: 5px
            font-size: 16px
            line-height: 20px
            height: 60px
            resize: none
</style>