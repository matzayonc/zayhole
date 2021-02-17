<script lang='ts'>
    export let location = undefined
    location = location


    let link = ''
    let alias = ''

    function submit(){
        console.log(link, alias)
    }

</script>


<h1>Shorten ur links</h1>

<input bind:value={link} placeholder='link'>
<input bind:value={alias} placeholder='alias'>
<input type="submit" on:click|preventDefault={submit} value='Zapisz'>


<style lang="sass">

    input
        font-size: 18px
        margin: 10px 50px
        display: block
    
</style>