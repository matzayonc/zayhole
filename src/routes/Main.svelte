<script>
    export let location = undefined
    location = location

    import Button from '@smui/button'
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';

</script>

<h1>MAIN</h1>
<Button on:click={() => alert('Clicked!')}>Just a Button</Button>

<div class='gridCont'>
    <Card style='grid-column: 1 / 2'><Content>AAA</Content></Card>
    <Card><Content>AAA</Content></Card>
    <Card style="width: 320px;">
        <Media class="card-media-16x9" aspectRatio="16x9" >
            <video>
                <source src="/ss.mp4"/>
                <track kind="captions"/>
            </video>
        </Media>
        <Content style="color: #888;">
          Here's some gray text down here.
        </Content>
      </Card>
    



</div>



<style lang="sass">
    .gridCont
        grid-template-columns: 30px auto auto auto 30px
        display: grid
        grid-gap: 4px


</style>