<script lang="ts">
    export let sender:string
    export let content:string
    export let time:string
    export let status= 'default'

    import TimeAgo from 'javascript-time-ago'

    const ago = new TimeAgo()
    const date = new Date(time.split(' ').join('T') + '.000Z')
    

</script>


<section>
    <p class={status}>{content} {sender}@{ago.format(date)}</p>
</section>

<style lang="sass">
    section
        margin: 5px
        padding: 3px

        p
            display: inline
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

</style>