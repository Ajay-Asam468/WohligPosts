<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="danger">
        <ion-title class="ion-text-center">Wohlig Posts</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item
          button
          @click="buttonClick()"
          v-for="post in posts"
          :router-link="`/home/${post.id}`"
          :key="post.id"
        >
          <ion-thumbnail>
            <ion-img :src="post.url" alt="post.id"></ion-img>
          </ion-thumbnail>
          <ion-label class="ion-margin-start">{{ post.position }}</ion-label>
        </ion-item>
      </ion-list>
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header> -->

      <!-- <div id="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Ionic
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
      </div> -->
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonThumbnail,
  IonImg,
} from "@ionic/vue";
import axios from "axios";
// import Details from "../pages/Details";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      posts: [],
    };
  },
  name: "Home",
  // props: {
  //   posts,
  // },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonThumbnail,
    IonImg,
    // Details,
  },
  // computed: {
  //   posts() {
  //     return this.$store.getters.posts;
  //   },
  // },

  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/posts`);
      this.posts = res.data;
    } catch (e) {
      console.log(e);
    }
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-img {
  border-radius: 50%;
}
</style>