<script>
    export let location = undefined
    location = location

    import Button from '@smui/button'
    import Card, {Content} from '@smui/card'
    import TabBar from '@smui/tab-bar'
    import Tab, {Icon, Label} from '@smui/tab';


</script>

<h1>MAIN</h1>
<Button on:click={() => alert('Clicked!')}>Just a Button</Button>

<div class='gridCont'>
    <Card style='grid-column: 1 / 2'><Content>AAA</Content></Card>
    <Card><Content>AAA</Content></Card>
    <Card><Content>AAA</Content></Card>



</div>



<style lang="sass">
    .gridCont
        grid-template-columns: 30px auto auto auto 30px
        display: grid
        grid-gap: 4px


</style>