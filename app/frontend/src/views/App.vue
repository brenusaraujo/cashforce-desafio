<script setup>
import '../assets/base.css'
</script>

<template>
  <div class="d-flex">
    <section class="menu-section">
      <div>
        <img class="p-4" src="../assets/logo.png" alt="Cashforce logo" />
        <nav class="pt-1 d-flex flex-column">
          <RouterLink to="/">
            <div class="d-flex gap-4 menu-item align-items-center">
              <div class="vl" />
              <img
                src="../assets/icons/handshake-green.svg"
                alt="aperto de mãos"
              />
              <span>Notas fiscais</span>
            </div>
          </RouterLink>
        </nav>
      </div>
    </section>

    <section class="flex-grow-1 content-section">
      <header />
      <hr />
      <RouterView />
    </section>
  </div>
</template>

<style scoped>
.menu-section {
  width: 288px;
  background: #fbfdfe;
  font-size: 12px;
}

a,
a:hover {
  text-decoration: none;
  color: var(--text-theme);
  font-weight: 500;
}

.vl {
  border-left: 4px solid var(--text-theme);
  border-radius: 4px;
  height: 64px;
}

header {
  height: 64px;
}

hr {
  color: #dfe2eb;
}

.content-section {
  background: #fff;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  border-radius: 15px 0px 0px 15px;
  min-height: 100vh;
}
</style>
