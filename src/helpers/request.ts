const BASE_URL = "https://api.stage.adotel.net/";

function request(endpoint: string, method: string = "GET", body?: object) {
  let status: number;
  return fetch(BASE_URL + endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((responseJSON) => {
      return { responseJSON, status };
    })
    .catch(() => {
      return { responseJSON: { message: "server error!" }, status: status };
    });
}
export default request;
