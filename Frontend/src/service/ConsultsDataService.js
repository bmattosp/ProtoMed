import http from "../http-common";

class ConsultsDataService {
  getAll() {
    return http.get("/consults");
  }

  get(id) {
    return http.get(`/consults/${id}`);
  }

  create(data) {
    return http.post("/consults", data);
  }

  // update(id, data) {
  //   return http.put(`/consults/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/consults/${id}`);
  // }
}

export default new ConsultsDataService();