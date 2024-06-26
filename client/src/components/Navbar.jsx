import React from 'react'

function Navbar() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  function logout(){
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Belrooms</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fa-solid fa-bars" style = {{color:'white'}}></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-10">
              {user ? (
                <>
                  <div class="dropdown" >
                    <button class="btn btn-outline-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i>
                    </button>
                    <ul class="dropdown-menu ">
                      <li><a class="dropdown-item" href="/profile">Profile</a></li>
                      <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/register">Register</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
