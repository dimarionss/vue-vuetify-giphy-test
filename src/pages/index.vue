<template>
  <v-app id="inspire">
    <v-app-bar height="80">
      <v-avatar rounded="0" size="150" class="ml-4">
        <svg viewBox="0 0 128 36" xmlns="http://www.w3.org/2000/svg" class="sc-1f039a7e-0 cArwE">
          <g>
            <g>
              <path fill="#fff"
                d="m22.6,12c-2,-1.9 -4.4,-2.4 -6.2,-2.4c-4.4,0 -7.3,2.6 -7.3,8c0,3.5 1.8,7.8 7.3,7.8c1.4,0 3.7,-0.3 5.2,-1.4l0,-3.5l-6.9,0l0,-6l13.3,0l0,12.1c-1.7,3.5 -6.4,5.3 -11.7,5.3c-10.7,0 -14.8,-7.2 -14.8,-14.3c0,-7.1 4.7,-14.4 14.9,-14.4c3.8,0 7.1,0.8 10.7,4.4l-4.5,4.4zm9.1,19.2l0,-27.2l7.6,0l0,27.2l-7.6,0zm20.1,-7.4l0,7.3l-7.7,0l0,-27.1l13.2,0c7.3,0 10.9,4.6 10.9,9.9c0,5.6 -3.6,9.9 -10.9,9.9l-5.5,0zm0,-6.5l5.5,0c2.1,0 3.2,-1.6 3.2,-3.3c0,-1.8 -1.1,-3.4 -3.2,-3.4l-5.5,0l0,6.7zm36.7,13.9l0,-10.3l-9.8,0l0,10.3l-7.7,0l0,-27.2l7.7,0l0,10.3l9.8,0l0,-10.3l7.6,0l0,27.2l-7.6,0zm24.2,-17.9l5.9,-9.3l8.7,0l0,0.3l-10.8,16l0,10.8l-7.7,0l0,-10.8l-10.3,-16l0,-0.3l8.7,0l5.5,9.3z"
                id="svg_2"></path>
            </g>
          </g>
        </svg>
      </v-avatar>

      <v-spacer></v-spacer>
      <v-text-field hide-details label="Search..." appent-icon="mdi-pen" variant="outlined" v-model="searchGif"
        clearable></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="giph, idx in giphy" :key="idx" cols="4">
            <v-img :width="giph?.images?.fixed_height?.width" :height="giph?.images?.fixed_height?.height"
              aspect-ratio="16/9" cover :src="giph?.images?.fixed_height?.url"
              @click="router.push({ path: '/giph', query: { id: giph?.id } })"></v-img>
            <v-btn block color="white" height="50px" @click="shareData(giph?.url, giph?.title)">
              <v-avatar rounded="0" size="50" class="pa-1">
                <v-img width="100%" cover src="/share.svg"></v-img>
              </v-avatar>
            </v-btn>
          </v-col>
          <v-col cols="12" v-if="errorMessage" class="d-flex align-center justify-center pa-10">
            <span class="text-error">{{ errorMessage }}</span>
          </v-col>
          <v-col cols="12" v-if="Object.keys(paginationData).length > 0">
            <Pagination v-model:on-page="pageOn" v-model:pagination="pagination"
              :total-pages="paginationData ? Math.ceil(paginationData?.total_count / paginationData?.count) : 1"
              :page="page" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Pagination from '../components/Pagination.vue';
const route = useRoute()
const router = useRouter()
const onPage = ref(15)
const page = ref(1)
const searchData = ref()
const giphyObject = ref(null)
const giphy = ref(null)
const paginationData = ref({})
const errorMessage = ref(null)
// watch the params of the route to fetch the data again
watch(() => route.params.id, fetchData, { immediate: true })



const pagination = computed({
  get() {
    return page.value
  },
  async set(value: number) {
    page.value = value
    await fetchData()
  }
})
const pageOn = computed({
  get() {
    return onPage.value
  },
  async set(value: number) {
    onPage.value = value
    await fetchData()
  }
})
const searchGif = computed({
  get() {
    return searchData.value
  },
  async set(value: string) {
    searchData.value = value
    await fetchData()
  }
})

async function shareData(url: string, text: string) {
  try {
    const data = {
      text: text,
      url: url,
    };
    await navigator.share(data);
  } catch (err) {
    console.error(err);
  }
}


async function fetchData() {
  const url = new URL('https://api.giphy.com/v1/gifs/search');
  url.searchParams.append('api_key', 'T8bTqT96o9S5wW05OrDLyBa9jHBfWiaL');
  url.searchParams.append('q', searchData.value);
  url.searchParams.append('limit', String(onPage.value));
  url.searchParams.append('offset', String(page.value));
  try {
    await fetch(url)
      .then((response) => {
        response.json().then(async (data) => {
          if (data?.meta?.status === 200) {
            if (data?.data.length > 0) {
              giphyObject.value = data;
              giphy.value = data.data;
              paginationData.value = data.pagination;
            } else {
              await fetchStaticData()
            }

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

async function fetchStaticData() {
  const url = new URL('https://api.giphy.com/v1/stickers/random');
  url.searchParams.append('api_key', 'T8bTqT96o9S5wW05OrDLyBa9jHBfWiaL');
  url.searchParams.append('tag', 'Not Found');
  url.searchParams.append('rating', 'g');
  try {
    await fetch(url)
      .then((response) => {
        response.json().then((data) => {
          if (data?.meta?.status === 200) {
            giphy.value = [data.data];
            paginationData.value = {}
          } else {
            errorMessage.value = data?.meta?.msg
          }
        });
      })
  } catch (error) {
    console.error(error);
  }
}
</script>
