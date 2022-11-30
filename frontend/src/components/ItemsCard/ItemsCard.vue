<template>
  <div v-for="item in items" :key="item.id">
    <b-card
      :title="item.title"
      :img-src="item.src"
      img-alt="Изображение"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ item.description }}
      </b-card-text>

      <b-button href="#" variant="primary">Иди куда-нибудь</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Борщ", src: "", description: "Это вкусно", id: 1 },
        { title: "Картошка", src: "", description: "Это вкусно", id: 2 },
        { title: "Спагетти", src: "", description: "Это вкусно", id: 3 },
        { title: "Окрошка", src: "", description: "Это вкусно", id: 4 },
      ],
    };
  },
};
</script>
