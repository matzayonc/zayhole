<script>
    export let location = undefined
    location = location
    import {logout} from '../modules/login.ts' 

    async function sendLogout(){
        console.log(await logout())
    }

</script>


<article>
    <h1>Profil</h1>
    <button on:click={sendLogout}>Log out</button>

</article>



<style lang='sass'>
    article
        margin-left: 50px

</style>