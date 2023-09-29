import axios from 'axios';

const API_KEY = '38929728-c9c9689bf16ca978c8f2f11e7'; // Вставьте ваш API ключ сюда
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = async (page, perPage, inputValue) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });
  const { data } = await axios.get(`${BASE_URL}?key=${API_KEY}&${params}`);
  return data.hits;
};

export default fetchImages;
