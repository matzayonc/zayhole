<script lang='ts'>
    import { navigate } from 'svelte-routing'
    export let text = 'Login'
    export let callback: (login: string, password: string) => boolean
    import {server} from '../data.json'
    import {login} from '../modules/login'


    interface loginData{
        username: string,
        passwd: string
    }

    let data = {username: '', passwd: ''}
    
    let firstTry = true
    let visible = false

    function check(){
        let {username, passwd} = data

        if(username == '' || passwd == ''){
            firstTry = false
            return
        } 
   

        login(username, passwd).then(result => firstTry = result)
    }

    function goToRegister(e:Event){
        visible = false
        navigate('/register')
    }
</script>


<div id='login-toggle' on:click={()=>visible = !visible}>{text}</div>

{#if visible}
    <div id='login-popup'>
        <h2>Login</h2>
        <input bind:value={data.username} type="text"/> <br/>
        <input bind:value={data.passwd} type="password" class={firstTry ? '' : 'wrong'}/> <br/>
        <a href='register' on:click|preventDefault={goToRegister}>Register</a>
        <button on:click={check}>Login</button>
    </div>     
{/if}



<style lang='sass'>
    @import '../style/Vars'
    #login-toggle
        padding: 0 10px
        background-color: $hoverColor
        border-radius: $barHeight/2
        color: $textColor

    #login-popup
        margin-left: calc(50vw - 240px)
        position: absolute
        top: 100px
        left: 100px
        padding: 10px 15px
        border-radius: 5px
        cursor: default
        background-color: $primaryColor

        h2
            text-align: center
            color: $textColor
            margin-top: 5px

        input
            padding: 2px
            box-sizing: content-box
            border: 3px solid $primaryColor


            &.wrong
                border: 3px solid #C73838
                box-sizing: content-box


        button
            float: right
            border-radius: 5px
            padding: 2px
            border-width: 0
            color: $textColor
            background-color: $hoverColor


</style>