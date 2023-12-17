<template>
    <div class="casts">
   <div class="casts__item">
    <img src="@/assets/images/cast.png" alt="" class="casts__img">
    <span class="casts__name">Simu Liu</span>
   </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.casts{
   display: flex;
   max-width:450px;
   width: 100%;
   flex-wrap: wrap;
   margin-bottom: 30px;
   gap: 15px;
   &__item{
    border-radius: 25px;
    border: 1px solid #fff;
    background: rgba(20, 20, 20, 0.50);
    padding-right:15px ;
    display: flex;
    align-items: center;
    column-gap: 10px;
   }
   &__name{
    font-size: 16px;
   }
}
</style>