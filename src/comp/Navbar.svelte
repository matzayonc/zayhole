<script lang='ts'>
	import { Link } from 'svelte-routing'
    import Login from './Login.svelte';

</script>


<nav>
    <div class='links'>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
    </div>
    <Login text='Login'/>


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
