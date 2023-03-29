<template>
  <header class="header" id="header">
    <a href="" class="logo"><span>Grogank</span>World</a>
    <div>
      <h3>Hello Admin !</h3>
      <button class="btn-danger" @click="handleLogout">Logout</button>
    </div>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const handleLogout = () => {
      store.dispatch("signin/logOutAction", router);
    };
    return { handleLogout };
  },
};
</script>

<style lang="scss">
.header {
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  background-color: #2a2a2a;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 15%;
  transition: 0.5s;
  color: var(--light-color);
  font-size: 2rem;
  div {
    display: flex;
  }
}
.sticky {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  .header {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
}
</style>
