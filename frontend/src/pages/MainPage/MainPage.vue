<script setup>
import CatMenu from "../../components/CatMenu/CatMenu.vue";
import PushForm from "../../components/PushForm/PushForm.vue";
import ItemsCard from "../../components/ItemsCard/ItemsCard.vue";
</script>

<template>
  <CatMenu />
  <div className="row">
    <div className="col">
        <ItemsCard />
    </div>
    <div className="col">
      <PushForm />
    </div>
  </div>
</template>