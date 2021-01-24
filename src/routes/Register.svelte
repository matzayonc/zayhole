<script lang='ts'>
    export let location
    location = location
    import {register, validateUsername, validatePassword} from '../modules/login'

    let login = ''
    let password = '' 
    let confirm = '' 
    let message = ''


    function check():string {
        if(!validateUsername(login))
            return 'Invalid username'

        if(!validateUsername(login))
            return 'Invalid password'

        if(password != confirm)
            return 'Passwords do not match'

        return 'ok'
    }


    function submit(){
        const validity = check()
        if(validity != 'ok'){
            message = validity
            return
        }

        register(login, password).then(()=>message = validity)
    }

</script>

<h1>Register</h1>
<p>{message}</p>
<input type='text' placeholder='login' bind:value={login}><br>
<input type='password' placeholder='password' bind:value={password}><br>
<input type='password' placeholder='repeat password' bind:value={confirm}><br>
<input type='submit' value='register' on:click={submit}>

<style lang='sass'>
    input
        font-size: 16px
        padding: 0.4em
        margin: 0.2em 3px
        border: 1px solid #ccc
        border-radius: 2px
</style>