<script lang='ts'>
    export const updateFreq = 200
    export const conversation = 'global'
    import {onMount, afterUpdate} from 'svelte';
    import Message from '../comp/Message.svelte'
    import {send, load} from '../modules/chat'
    import {user} from '../modules/stores'


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
            sender: $user.name,
            convo: conversation,
            status: 'send'
        }

        setTimeout(()=>text = '', 0)
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
            const fresh:MessageStructure[] = await load($user.name, conversation, findLastTimestamp()) 
            if(fresh.length > 1 || !messages.length){
                while(messages.length){
                    const last = messages[messages.length - 1]

                    if(last.status == 'send' || fresh.findIndex(i => JSON.stringify(last) == JSON.stringify(i)) != -1)
                        messages.pop()
                    else break
                }

                messages = messages.concat(fresh);
                shouldScroll = true
            }   

        } catch (err) {
            console.error(err)
        }

        setTimeout(getMessages, updateFreq)
    }

    function findLastTimestamp():string|undefined{

        for(let i = messages.length-1; i > 0; i--)
            if(messages[i].time)
                return messages[i].time

        return undefined
    }

    onMount(async () => {
        await getMessages()
    })

    afterUpdate(() => {if(shouldScroll) scrollToBottom()})
    
    
    function scrollToBottom(){
        const container = document.getElementById('messages')
        container.scrollTo(0, container.scrollHeight)
        shouldScroll = false
    }


</script>

    <section id='outer'>
        <h1>Messages</h1>
        
        <section id='messages'>
            {#each messages as m}
                 <Message {...m} />
            {/each}
        </section>
        
        <div>
            <textarea 
                bind:value={text}  
                on:keydown={e=>{if(e.key == 'Enter') sendMessage()}} 
                placeholder='Your message' draggable=false
            />
            <br/>
            <button on:click={sendMessage}>Send</button> 
        </div>

    </section>



<style lang='sass'>
    @import '../style/Vars'

    #outer
        height: 100%

        h1
            margin: 5px
            line-height: 50px

        #messages
            height: calc(100% - 150px)
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