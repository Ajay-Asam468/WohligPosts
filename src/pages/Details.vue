<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="danger">
        <ion-title class="ion-text-center">Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- <Home :posts="post.skills" /> -->
      <ion-card>
        <ion-card-header>
          <ion-card-title
            ><p>Post:</p>
            {{ loadedpost.position }}</ion-card-title
          >
          <h2 v-if="!loadedpost">Could not find a memory for the given id.</h2>
          <!-- <h2 v-else>{{ loadedpost.position }}</h2> -->

          <!-- <ion-card-subtitle
            >Skills : HTML,CSS,Javascript,Vue JS,Node Js</ion-card-subtitle
          > -->
        </ion-card-header>

        <!-- <ion-card-content> Coursera Full Stack Certification </ion-card-content> -->
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <p>Skills :</p>
            {{ loadedpost.Skills }}</ion-card-title
          >
          <!-- <ion-card-subtitle
            >Skills : HTML,CSS,Javascript,Vue JS,Node Js</ion-card-subtitle
          > -->
        </ion-card-header>

        <!-- <ion-card-content> Coursera Full Stack Certification </ion-card-content> -->
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title
            ><p>Certification :</p>
            {{ loadedpost.Certification }}</ion-card-title
          >
          <!-- <ion-card-subtitle
            >Skills : HTML,CSS,Javascript,Vue JS,Node Js</ion-card-subtitle
          > -->
        </ion-card-header>

        <!-- <ion-card-content> Coursera Full Stack Certification </ion-card-content> -->
      </ion-card>

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

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
} from "@ionic/vue";
export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
  },
  data() {
    return {
      postId: this.$route.params.id,
    };
  },
  computed: {
    loadedpost() {
      return this.$store.getters.post(this.postId);
    },
    posts() {
      return this.$store.getters.posts;
    },
  },
};
</script>

<style>
p {
  color: red;
}
</style>