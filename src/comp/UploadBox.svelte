<script lang='ts'>
export let files:FileList = undefined
export let callback:()=>void = undefined

    function handleFiles(e:Event){
        let fileList = (<HTMLInputElement>e.target).files
        files = fileList
        if(callback != undefined)
            callback()
    }
</script>

<div>
    <input type='file' on:change={handleFiles} multiple>

</div>




<style lang="sass">
    input
        margin: 100

</style>
