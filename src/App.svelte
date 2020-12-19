<script lang="ts">
	import Navbar from './comp/Navbar.svelte'
	import { Router, Route } from "svelte-routing"
    import Main from './routes/Main.svelte'
    import About from './routes/About.svelte'

	function login(login: string, password: string){
		console.log('tried to login')
		return false
	}

</script>


<svelte:head>
	<title>Zayhole</title>
	
</svelte:head>

<Router>
	<Navbar loginCallback={login}/>
	<Route path="/about" component="{About}" />
	<Route path="/" component="{Main}" />
</Router>


<style lang="sass">
	:global(body)
		margin: 0
		padding: 0
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

</style>