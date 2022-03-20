import axios, { AxiosResponse, Method } from "axios";

axios.interceptors.response.use(undefined, (error) => {
  const { status } = error.response;
  if (status === 404) {
    console.error("Ошибка 404.");
  }

  if (status === 500) {
    console.error("Ошибка 500.");
  }

  if (error.message === "Network Error") {
    console.error("Ошибка сети.");
  }

  throw error.response;
});

export const fetchTrendingNews = async (
  pageNumber = "1",
  pageSize = "10",
  location = "us"
): Promise<any> => {
  const method: Method = "GET";

  const options = {
    method: method,
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize,
      withThumbnails: "false",
      location: location,
    },
    headers: {
      "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "x-rapidapi-key": "8022472449msh632d59d6b05f912p1bdfcdjsn264aed6f7a10",
    },
  };

  const res: AxiosResponse = await axios.request(options);
  return res.data;
};

export const fetchSearchNews = async (
  q = "World",
  pageNumber = "1",
  pageSize = "10"
) => {
  const method: Method = "GET";

  const options = {
    method: method,
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
    params: {
      q: q,
      pageNumber: pageNumber,
      pageSize: pageSize,
      autoCorrect: "true",
      fromPublishedDate: "null",
      toPublishedDate: "null",
    },
    headers: {
      "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "x-rapidapi-key": "8022472449msh632d59d6b05f912p1bdfcdjsn264aed6f7a10",
    },
  };

  const res = await axios.request(options);
  return res.data;
};
