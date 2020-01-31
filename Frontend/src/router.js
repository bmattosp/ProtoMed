import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/patients",
      name: "patients",
      component: () => import("./components/Patients")
    },
    {
      path: "/patients/:id",
      name: "patient-details",
      component: () => import("./components/PatientDetails")
    },
    {
      path: "/newPatient",
      name: "newPatient",
      component: () => import("./components/NewPatient")
    },
    {
      path: "/newConsult",
      name: "newConsult",
      component: () => import("./components/NewConsult")
    },
    {
      path: "/consults",
      name: "consults",
      component: () => import("./components/Consults")
    }
  ]
});