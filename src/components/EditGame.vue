<template>
  <form action="submit" class="form">
    <label for="name">Name :</label>
    <input type="text" v-model="newGame.name" />
    <label for="name">Developer :</label>
    <input type="text" v-model="newGame.developer" />
    <label for="name">Release :</label>
    <input type="text" v-model="newGame.release" />
    <div class="select-catgory">
      <label for="">Category :</label>
      <div class="category-option">
        <label for="">
          <input
            type="checkbox"
            value="action"
            v-model="newGame.categoryId"
          />Action
        </label>
        <label for="">
          <input type="checkbox" value="fps" v-model="newGame.categoryId" />FPS
        </label>
        <label for="">
          <input type="checkbox" value="tps" v-model="newGame.categoryId" />TPS
        </label>
        <label for="">
          <input
            type="checkbox"
            value="hack&slash"
            v-model="newGame.categoryId"
          />Hack & Slash
        </label>
      </div>

      <div class="category-option">
        <label for="">
          <input
            type="checkbox"
            value="adventure"
            v-model="newGame.categoryId"
          />Adventure
        </label>
        <label for="">
          <input
            type="checkbox"
            value="open-world"
            v-model="newGame.categoryId"
          />Open World
        </label>
        <label for="">
          <input type="checkbox" value="rpg" v-model="newGame.categoryId" />RPG
        </label>
        <label for="">
          <input
            type="checkbox"
            value="horror"
            v-model="newGame.categoryId"
          />Horror
        </label>
        <label for="">
          <input
            type="checkbox"
            value="survival"
            v-model="newGame.categoryId"
          />Survival
        </label>
        <label for="">
          <input
            type="checkbox"
            value="souls-like"
            v-model="newGame.categoryId"
          />Souls-like
        </label>
      </div>
      <div class="category-option">
        <label for="">
          <input
            type="checkbox"
            value="sport"
            v-model="newGame.categoryId"
          />Sport
        </label>
        <label for="">
          <input
            type="checkbox"
            value="racing"
            v-model="newGame.categoryId"
          />Racing
        </label>
        <label for="">
          <input
            type="checkbox"
            value="footbal"
            v-model="newGame.categoryId"
          />Football/Soccer
        </label>
        <label for="">
          <input
            type="checkbox"
            value="tennis"
            v-model="newGame.categoryId"
          />Tennis
        </label>
        <label for="">
          <input
            type="checkbox"
            value="basketball"
            v-model="newGame.categoryId"
          />Basketball
        </label>
        <label for="">
          <input
            type="checkbox"
            value="wresling"
            v-model="newGame.categoryId"
          />Wresling
        </label>
      </div>
      <div class="category-option">
        <label for="">
          <input
            type="checkbox"
            value="Strategy"
            v-model="newGame.categoryId"
          />Strategy
        </label>
        <label for="">
          <input
            type="checkbox"
            value="turn-based-game"
            v-model="newGame.categoryId"
          />Turn based game
        </label>
        <label for="">
          <input
            type="checkbox"
            value="real-time-strategy"
            v-model="newGame.categoryId"
          />Real-time strategy
        </label>
        <label for="">
          <input
            type="checkbox"
            value="tower-defense-games"
            v-model="newGame.categoryId"
          />Tower defense games
        </label>
      </div>
      <div class="category-option">
        <label for="">
          <input
            type="checkbox"
            value="Order"
            v-model="newGame.categoryId"
          />Order
        </label>
        <label for="">
          <input
            type="checkbox"
            value="indie"
            v-model="newGame.categoryId"
          />Indie
        </label>
        <label for="">
          <input
            type="checkbox"
            value="simulation"
            v-model="newGame.categoryId"
          />Simulation
        </label>
        <label for="">
          <input
            type="checkbox"
            value="uzzle-games"
            v-model="newGame.categoryId"
          />Puzzle Games
        </label>
        <label for="">
          <input
            type="checkbox"
            value="card-game"
            v-model="newGame.categoryId"
          />Card game
        </label>
        <label for="">
          <input
            type="checkbox"
            value="fighting"
            v-model="newGame.categoryId"
          />Fighting
        </label>
        <label for="">
          <input
            type="checkbox"
            value="side-scroller"
            v-model="newGame.categoryId"
          />Side scroller
        </label>
      </div>
    </div>
    <label for="name">Description :</label>
    <ckeditor
      class="ckeditor"
      :editor="editor"
      v-model="newGame.description"
      :config="editorConfig"
    ></ckeditor>

    <label for="name">Price ($):</label>
    <input type="text" v-model="newGame.price" />
    <div class="is-sale">
      <label for="sale">Is Sale :</label>

      <label for="yes" class="form-check-label">
        Yes<input
          type="radio"
          id="yes"
          name="is-sale"
          value="true"
          v-model="newGame.isSale"
        />
        <span class="checkmark"></span>
      </label>

      <label for="no" class="form-check-label"
        >No
        <input
          type="radio"
          id="no"
          name="is-sale"
          value="false"
          v-model="newGame.isSale"
        />
        <span class="checkmark"></span>
      </label>
    </div>
    <label for="name">Sale Price ($):</label>
    <input type="text" v-model="newGame.salePrice" />
    <label for="name">Sale View :</label>
    <input type="text" v-model="newGame.view" />
    <label for="name">Sale Rate :</label>
    <input type="text" v-model="newGame.rate" />
    <label for="name">Type :</label>
    <select name="" id="" v-model="newGame.type">
      <option value="game">GAME</option>
      <option value="software">SOFTWARE</option>
    </select>

    <div class="image-title">
      <label for="">Image title: </label>
      <input type="text" v-model="newGame.imageTitle" />

      <div class="review-imageTitle">
        <img :src="newGame.imageTitle" alt="" />
      </div>
    </div>
    <div class="image-title">
      <label for="">Image span: </label>
      <input
        class="image-title-input"
        type="text"
        v-model="newGame.imageSpan"
      />

      <div class="review-span">
        <img :src="newGame.imageSpan" alt="" />
      </div>
    </div>
    <div class="image-gallery">
      <label for="">Image gallery: </label>
      <div v-for="(image, index) in newGame.imageGalery" :key="index">
        <div class="input-place">
          <input
            class="gallery-input"
            type="text"
            v-model="newGame.imageGalery[index]"
          />
          <div class="btn-del" @click="handleRemoveField(index)">x</div>
        </div>

        <div class="review-image-gallery">
          <img :src="image" alt="" />
        </div>
      </div>
      <div>
        <button class="btn-add" @click.prevent="handleAddGallery">+</button>
      </div>
    </div>
    <div class="game-traler">
      <label for="">Item trailer: </label>
      <div v-for="(trailer, index) in newGame.trailer" :key="index">
        <div class="input-place">
          <input
            class="trailer-input"
            type="text"
            v-model="newGame.trailer[index]"
          />
          <div class="btn-del" @click="handleRemoveFieldTrailer(index)">x</div>
        </div>

        <iframe
          width="560"
          height="315"
          :src="trailer"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <button class="btn-add" @click.prevent="handleAddTrailer">+</button>
      </div>
    </div>
    <label for="name">Spec :</label>
    <ckeditor
      class="ckeditor"
      :editor="editor"
      v-model="newGame.spec"
      :config="editorConfig"
    ></ckeditor>
    <div class="button-area">
      <div class="btn" @click="handleSubmit">Save</div>
    </div>
  </form>
