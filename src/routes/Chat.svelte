<script lang='ts'>
export let location
location = location
import Message from '../comp/Message.svelte'

import {send} from '../modules/chat'


    const sender = 'a'
    const recipient = 'a'

    interface MessageStructure{
        content: string,
        sender: string,
        recipient: string
        timestamp?: string
        status?: string
    }

    let messages: MessageStructure[] = []



    let text = ''

    function sendMessage(){
        let mess = {
            content: text,
            sender: sender,
            recipient: recipient,
            status: 'send'
        }
        const id = messages.length
        messages.push(mess)
        messages = messages


        send(mess).then(res => messages[id].status = '')
        .catch(err => {
            messages[id].status = 'err'
            console.error(err)
        })
    }

    messages.push({content: 'aaaa', sender: sender, recipient: recipient})
    messages.push({content: 'aaaa', sender: sender, recipient: recipient})
    messages.push({content: 'aaaa', sender: sender, recipient: recipient, status: 'send'})
    messages = messages

</script>


<h1>Messages</h1>

<section>
    {#each messages as m}
         <Message {...m} />
    {/each}
</section>

<textarea bind:value={text} placeholder='Your message' draggable=false/>
<br/>
<button on:click={sendMessage}>Send</button> 



<style lang='sass'>
    h1
        margin: 5px


    textarea
        margin: 5px
        font-size: 16px
        line-height: 20px
        height: 60px
        resize: none
</style>