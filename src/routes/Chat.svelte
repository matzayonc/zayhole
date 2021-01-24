<script lang='ts'>
export let location
location = location
import Message from '../comp/Message.svelte'



    let text = ''


</script>


<h1>Messages</h1>

<section>
    <Message content={'aaa'}/>
    <Message content={'aaa'}/>
    <Message content={'aaa'}/>
</section>

<textarea bind:value={text} placeholder='Your message' draggable=false/>
 
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