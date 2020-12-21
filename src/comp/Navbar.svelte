<script lang='ts'>
	import { navigate  } from 'svelte-routing'
    import Login from './Login.svelte';
    export let loginCallback: (login: string, password: string) => boolean
    import Tab, {Icon, Label} from '@smui/tab';
    import TabBar from '@smui/tab-bar'
import About from '../routes/About.svelte';

    loginCallback

    let tabs: [string, string][] = [
        ['Home', '/'],
        ['About', '/about'],
        ['Test', '/test']
    ]
    console.log(location)
    let active = tabs.find(i=>i[1]==location.pathname)[0]
    

    $: if(active != tabs.find(i=>i[1]==location.pathname)[0])
        navigate(tabs.find(i=>i[0]==active)[1], { replace: true })
</script>



<nav>
    <TabBar tabs={tabs.map(i=>i[0])} let:tab bind:active>
        <Tab {tab}>
            <Label>
                {tab}
            </Label>
        </Tab>
    </TabBar>
</nav>