</template>

<script>
// import { reactive, toRefs } from "vue";
import { randomId } from "@/utils/myUtils";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    game: {
      type: Object,
    },
  },
  setup(props) {
    let newGame = reactive({
      name: "",
      developer: "",
      release: "",
      description: "",
      spec: "",
      imageGalery: [],
      imageSpan: "",
      imageTitle: "",
      price: "",
      isSale: "",
      salePrice: "",
      trailer: [],
      type: "",
      view: 0,
      rate: 10,
      categoryId: [],
      itemId: randomId(),
    });
    const { game } = toRefs(props);
    if (game.value) {
      newGame.name = game.value.name;
      newGame.developer = game.value.developer;
      newGame.release = game.value.release;
      newGame.description = game.value.description;
      newGame.spec = game.value.spec;
      newGame.imageGalery = game.value.imageGalery;
      newGame.imageSpan = game.value.imageSpan;
      newGame.imageTitle = game.value.imageTitle;
      newGame.price = game.value.price;
      newGame.view = game.value.view;
      newGame.rate = game.value.rate;
      newGame.isSale = game.value.isSale;
      newGame.salePrice = game.value.salePrice;
      newGame.trailer = game.value.trailer;
      newGame.type = game.value.type;
      newGame.categoryId = game.value.categoryId;
      newGame.itemId = game.value.itemId;
    }
    const handleSubmit = () => {
      console.log("newGame", newGame.itemId);
      if (game.value) {
        handleUpdateGame();
      } else {
        handleAddGame();
      }
    };
    const store = useStore();
    const handleUpdateGame = () => {
      store.dispatch("game/updateGameAction", newGame);
    };
    const handleAddGame = () => {
      store.dispatch("game/addGameAction", newGame);
    };
    const handleAddGallery = () => {
      newGame.imageGalery.push("");
    };
    const handleRemoveField = (index) => {
      newGame.imageGalery.splice(index, 1);
    };
    const handleAddTrailer = () => {
      newGame.trailer.push("");
    };
    const handleRemoveFieldTrailer = (index) => {
      newGame.trailer.splice(index, 1);
    };

    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      newGame,
      handleAddGallery,
      handleRemoveField,
      handleAddTrailer,
      handleRemoveFieldTrailer,
      handleSubmit,
    };
  },
};
</script>

