<template>
  <div class="left-side-item">
    <img :src="game.imageTitle" />
  </div>
  <div class="right-side-item">
    <div>
      <h4>Name : {{ game.name }}</h4>
      <p>Developer : {{ game.developer }}</p>
    </div>
    <div>
      <p>Release : {{ game.release }}</p>
      <p>Type : {{ game.type }}</p>
    </div>

    <div class="button-place">
      <button class="btn" @click="handleOpenModalEdit">Edit</button>
      <button class="btn-danger" @click="handleDeleteUser(user.id)">
        Delete
      </button>
    </div>
  </div>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalEdit"
      :handelCloseModal="handleCloseModalEdit"
    >
      <edit-game :game="game"></edit-game>
    </app-modal>
  </teleport>
</template>

<script>
import { ref } from "vue";
import EditGame from "./EditGame.vue";
export default {
  components: { EditGame },
  props: {
    game: {
      type: Object,
    },
  },
  setup() {
    const isOpenModalEdit = ref(false);
    const handleOpenModalEdit = () => {
      isOpenModalEdit.value = true;
    };
    const handleCloseModalEdit = () => {
      isOpenModalEdit.value = false;
    };
    return {
      handleOpenModalEdit,
      handleCloseModalEdit,
      isOpenModalEdit,
    };
  },
};
</script>

<style lang="scss">
.left-side-item {
  margin-right: 2rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 0.1rem solid var(--light-yellow);
  }
}
.right-side-item {
  font-size: 1.7rem;
  display: flex;
  justify-content: space-between;
  div {
    width: 40rem;
  }
}
</style>
