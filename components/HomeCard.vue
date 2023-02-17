<template>
    <div>
        <img :src="home.images[0]" style="width:200px" alt="">
        <h3>{{home.title}}</h3>
        <p>{{home.location.address}} {{home.location.city}} {{home.location.state}}</p>
        <p>{{home.guests}} guests</p>
        <p>{{home.pricePerNight}} /night</p>
    </div>
</template>
<script>
export default ({
    props:{
        home:{
            type: Object,
            required: true
        }
    }
})
</script>
