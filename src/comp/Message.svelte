<script lang="ts">
export let sender:string
export let content:string
export let time:string
export let status= 'default'


</script>


<section>
    <p class={status}>{content} {sender}@{time}</p>
</section>

<style lang="sass">
    section
        margin: 5px
        padding: 3px

        p
            display: inline
            padding: 3px 10px
            font-size: 16px
            border-radius: 5px
            background-color: lightblue
            width: auto

            &.send
                opacity: .6

            &.err
                opacity: .6
                border: 2px solid red

</style>