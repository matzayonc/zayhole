<script lang="ts">
    import {user} from '../modules/stores'

    export let sender:string
    export let content:string
    export let time:string = undefined
    export let status= 'default'

    import TimeAgo from 'javascript-time-ago'

    const ago = new TimeAgo()
    

    $: isoTime = time ? time.split(' ').join('T') + '.000Z' : time
    $: when = time ? ago.format(new Date(isoTime)) : 'just now'

    setInterval(()=>when=time ? ago.format(new Date(isoTime)) : 'just now', 10000)

</script>


<section>
    <p 
    class={status}
    class:own={sender == $user.name}>
        {content} {sender}@{when}
    </p>
</section>

<style lang="sass">
    section
        margin: 5px
        padding: 3px

        p
            display: inline-block
            padding: 3px 10px
            font-size: 16px
            border-radius: 7px
            background-color: lightblue
            width: auto

            &.send
                opacity: .6

            &.err
                opacity: .6
                border: 2px solid red
            
            &.own
                clear: both
                float: right

</style>