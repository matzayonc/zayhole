<script lang='ts'>

import { navigate  } from 'svelte-routing'
import Tab, {Label} from '@smui/tab'
import TabBar from '@smui/tab-bar'
import IconButton from '@smui/icon-button'
import Dialog, {Title, Content} from '@smui/dialog'
import Textfield from '@smui/textfield'
import HelperText from '@smui/textfield/helper-text/index'
import Button from '@smui/button'

import {check, login} from '../modules/login'


  let tabs: [string, string][] = [
      ['Home', '/'],
      ['About', '/about'],
      ['Test', '/test']
  ]


  let active = (()=>{
    let name = tabs.find(i=>i[1]==location.pathname)
    return name ? name[0] : 'Home'
  })()

  
  let loginDialog, loginValue = ''
  let passValue = ''

  let valid = {login: true, password: true}

  async function loginButton(){
    valid = check(loginValue, passValue)
    if(valid.login == true == valid.password){
      if(await login(loginValue, passValue)){
        loginDialog.close()
      }
      else{
        valid.password = false
        passValue = ''
      }
    }
  }

  $: visible = tabs.find(i=>i[1]==location.pathname) != undefined
  
  function changeTab(){
    console.log(active)
    
    let activePair = tabs.find(i=>i[0]==active)
    if(activePair)
      navigate(activePair[1], { replace: true })
  }
</script>

<nav>
  {#if visible}
    <TabBar tabs={tabs.map(i=>i[0])} let:tab bind:active on:click={changeTab}>
        <Tab {tab}><Label>{tab}</Label></Tab>
    </TabBar>
    <IconButton class='material-icons' on:click={loginDialog.open()}>login</IconButton>
  {/if}
</nav>

<Dialog bind:this={loginDialog}>
    <Title>Login</Title>
    <Content>
      <Textfield bind:value={loginValue} label="Login" fullwidth dense invalid={!valid.login}/>
      <HelperText>Podaj Login</HelperText>      
      <Textfield type='password' bind:value={passValue} label="Hasło" fullwidth dense invalid={!valid.password}/>
      <HelperText>Wpisz hasło</HelperText>     
      
      <Button style='float:right' on:click={loginButton}>
        <Label>Login</Label>
      </Button>
    </Content>
  </Dialog>



<style lang="sass">
nav
    display: grid
    grid-template-columns: auto 50px

</style>


