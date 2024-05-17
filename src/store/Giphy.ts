import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useGiphy = defineStore("giphy", () => {
  const keyOne = import.meta.env.VITE_GIPHY_KEY_ONE;
  const keyTwo = import.meta.env.VITE_GIPHY_KEY_TWO;
  // filter
  const onPage = ref(15);
  const page = ref(1);
  const searchData = ref();

  // data
  const dataGiphy = ref({});
  const listGiphy = ref([]);
  const currentGiphy = ref(null);
  const paginationData = ref({});
  const errorMessage = ref(null);

  async function fetchData() {
    const url = new URL("https://api.giphy.com/v1/gifs/search");
    url.searchParams.append("api_key", keyOne);
    url.searchParams.append("q", searchData.value);
    url.searchParams.append("limit", String(onPage.value));
    url.searchParams.append("offset", String(page.value));
    try {
      await fetch(url).then((response) => {
        response.json().then(async (data) => {
          if (data?.meta?.status === 200) {
            if (data?.data.length > 0) {
              dataGiphy.value = data;
              listGiphy.value = data.data;
              paginationData.value = data.pagination;
              console.log("====GIPHY DATA====", GIPHY_DATA.value);
            } else {
              await fetchStaticData();
            }
          } else {
            errorMessage.value = data?.meta?.msg;
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchStaticData() {
    const url = new URL("https://api.giphy.com/v1/stickers/random");
    url.searchParams.append("api_key", keyOne);
    url.searchParams.append("tag", "Not Found");
    url.searchParams.append("rating", "g");
    try {
      await fetch(url).then((response) => {
        response.json().then((data) => {
          if (data?.meta?.status === 200) {
            giphy.value = [data.data];
            paginationData.value = {};
          } else {
            errorMessage.value = data?.meta?.msg;
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchDataFromId(id: string) {
    const url = new URL(`https://api.giphy.com/v1/gifs/${id}`);
    url.searchParams.append("api_key", keyOne);
    url.searchParams.append("rating", "g");
    try {
      await fetch(url).then((response) => {
        response.json().then(async (data) => {
          if (data?.meta?.status === 200) {
            currentGiphy.value = data.data;
            console.log("=====CURENT GIPHY=====", GIPHY_CURRENT.value);
          } else {
            errorMessage.value = data?.meta?.msg;
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  const GIPHY_DATA = computed<object>(() => {
    return dataGiphy.value;
  });

  const GIPHY_LIST = computed<object>(() => {
    return listGiphy.value;
  });
  const GIPHY_CURRENT = computed<object>(() => {
    return currentGiphy.value;
  });
  const ERROR_MESSAGE = computed<object>(() => {
    return errorMessage.value;
  });
  const PAGINATION_DATA = computed<object>(() => {
    return paginationData.value;
  });

  return {
    page,
    onPage,
    searchData,

    // actions
    fetchData,
    fetchDataFromId,

    //getters
    GIPHY_LIST,
    GIPHY_CURRENT,
    PAGINATION_DATA,
    ERROR_MESSAGE,
  };
});
