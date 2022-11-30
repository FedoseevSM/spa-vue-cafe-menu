<template>
  <div>
    <b-button-group>
      <b-button v-for="item in items" :key="item.id" :id="item.id">
        {{ item.title }}
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Супы", id: 1 },
        { title: "Закуски", id: 2 },
        { title: "Горячие блюда", id: 3 },
        { title: "Брускетты", id: 4 },
      ],
    };
  },
};
</script>
