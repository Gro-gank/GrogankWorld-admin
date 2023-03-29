<template>
  <div class="left-side-item">
    <img :src="user.avatar" />
  </div>
  <div class="right-side-item">
    <div>
      <h4>Name : {{ user.name }}</h4>
      <p>Email : {{ user.email }}</p>
      <p>Birthday : {{ user.birthday }}</p>
    </div>
    <div>
      <p>Created at : {{ user.createdAt }}</p>
      <p>Type : {{ user.type }}</p>
    </div>

    <div class="button-place">
      <button class="btn" @click="handleOpenModalEdit">Edit</button>
      <button
        v-if="user.type == 'CLIENT'"
        class="btn-danger"
        @click="handleDeleteUser(user.id)"
      >
        Delete
      </button>
    </div>
  </div>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalEdit"
      :handelCloseModal="handleCloseModalEdit"
    >
      <edit-user :user="user"></edit-user>
    </app-modal>
  </teleport>
</template>

<script>
import { ref } from "vue";
import EditUser from "./EditUser.vue";
export default {
  components: { EditUser },
  props: {
    user: {
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
