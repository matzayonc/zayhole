<script lang="ts">
	import Navbar from './comp/Navbar.svelte'
	import { Router, Route } from "svelte-routing"
	import Main from './routes/Main.svelte'
	import About from './routes/About.svelte'
	import Upload from './routes/Upload.svelte'
	import Register from './routes/Register.svelte'
	import Chat from './routes/Chat.svelte'
	import Shortener from './routes/Shortener.svelte'


	import TimeAgo from 'javascript-time-ago'
	import EnglishTimeAgo from 'javascript-time-ago/locale/en'
	import {tryToLoginWithToken} from './modules/login'
	import Profile from './routes/Profile.svelte';

	(async() => await tryToLoginWithToken())()
    TimeAgo.addDefaultLocale(EnglishTimeAgo)

</script>


<svelte:head>
	<title>Zayhole</title>
</svelte:head>

<Router>
	<Navbar/>
	<Route path="/profile" component="{Profile}" />
	<Route path="/shortener" component="{Shortener}" />
	<Route path="/upload" component="{Upload}" />
	<Route path="/about" component="{About}" />
	<Route path="/register" component="{Register}" />
	<Route path="/chat" component="{Chat}" />
	<Route path="/" component="{Main}" />
</Router>


<style lang="sass">
	:global(body)
		margin: 0
		padding: 0
		font-family: "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif
</style>