<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    popUp: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      details: null,
      loading: false,
      error: null,
    }
  },
  methods: {
    async getProviders() {
      this.loading = true
      try {
        const BASE_URL =
          import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
        const data = await fetch(`${BASE_URL}/provider/${this.id}`)
        const details = await data.json()

        this.details = details
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
  },
  created() {
    this.getProviders()
  },
}
</script>

<template>
  <div class="wrapper d-flex justify-content-center">
    <div class="card">
      <button class="btn-close m-2" aria-label="Close" @click="popUp" />
      <p v-if="loading" class="mt-3 text-center title text-d-blue">
        Carregando...
      </p>
      <p v-else-if="error" class="mt-3 text-center title text-d-blue">
        Algo deu errado, tente novamente mais tarde.
      </p>
      <p v-else-if="!details" class="mt-3 text-center title text-d-blue">
        Esse fornecedor não existe.
      </p>
      <div v-else>
        <div class="container p-3">
          <h2 class="text-center title text-d-blue">
            Dados do cedente
          </h2>
          <div class="mt-3">
            <p class="text-center text-mid p-1">
              NOME
            </p>
            <p class="text-center p-3 border rounded">
              {{ details.name }}
            </p>
            <p class="text-center text-mid p-1">
              Razão Social
            </p>
            <p class="text-center p-3 border rounded">
              {{ details.tradingName }}
            </p>
            <p class="text-center text-mid p-1">
              CNPJ
            </p>
            <p class="text-center p-3 border rounded">
              {{ details.cnpj.cnpj }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}

.card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  min-height: 300px;
  height: fit-content;
  background: white;
}

.title {
  font-size: 24px;
}

button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
