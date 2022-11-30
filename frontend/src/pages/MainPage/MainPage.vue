<script setup>
import CatMenu from "../../components/CatMenu/CatMenu.vue";
import PushForm from "../../components/PushForm/PushForm.vue";
import ItemsCard from "../../components/ItemsCard/ItemsCard.vue";
</script>

<template>
  <CatMenu />
  <div class="row">
    <div class="col-sm-8">
      <ItemsCard />
    </div>
    <div class="col-sm-4">
      <PushForm />
    </div>
  </div>
</template>