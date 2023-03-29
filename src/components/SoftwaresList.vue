<template>
  <app-paginate
    :page-count="5"
    :page-range="2"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :item="gameList"
    v-model="page"
  >
    <div v-for="(item, index) in gameList" :key="index">
      {{ item.name }}
    </div>
  </app-paginate>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {},

  setup() {
    const perPage = ref(5);
    const page = ref(1);
    const store = useStore();
    store.dispatch("game/getAllGamesAction");
    const gameList = computed(() => store.state.game.gameList);
    console.log("length", gameList.value.length);
    const clickCallback = (pageNum) => {
      console.log(pageNum);
    };
    return {
      gameList,
      perPage,
      page,
      clickCallback,
    };
  },
};
</script>

<style lang="css" scoped>
/* Write your own CSS for pagination */
.pagination {
}
.page-item {
}
</style>
