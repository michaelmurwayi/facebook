<template>
    <!-- Navbar-->
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #3b5998;">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <h3>facebook</h3>
      <!-- Search form -->

    <!-- Center elements -->
    <ul class="navbar-nav flex-row d-none d-md-flex">
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-users fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">2</span>
        </a>
      </li>
      
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-home fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-shopping-bag fa-lg"></i></span>
        </a>
      </li>

    </ul>
    <!-- Center elements -->
      <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style="min-width: 125px;"
        />
        <span class="input-group-text border-0 d-none d-lg-flex"
          ><i class="fas fa-search"></i
        ></span>
      </form>
    </div>
    <!-- Left elements -->

    <!-- Right elements -->
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style="color:white;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style="color:white;">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" style="color:white;" aria-disabled="true"
            >Account</a
          >
        </li>
      </ul>
    <!-- Right elements -->
  </div>
</nav>
<!-- Navbar -->
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style scoped>
h2{
    color: aliceblue;
}
.d-flex{
    position: relative;
    left: 0;
}
h3{
  font-weight: 800;
  color: white;
}
nav{
  background-color: 3B5998;
}
.input-group {
  width: auto;
}
a {
  color: aliceblue; 
}
.input-group input,
.input-group .form-notch,
.input-group .form-notch-trailing {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.input-group button {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
</style>