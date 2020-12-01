<script>
    import About from "../routes/About.svelte";
    export let text = 'Login'

    let visible = false

    function click(){
        console.log('ok')
    }
</script>

<style lang='sass'>
    @import '../style/Vars'
    #login-toggle
        padding: 0 10px
        background-color: $hoverColor
        border-radius: $barHeight/2
        color: $textColor




</style>

<div id='login-toggle' on:click={()=>visible = !visible}>{text}</div>

{#if visible}
    <div id='login-popup'>


    </div>     
{/if}