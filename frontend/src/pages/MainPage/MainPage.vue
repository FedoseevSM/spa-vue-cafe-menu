<script setup>
import CatMenu from "../../components/CatMenu/CatMenu.vue";
import PushForm from "../../components/PushForm/PushForm.vue";
import ItemsCard from "../../components/ItemsCard/ItemsCard.vue";
import { getAllItems } from "../../controllers/itemsController"
</script>

<template>
  <CatMenu />
  <div class="row">
    <div class="col-sm-8">
      <ItemsCard />
    </div>
    <div class="col-sm-4">
      <PushForm />
      {{ items }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    getAllItems().then((res) => (this.items = res))
  },
};
</script>