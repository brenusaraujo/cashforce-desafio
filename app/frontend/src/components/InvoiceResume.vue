<script>
import 'bootstrap/dist/css/bootstrap.css'
import PageHeader from './PageHeader.vue'
import ProviderDetail from './ProviderDetail.vue'
import pageTitleImage from '../assets/icons/handshake-blue.svg'
export default {
  components: {
    PageHeader,
    ProviderDetail,
  },
  setup() {
    return {
      pageTitleImage,
    }
  },
  data() {
    return {
      nfs: null,
      loading: false,
      showProviderDetail: false,
      providerDetailId: null,
      error: null,
      status: [
        'Pendente de confirmação',
        'Pedido confirmado',
        'Não reconhece o pedido',
        'Mercadoria não recebida',
        'Recebida com avaria',
        'Devolvida',
        'Recebida com devolução parcial',
        'Recebida e confirmada',
        'Pagamento Autorizado',
      ],
    }
  },
  methods: {
    formatData(nfs) {
      nfs.forEach((nf) => {
        nf.value = (nf.value / 100).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })
        nf.emissionDate = new Date(nf.emissionDate).toLocaleDateString('pt-BR')
        nf.status = this.status[nf.orderStatusBuyer]
      })
      return nfs
    },
    async getInvoices() {
      this.loading = true
      try {
        const BASE_URL =
          import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
        const data = await fetch(BASE_URL)
        const nfs = await data.json()

        this.nfs = this.formatData(nfs)
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
    handleProviderDetail(id) {
      if (!this.showProviderDetail) {
        this.showProviderDetail = true
        this.providerDetailId = id
      }
    },
    closePopup() {
      this.showProviderDetail = false
    },
  },
  created() {
    this.getInvoices()
  },
}
</script>

<template>
  <div class="px-5 pt-5">
    <PageHeader
      title="Notas fiscais"
      sub-title="Visualize as notas fiscais que você tem."
      :img-src="pageTitleImage"
      img-alt="handshake"
    />

    <p v-if="loading" class="mt-3">
      Carregando...
    </p>
    <p v-else-if="error" class="mt-3">
      Algo deu errado, tente novamente mais tarde.
    </p>
    <p v-else-if="nfs.length < 1" class="mt-3">
      Você ainda não possui nenhuma nota fiscal.
    </p>

    <table v-else class="table table-borderless text-center">
      <thead>
        <tr class="text-mid">
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody class="text-dark">
        <tr v-for="nf in nfs" :key="nf.nNf">
          <td>{{ nf.nNf }}</td>
          <td>{{ nf.buyer.name }}</td>
          <td>{{ nf.provider.name }}</td>
          <td>{{ nf.emissionDate }}</td>
          <td class="text-theme">R$ {{ nf.value }}</td>
          <td class="text-theme">
            {{ nf.status }}
          </td>
          <td>
            <button
              class="btn"
              @click="this.handleProviderDetail(nf.provider.id)"
            >
              Dados do cedente
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ProviderDetail
      v-if="showProviderDetail"
      :id="providerDetailId"
      :close-popup="closePopup"
    />
  </div>
</template>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 16px;
}

table td {
  border-top: 1px solid #dfe2eb;
  border-bottom: 1px solid #dfe2eb;
  height: 48px;
  vertical-align: middle;
}

table td:first-of-type {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-left: 1px solid #dfe2eb;
}

table td:last-of-type {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-right: 1px solid #dfe2eb;
}

.btn {
  border: 1px solid #cad3ff;
  border-radius: 24px;
  padding: 8px 29px;
}
</style>
