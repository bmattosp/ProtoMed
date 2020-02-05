<template>
  <div id="appProtomed">
    <!-- <nav>
  <a href="/patients">Pacientes</a> |
  <a href="/consults">Consultas Agendadas</a> 
    </nav>-->
    <nav class="navbar navbar-expand-sm bg-success navbar-dark">
      <a class="navbar-brand" href="#">
        <h1>PROTOMED</h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/patients">
            Pacientes
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/consults">Consultas Agendadas</a>
        </li>
      </ul>
    </nav>
    <div style="margin-top: 50px">
      <router-view />
    </div>
    <!-- <footer class="bd-footer text-muted " style="background-color:green">
      <div class="container-fluid p-3 p-md-5">
        <p>Construido por <b>Breno Mattos</b></p>
      </div>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: "appProtomed"

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
