export const fetchApi = (url, method = "GET", body = {}) => {
  let state = {
    data: [],
    loading: true,
    error: false,
  };

  const raw = { ...body };

  console.log(raw)

  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(raw),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      state.data = data;
      state.loading = false;
      state.error = null;
    })
    .catch((err) => {
      (state.data = []), (state.loading = false), (state.error = err);
    });

  return state;
};
