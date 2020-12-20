<script lang='ts'>
	import { Link } from 'svelte-routing'
    import Login from './Login.svelte';
    export let loginCallback: (login: string, password: string) => boolean
    import Tab, {Icon, Label} from '@smui/tab';
    import TabBar from '@smui/tab-bar'

    let tabs: [string, string][] = [
        ['Home', '/'],
        ['About', '/about'],
        ['Test', '/test']
    ]
    console.log(location)
    $:active = tabs.find(i=>i[1]==location.pathname)[0]

</script>


<nav>
    <TabBar tabs={tabs.map(i=>i[0])} let:tab bind:active>
        <Tab {tab}>
            <Label>
                <Link to={tabs.find(i=>i[0]==tab)[1]}>{tab}</Link>
            </Label>
        </Tab>
  </TabBar>
</nav>






