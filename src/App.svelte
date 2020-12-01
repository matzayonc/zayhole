<script lang="ts">
	import Navbar from './comp/Navbar.svelte'
	import { Router, Route } from "svelte-routing"
    import Main from './routes/Main.svelte'
    import About from './routes/About.svelte'


</script>

<style lang="sass">
	:global(body)
		margin: 0
		padding: 0
</style>

<svelte:head>
	<title>Zayhole</title>
</svelte:head>


<Router>
	<Navbar/>
	<Route path="/about" component="{About}" />
	<Route path="/" component="{Main}" />
</Router>
