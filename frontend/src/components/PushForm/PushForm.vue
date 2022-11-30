<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Категория:" label-for="push-cat">
        <b-form-select id="push-cat" v-model="form.food" :options="foods" required></b-form-select>
      </b-form-group>

      <b-form-group label="Название:" label-for="push-name"
        description="We'll never share your email with anyone else.">
        <b-form-input id="push-name" v-model="form.email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Описание:" label-for="push-description">
        <b-form-textarea id="push-description" v-model="text" placeholder="Введите что-нибудь..." rows="3"
          max-rows="6"></b-form-textarea>
      </b-form-group>

      <b-form-group label="Стоимость:" label-for="push-price">
        <b-form-input id="push-price" v-model="form.email" type="number" placeholder="Enter email"
          required></b-form-input>
      </b-form-group>

      <b-form-group label="Изображение:" label-for="push-file">
        <b-form-file id="push-file" v-model="file1" :state="Boolean(file1)"
          placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
      </b-form-group>

      <div class="d-grid">
        <b-button class="mr-2" type="submit" variant="primary">Отправить</b-button>
        <b-button type="reset" variant="danger">Сбросить</b-button>
      </div>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file1: null,
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Сбросить значения нашей формы
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Уловка для сброса/очистки состояния проверки формы в собственном браузере
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>