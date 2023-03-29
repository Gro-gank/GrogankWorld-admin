<template>
  <form action="submit" class="form">
    <label for="name">Name:</label>
    <input type="text" :placeholder="newUser.name" v-model="newUser.name" />
    <label for="email">Email:</label>
    <input type="text" :placeholder="newUser.email" v-model="newUser.email" />
    <label for="email">Password:</label>
    <input
      type="text"
      :placeholder="newUser.password"
      v-model="newUser.password"
    />
    <label for="birthday">Birthday:</label>
    <input
      type="text"
      :placeholder="newUser.birthday"
      v-model="newUser.birthday"
    />
    <label for="name">Avatar url:</label>
    <input type="text" :placeholder="newUser.avatar" v-model="newUser.avatar" />
    <label for="type">Type:</label>
    <select name="" id="" v-model="newUser.type">
      <option value="ADMIN">ADMIN</option>
      <option value="CLIENT">CLIENT</option>
    </select>
    <div class="btn-danger" @click="handleSubmit">Save</div>
  </form>
  <div class="overview-avatar">
    <img :src="newUser.avatar" alt="" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    user: {
      type: Object,
    },
  },
  setup(props) {
    let newUser = reactive({
      name: "",
      email: "",
      password: "",
      birthday: "",
      type: " ",
      avatar: "",
      userId: "",
    });
    const { user } = toRefs(props);
    const store = useStore();
    if (user.value) {
      newUser.name = user.value.name;
      newUser.email = user.value.email;
      newUser.password = user.value.password;
      newUser.birthday = user.value.birthday;
      newUser.avatar = user.value.avatar;
      newUser.type = user.value.type;
      newUser.userId = user.value.userId;
    }
    const handleUpdateUser = () => {
      store.dispatch("user/updateUserAction", newUser);
    };
    const handleAddUserUser = () => {
      store.dispatch("user/addUserAction", newUser);
    };
    const handleSubmit = () => {
      if (user.value) {
        handleUpdateUser();
      } else {
        handleAddUserUser();
      }
    };

    console.log("user.value.userId", newUser);

    return { handleSubmit, newUser };
  },
};
</script>

<style lang="scss">
.form {
  display: grid;
  width: 90%;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--light-color);
  margin: 1rem 5rem;
  label {
    margin-top: 2rem;
  }
  input {
    height: 3rem;
    font-size: 2rem;
    border-radius: 0.5rem;
    padding-left: 1rem;
  }
  select {
    height: 3rem;
    width: 10rem;
    border-radius: 0.5rem;
  }
  .btn-danger {
    width: 9rem;
    margin-left: 20rem;
  }
}
.overview-avatar {
  width: 28%;
  margin: 2rem;
  img {
    width: 22rem;
    height: 25rem;
    border-radius: 1rem;
    border: 0.5rem solid var(--light-yellow);
  }
}
</style>
