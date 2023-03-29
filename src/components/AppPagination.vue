<template>
  <div v-for="(item, index) in paginatedData" :key="index">
    <game-item :game="item"></game-item>
  </div>
  <button class="btn" @click="firstPage">First</button>
  <button @click="backPage" class="btn">Prev</button>
  <button
    v-for="numPage in Math.ceil(data.length / perPage)"
    :key="numPage"
    @click="() => goToPage(numPage)"
    class="btn"
  >
    {{ numPage }}
  </button>
  <button @click="nextPage" class="btn">Next</button>
  <button class="btn" @click="lastPage">Last</button>
</template>

<script>
import { computed, ref, toRefs } from "vue";
import GameItem from "./GameItem.vue";

export default {
  components: {
    GameItem,
  },
  props: {
    itemList: {
      type: Array,
    },
  },
  setup(props) {
    let page = ref(1);
    const { itemList } = toRefs(props);
    // const data = Array.from(Array(24).keys()).map((item) => {
    //   return { index: item, value: `this_${item}` };
    // });
    const data = itemList.value;
    const perPage = 5;
    const paginatedData = computed(() =>
      data.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const nextPage = () => {
      if (page.value !== Math.ceil(data.length / perPage)) {
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
      page.value = Math.ceil(data.length / perPage);
    };
    return {
      data,
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

<style></style>
