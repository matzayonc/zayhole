<script lang='ts'>
    export let location = undefined

    location = location
    
    interface Response {success?: boolean, err?:string}

    let link = ''
    let alias = ''
    
    let ok:boolean|undefined = undefined

    async function submit(){

        const res = await fetch(`/addshorten/${alias}`, {
            method: 'POST',
            body: JSON.stringify({link: link})
        }).then(r => r.json()) as Response

        console.log(res)
        ok = res.success

    }


</script>


<h1>Shorten ur links</h1>

{#if ok}
    <p>Shortened link saved</p>
{:else if ok === false}
    <p class='err'>Error: probably name is taken</p>
{:else if alias && !link.match(/https?:\/\//)}
    <p class='err'>invalid link</p>
{/if}

<input bind:value={link} placeholder='link'>
<input bind:value={alias} placeholder='alias'>
<input type="submit" on:click|preventDefault={submit} value='Zapisz'>


<style lang="sass">

    input
        font-size: 18px
        margin: 10px 50px
        display: block

    p
        margin: 10px 50px
        background-color: lightgrey
        display: inline-block
        padding: 10px 20px
        border-radius: 20px

        &.err
            color: red
    
</style>