<style lang="scss">
.form {
  color: black;
  .ckeditor {
    color: black;
  }
  .is-sale {
    .form-check-label {
      display: inline-block;
      position: relative;
      cursor: pointer;
      font-size: 2rem;
      user-select: none;
      padding-left: 3rem;
      margin-bottom: 1rem;
      margin-left: 2rem;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        background: #eee;
        border-radius: 50%;
        &:hover {
          background: #ccc;
        }
        &::after {
          content: "";
          position: absolute;
          display: none;
        }
      }
    }
  }
  .form-check-label .checkmark:after {
    top: 50%;
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: solid 3px white;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .form-check-label input:checked ~ .checkmark {
    background: #2196f3;
  }
  .form-check-label input:checked ~ .checkmark:after {
    display: block;
  }

  .image-title {
    display: grid;
    margin-top: 1rem;
    border-top: 0.1rem solid var(--light-color);
    .image-title-input {
    }
    .review-imageTitle {
      margin-top: 2rem;
      text-align: center;
      img {
        width: 30rem;
        height: 35rem;
      }
    }
    .review-span {
      margin-top: 2rem;
      text-align: center;
      img {
        width: 38.4rem;
        height: 21.6rem;
      }
    }
  }
  .image-gallery {
    display: grid;
    margin-top: 1rem;
    border-top: 0.1rem solid var(--light-color);
    text-align: center;
    justify-content: center;
    align-items: center;
    .input-place {
      display: flex;
      .btn-del {
        font-size: 2rem;
        margin: 1.5rem;
        cursor: pointer;
        color: red;
      }
    }
    .gallery-input {
      width: 70rem;
      margin: 2rem 0;
    }
    .review-image-gallery {
      img {
        width: 38.4rem;
        height: 21.6rem;
      }
    }
  }
  .game-traler {
    display: grid;
    margin-top: 1rem;
    border-top: 0.1rem solid var(--light-color);
    text-align: center;
    justify-content: center;
    align-items: center;
    .input-place {
      display: flex;
      .btn-del {
        font-size: 2rem;
        margin: 1.5rem;
        cursor: pointer;
        color: red;
      }
    }
    .trailer-input {
      width: 70rem;
      margin: 2rem 0;
    }
  }
  .button-area {
    margin-top: 2rem;
    border-top: 0.1rem solid var(--light-color);
    .btn {
      float: right;
    }
  }
  .select-catgory {
    margin: 2rem 0;
    .category-option {
      font-size: 1.5rem;

      display: grid;
      grid-template-columns: auto auto auto;
      border-top: 0.1rem solid var(--light-color);
      label {
        margin: 1rem;
        input {
          margin: 2rem 1rem 0 0;
          height: 2rem;
          width: 2rem;
        }
      }
    }
  }
}
</style>
