<script>
    export let location = undefined
    location = location
    import { logout } from '../modules/login.ts' 
    import { navigate } from 'svelte-routing'


    async function sendLogout(){
        await logout()
        navigate('/')
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