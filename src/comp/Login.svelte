<script lang='ts'>
    import { Link } from 'svelte-routing'
    export let text = 'Login'
    export let callback: (login: string, password: string) => boolean
    import {server} from '../data.json'


    interface loginData{
        login: string,
        passwd: string
    }

    let data = {login: '', passwd: ''}
    
    let firstTry = true
    let visible = true

    function check(){
        let {login, passwd} = data

        if(login == '' || passwd == ''){
            firstTry = false
            return
        } 
   

        firstTry = callback(login, passwd)


    }
</script>


<div id='login-toggle' on:click={()=>visible = !visible}>{text}</div>

{#if visible}
    <div id='login-popup'>
        <h2>Login</h2>
        <input bind:value={data.login} type="text"/> <br/>
        <input bind:value={data.passwd} type="password" class={firstTry ? '' : 'wrong'}/> <br/>
        <Link to='about'>Register</Link>
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