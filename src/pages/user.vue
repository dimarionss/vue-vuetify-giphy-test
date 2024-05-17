<template>
  <v-app id="inspire">
    <AppBar />
    <v-main>
      <v-container>
        <v-row class="pa-4">
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-avatar size="300" class="ml-4" @click="router.go(-1)">
              <v-img width="100%" height="auto" cover :src="GIPHY_CURRENT?.user?.avatar_url"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center justify-center mx-auto">
            <span class="text-white cursor-pointer text-h4">{{ GIPHY_CURRENT?.user?.username }}</span>
          </v-col>
          <v-col cols="12" class="d-flex align-center justify-center pa-10">
            <a class="text-blue text-decoration-underline cursor-pointer text-h4"
              :href="GIPHY_CURRENT?.user?.profile_url" target="__blank">GIT PAGE</a>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppBar from '../components/AppBar.vue';
import { useGiphy } from "../store/Giphy"
const { GIPHY_CURRENT } = storeToRefs(useGiphy())
const { fetchDataFromId } = useGiphy()
const route = useRoute()
const router = useRouter()

onBeforeMount(async () => {
  console.log(route.params)
  console.log(GIPHY_CURRENT.value)
  if (!GIPHY_CURRENT.value) {
    await fetchDataFromId(route.query.userId)
  }

})
</script>
