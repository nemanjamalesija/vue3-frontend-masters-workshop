<template>
  <main class="main"><slot name="main" /></main>

  <aside class="aside"><slot name="aside" /></aside>

  <footer class="footer"><slot name="footer" /></footer>
</template>

<style>
.main {
  border: 2px solid blue;
  margin-bottom: 20px;
}

.aside {
  border: 2px solid red;
  margin-bottom: 20px;
}

.footer {
  border: 2px solid green;
}
</style>
