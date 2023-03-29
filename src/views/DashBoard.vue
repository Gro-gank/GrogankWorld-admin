<template>
  <section class="container">
    <div class="sidebar">
      <h3 class="title">Management</h3>
      <a @click="handleChooseOption('user')">
        <h3 class="sidebar-item" :class="{ active: option == 'user' }">User</h3>
      </a>
      <a @click="handleChooseOption('game')">
        <h3 class="sidebar-item" :class="{ active: option == 'game' }">
          Games
        </h3>
      </a>
      <a @click="handleChooseOption('software')">
        <h3 class="sidebar-item" :class="{ active: option == 'software' }">
          Softwares
        </h3>
      </a>
      <a @click="handleChooseOption('category')">
        <h3 class="sidebar-item" :class="{ active: option == 'category' }">
          Categories
        </h3>
      </a>
    </div>
    <div class="right-side">
      <user-list v-if="option == 'user'"></user-list>
      <games-list v-if="option == 'game'"></games-list>
      <softwares-list v-if="option == 'software'"></softwares-list>
      <category-list v-if="option == 'category'"></category-list>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import GamesList from "@/components/GamesList.vue";
import SoftwaresList from "@/components/SoftwaresList.vue";
import CategoryList from "@/components/CategoryList.vue";
import UserList from "@/components/UserList.vue";
import { useStore } from "vuex";
export default {
  components: { GamesList, SoftwaresList, CategoryList, UserList },
  setup() {
    const option = ref("user");
    const store = useStore();
    const handleChooseOption = (type) => {
      store.dispatch("game/getAllGamesAction");

      option.value = type;
    };
    return { handleChooseOption, option };
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  margin-top: 7rem;
  border: 0.5rem solid #2a2a2a;
  font-size: 2rem;
  color: var(--light-color);
  display: flex;
  .sidebar {
    width: 15%;
    position: relative;
    .title {
      text-align: center;
      padding-bottom: 2rem;
      color: var(--light-yellow);
    }
    .sidebar-item {
      padding: 1rem 1rem;

      width: 95%;
      height: 5rem;
      border: 0.1rem solid #2a2a2a;
      margin: 1rem 1rem;
      cursor: pointer;
      transition: 0.2s;
      border-radius: 1rem;
      &:hover {
        border-left: 1rem solid var(--light-yellow);
        color: var(--light-yellow);
      }
    }
  }
  .right-side {
    width: 83%;
    border: 0.1rem solid #2a2a2a;
    border-radius: 1rem;
    padding: 1rem;
  }
}
.sidebar-item.active {
  color: var(--light-yellow);
  border: 0.3rem solid #2a2a2a;
  border-left: 1rem solid var(--light-yellow);
}
</style>
