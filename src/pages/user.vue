<template>
  <v-app id="inspire">
    <v-app-bar height="80">
      <v-avatar rounded="0" size="150" class="ml-4" @click="router.go(-1)">
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
    </v-app-bar>

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
