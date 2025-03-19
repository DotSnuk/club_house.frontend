import axios from 'axios';

export async function postCreateUser(data) {
  const axiosResponse = axios
    .post('/api/createUser', data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return axiosResponse;
}

export async function postLoginUser(data) {
  console.log(data);
  const axiosResponse = axios
    .post('/api/login', data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return axiosResponse;
}

export async function getForums() {
  const axiosResponse = axios
    .get('/api/getForums')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return axiosResponse;
}

export async function getForumWithId(id) {
  const axiosResponse = axios
    .get(`/api/getForumWithId/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return axiosResponse;
}

export async function getPosts(id) {
  const axiosResponse = await axios.get(`/api/getPosts/${id}`);
  return axiosResponse.data;
}

export async function postPost(data) {
  const axiosResonse = await axios.post(`/api/postPost`, data);
  return axiosResonse.data;
}

export async function postUpdateAdminStatus(data) {
  const axiosResponse = await axios.post(`/api/postAdmin`, data);
  return axiosResponse.data;
}
