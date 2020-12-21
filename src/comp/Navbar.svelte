<script lang='ts'>
    export let loginCallback: (login: string, password: string) => boolean

	import { navigate  } from 'svelte-routing'
    import Tab, {Label} from '@smui/tab';
    import TabBar from '@smui/tab-bar'
    import IconButton from '@smui/icon-button'
    import Dialog, {Title, Content, Actions, InitialFocus} from '@smui/dialog';
    import Textfield, {Input, Textarea} from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text/index';
    import Button from '@smui/button';

    import {login} from '../modules/login'

    loginCallback

    let tabs: [string, string][] = [
        ['Home', '/'],
        ['About', '/about'],
        ['Test', '/test']
    ]

    
    let active = tabs.find(i=>i[1]==location.pathname)[0]    
    $: if(active != tabs.find(i=>i[1]==location.pathname)[0])
    navigate(tabs.find(i=>i[0]==active)[1], { replace: true })
    
    let loginDialog, loginValue = ''
    let passValue = ''
</script>


<nav>
    <TabBar tabs={tabs.map(i=>i[0])} let:tab bind:active>
        <Tab {tab}><Label>{tab}</Label></Tab>
    </TabBar>
    <IconButton class='material-icons' on:click={loginDialog.open()}>login</IconButton>
</nav>

<Dialog bind:this={loginDialog} aria-labelledby="simple-title" aria-describedby="simple-content">
    <Title id="simple-title">Dialog Title</Title>
    <Content id="simple-content">
      <Textfield bind:value={loginValue} label="Login" fullwidth dense />
      <HelperText>Podaj Login</HelperText>      
      <Textfield type='password' bind:value={passValue} label="Hasło" fullwidth dense/>
      <HelperText>Wpisz hasło</HelperText>
    </Content>
    

    <Actions>
      <Button on:click={()=>login(loginValue, passValue)}>
        <Label>Zaloguj</Label>
      </Button>

    </Actions>
  </Dialog>



<style lang="sass">
nav
    display: grid
    grid-template-columns: auto 50px

</style>


