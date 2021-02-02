<script lang='ts'>
	import { Link } from 'svelte-routing'
    import Login from './Login.svelte';

    let loggedIn: boolean
</script>


<nav>
    <div class='links'>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='chat'>Chat</Link>
    </div>
    {#if !loggedIn}
        <Login bind:loggedIn={loggedIn}/>
    {:else}
        <div id='profil'>Profil</div>
    {/if}


</nav>


<style lang='sass'>
    @import '../style/Vars'
    
    nav
        background-color: $primaryColor
        display: flex
        height: $barHeight
        line-height: $barHeight
        font-size: 18px
        cursor: pointer 
        user-select: none    
    

        #profil
            padding: 0 10px
            background-color: $hoverColor
            border-radius: $barHeight/2
            color: $textColor

        .links
            flex: 1
            display: flex
    
            :global(a)
                flex: 1
                text-align: center
                text-decoration: none
                color: $textColor

                &:hover
                    background-color: $hoverColor

       
    
</style>
