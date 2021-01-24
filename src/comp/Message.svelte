<script lang="ts">
export let sender:string
export let recipient:string
export let content:string
export let time:string


</script>


<section>
    <p>{content}</p>
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

</style>