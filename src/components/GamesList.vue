<template>
  <div class="title">
    <h3>Game Management</h3>
    <div class="search-form">
      <input type="search" placeholder="seach" v-model="keyword" />
    </div>
    <div class="btn" @click="hanldeOpenModalAdd">+ Add</div>
  </div>
  <div class="list">
    <div class="item" v-for="(item, index) in paginatedData" :key="index">
      <game-item :game="item"></game-item>
    </div>

    <!-- pagination -->
    <button class="btn" @click="firstPage">First</button>
    <button @click="backPage" class="btn">Prev</button>
    <button
      v-for="numPage in Math.ceil(gameList.length / perPage)"
      :key="numPage"
      @click="() => goToPage(numPage)"
      class="btn"
    >
      {{ numPage }}
    </button>
    <button @click="nextPage" class="btn">Next</button>
    <button class="btn" @click="lastPage">Last</button>
    <!-- pagination end -->
  </div>
  <teleport to="#app">
    <app-modal :isOpen="isOpenModalAdd" :handelCloseModal="hanldeCloseModalAdd">
      <edit-game></edit-game>
    </app-modal>
  </teleport>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import EditGame from "./EditGame.vue";
import GameItem from "./GameItem.vue";
export default {
  components: {
    EditGame,
    GameItem,
  },
  setup() {
    const store = useStore();
    // store.dispatch("game/getAllGamesAction");
    // pagination
    const page = ref(1);
    // const { itemList } = toRefs(props);
    // const data = Array.from(Array(24).keys()).map((item) => {
    //   return { index: item, value: `this_${item}` };
    // });
    const gameList = computed(() => store.state.game.gameList);
    const perPage = 5;
    const paginatedData = computed(() =>
      gameList.value.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const nextPage = () => {
      if (page.value !== Math.ceil(gameList.value.length / perPage)) {
        page.value += 1;
      }
    };

    const backPage = () => {
      if (page.value !== 1) {
        page.value -= 1;
      }
    };

    const goToPage = (numPage) => {
      page.value = numPage;
    };
    const firstPage = () => {
      page.value = 1;
    };
    const lastPage = () => {
      page.value = Math.ceil(gameList.value.length / perPage);
    };
    //pagination end
    const isOpenModalAdd = ref(false);
    function hanldeOpenModalAdd() {
      isOpenModalAdd.value = true; // mở modal
    }
    function hanldeCloseModalAdd() {
      isOpenModalAdd.value = false; // đóng modal
    }
    const keyword = ref();
    watch(keyword, (newKeyWord) => {
      store.dispatch("game/getItembySearchAction", newKeyWord);
    });

    return {
      isOpenModalAdd,
      hanldeOpenModalAdd,
      hanldeCloseModalAdd,
      keyword,
      gameList,
      paginatedData,
      perPage,
      page,
      nextPage,
      backPage,
      goToPage,
      firstPage,
      lastPage,
    };
  },
};
</script>

<style lang="scss">
.title {
  .search-form {
    input {
      width: 30rem;
      font-size: 2rem;
      border-radius: 1rem;
      padding: 0.5rem 2rem;
    }
  }
}
</style>
