<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row class="pa-4">
          <v-col cols="12">
            <h2 class="text-center text-h3">{{ giphy?.title || 'No Title' }}</h2>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center justify-center mx-auto">
            <v-img width="100%" height="auto" cover :src="giphy?.images?.original?.url"></v-img>
          </v-col>
          <v-col cols="12" v-if="errorMessage" class="d-flex align-center justify-center pa-10">
            <span class="text-error">{{ errorMessage }}</span>
          </v-col>
          <v-col cols="12" class="d-flex align-center justify-center pa-10">
            <span class="text-blue text-decoration-underline cursor-pointer text-h4"
              @click="router.push({ path: '/user', query: { userId: giphy?.id } })">
              {{ giphy?.user?.username || 'No username' }}</span>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch, computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const giphyObject = ref(null)
const giphy = ref({})
const errorMessage = ref(null)
// watch the params of the route to fetch the data again
onBeforeMount(async () => {
  await fetchData(route.query.id)
})


async function fetchData(id: string) {
  const url = new URL(`https://api.giphy.com/v1/gifs/${id}`);
  url.searchParams.append('api_key', 'T8bTqT96o9S5wW05OrDLyBa9jHBfWiaL');
  url.searchParams.append('rating', 'g');
  try {
    await fetch(url)
      .then((response) => {
        response.json().then(async (data) => {
          if (data?.meta?.status === 200) {
            giphyObject.value = data;
            giphy.value = data.data;
          } else {
            errorMessage.value = data?.meta?.msg
          }
          console.log(giphyObject.value)
        });
      })
  } catch (error) {
    console.error(error);
  }
}
</script>
