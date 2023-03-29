<template>
  <section class="showcase">
    <div class="video-container">
      <video src="video/trailer.mp4" autoplay muted loop></video>
    </div>
    <section class="content">
      <div class="form-box">
        <div class="form-value">
          <form @submit.prevent="handleSubmit">
            <h2 class="h2-login">Login</h2>
            <div class="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required v-model="userLogin.email" />
              <label for="">Email</label>
            </div>
            <div class="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required v-model="userLogin.password" />
              <label for="">Password</label>
            </div>
            <div class="forget">
              <label for=""
                ><input type="checkbox" />Remember Me
                <a href="#">Forget Password</a></label
              >
            </div>
            <button class="register-button">Log in</button>
          </form>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const userLogin = reactive({
      mail: "",
      password: "",
    });
    const handleSubmit = () => {
      store.dispatch("signin/signInAction", { userLogin, router });
    };
    return {
      userLogin,
      handleSubmit,
    };
  },
};
</script>

<style>
.showcase {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
  z-index: 999;
  top: 0;
  bottom: 0;
  object-fit: cover;
  position: absolute;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-container video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-container:after {
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}

.form-box {
  position: relative;
  width: 400px;
  height: 450px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.h2-login {
  font-size: 2em;
  color: #fff;
  text-align: center;
}
.inputbox {
  position: relative;
  margin: 30px 0;
  width: 310px;
  border-bottom: 2px solid #fff;
}
.inputbox label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  transition: 0.5s;
}
input:focus ~ label,
input:valid ~ label {
  top: -5px;
}
.inputbox input {
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0 35px 0 5px;
  color: #fff;
}
.inputbox ion-icon {
  position: absolute;
  right: 8px;
  color: #fff;
  font-size: 1.2em;
  top: 20px;
}
.forget {
  margin: -15px 0 15px;
  font-size: 0.9em;
  color: #fff;

  justify-content: space-between;
}

.forget label input {
  margin-right: 3px;
  width: 20px;
}
.forget label a {
  color: #fff;
  text-decoration: none;
  margin-left: 35px;
}
.forget label a:hover {
  text-decoration: underline;
}
.register-button {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
}
.register {
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}
.register p a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}
.register p a:hover {
  text-decoration: underline;
}
</style>
