<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row class="pa-4">
          <v-col cols="12">
            <h2 class="text-center text-h3">{{ GIPHY_CURRENT?.title || 'No Title' }}</h2>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center justify-center mx-auto">
            <v-img width="100%" height="auto" cover :src="GIPHY_CURRENT?.images?.original?.url"></v-img>
          </v-col>
          <v-col cols="12" v-if="ERROR_MESSAGE" class="d-flex align-center justify-center pa-10">
            <span class="text-error">{{ ERROR_MESSAGE }}</span>
          </v-col>
          <v-col cols="12" class="d-flex align-center justify-center pa-10">
            <span class="text-blue text-decoration-underline cursor-pointer text-h4"
              @click="router.push({ path: '/user', query: { userId: GIPHY_CURRENT?.id } })">
              {{ GIPHY_CURRENT?.user?.username || 'No username' }}</span>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useGiphy } from "../store/Giphy"
const { ERROR_MESSAGE, GIPHY_CURRENT } = storeToRefs(useGiphy())
const { fetchDataFromId } = useGiphy()
const router = useRouter()
const route = useRoute()

onBeforeMount(async () => {
  await fetchDataFromId(route.query.id)
})



</script>
