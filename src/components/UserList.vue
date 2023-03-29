<template>
  <div class="title">
    <h3>User Management</h3>
    <div class="btn" @click="hanldeOpenModalAdd">+ Add</div>
  </div>
  <div class="list">
    <div class="item" v-for="(user, index) in userList" :key="index">
      <user-item :user="user"></user-item>
    </div>
  </div>
  <teleport to="#app">
    <app-modal :isOpen="isOpenModalAdd" :handelCloseModal="hanldeCloseModalAdd">
      <edit-user></edit-user>
    </app-modal>
  </teleport>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import UserItem from "./UserItem.vue";
import EditUser from "./EditUser.vue";
import { randomId } from "@/utils/myUtils";
export default {
  components: { UserItem, EditUser },
  setup() {
    const store = useStore();
    store.dispatch("user/getAllUserAction");
    const router = useRouter();
    const userList = computed(() => store.state.user.userList);
    const handleDeleteUser = (payload) => {
      if (confirm("Do you really want to delete this user??")) {
        store.dispatch("user/deleteUserAction", payload);
      } else router.push("#");
    };
    console.log("id", randomId());
    const isOpenModalAdd = ref(false);
    function hanldeOpenModalAdd() {
      isOpenModalAdd.value = true; // mở modal
    }
    function hanldeCloseModalAdd() {
      isOpenModalAdd.value = false; // đóng modal
    }
    return {
      userList,
      handleDeleteUser,
      hanldeOpenModalAdd,
      hanldeCloseModalAdd,
      isOpenModalAdd,
    };
  },
};
</script>

<style lang="scss">
.title {
  display: flex;
  justify-content: space-between;
}
.list {
  margin-top: 2rem;
  .item {
    display: flex;
    margin: 2rem 1rem;
    border-bottom: 0.1rem solid #2a2a2a;
  }
}
</style>
