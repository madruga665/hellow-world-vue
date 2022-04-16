<template>
  <ViewTemplate>
    <form>
      <div class="form-control">
        <label for="name">Nome</label>
        <input id="name" type="text" v-model="name" />
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password">Senha</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit" @click="submit">Enviar</button>
    </form>
  </ViewTemplate>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ViewTemplate from "../templates/ViewTemplate.vue";

export default defineComponent({
  name: "FormsView",
  components: {
    ViewTemplate,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submit(event: { preventDefault: () => void }) {
      event.preventDefault();
      window.alert(`
        Nome: ${this.name}
        Email: ${this.email}
        Senha: ${this.password}
      `);
      console.log({ nome: this.name, email: this.email, senha: this.password });
    },
  },
});
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-radius: 10px;
  border: 1px solid #16a085;
  padding: 50px 30px 20px;
}
.form-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.form-control label {
  font-size: 1.2rem;
  font-weight: bold;
  color: #16a085;
  margin-right: 240px;
}
input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  width: 300px;
}
button {
  border: 1px solid #16a085;
  background: #16a085;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  cursor: pointer;
  transition: 500ms;
}
button:hover {
  filter: brightness(1.2);
}
</style>
