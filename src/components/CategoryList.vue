<template>
  <h1>Category</h1>
  <!-- <app-pagination :itemList="gameList"></app-pagination> -->
</template>

<script>
// import AppPagination from "./AppPagination.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {},
  setup() {
    const store = useStore();
    store.dispatch("game/getAllGamesAction");
    const gameList = computed(() => store.state.game.gameList);
    return {
      gameList,
    };
  },
};
</script>

<style></style>
