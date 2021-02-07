<script lang='ts'>
    export let location
    location = location
    import ChatBox from '../comp/ChatBox.svelte';
</script>

<div>
    <ChatBox/>
</div>


<style lang='sass'>
    @import '../style/Vars'

    div
        height: calc(100vh - 50px)

</style>