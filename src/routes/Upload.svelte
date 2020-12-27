<script lang='ts'>
export let location
location = location
import {navigate} from 'svelte-routing'
import Textfield from '@smui/textfield'
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

<UploadBox bind:files callback={send}></UploadBox>


