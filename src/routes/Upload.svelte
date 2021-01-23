<script lang='ts'>
export let location
location = location
import UploadBox from '../comp/UploadBox.svelte'
import upload from '../modules/upload'

    let inputFiles = []

    let files = undefined

    function send(){
        console.log(files)
        for(let f of files)
            upload(f)
    }

</script>
<h1>UPload</h1>
<UploadBox bind:files callback={send}></UploadBox>


