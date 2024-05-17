<template>
  <v-app id="inspire">
    <AppBar />
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="giph, idx in GIPHY_LIST" :key="idx" cols="4">
            <v-img :width="giph?.images?.fixed_height?.width" :height="giph?.images?.fixed_height?.height"
              aspect-ratio="16/9" cover :src="giph?.images?.fixed_height?.url"
              @click="router.push({ path: '/giph', query: { id: giph?.id } })"></v-img>
            <v-btn block color="white" height="50px" @click="shareData(giph?.url, giph?.title)">
              <v-avatar rounded="0" size="50" class="pa-1">
                <v-img width="100%" cover src="/share.svg"></v-img>
              </v-avatar>
            </v-btn>
          </v-col>
          <v-col cols="12" v-if="ERROR_MESSAGE" class="d-flex align-center justify-center pa-10">
            <span class="text-error">{{ ERROR_MESSAGE }}</span>
          </v-col>
          <v-col cols="12" v-if="Object.keys(PAGINATION_DATA).length > 0">
            <Pagination v-model:on-page="pageOn" v-model:pagination="pagination"
              :total-pages="PAGINATION_DATA ? Math.ceil(PAGINATION_DATA?.total_count / PAGINATION_DATA?.count) : 1"
              :page="page" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGiphy } from "../store/Giphy"
import { computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import Pagination from '../components/Pagination.vue';
import AppBar from '../components/AppBar.vue';
const { page, onPage, searchData, GIPHY_LIST, ERROR_MESSAGE, PAGINATION_DATA } = storeToRefs(useGiphy())
const { fetchData } = useGiphy()
const router = useRouter()


onBeforeMount(async () => {
  await fetchData()
})


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
</script>
