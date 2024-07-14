function Header()
{ return(
  <>
  <header>
      <div className="navbar">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <div className="logo">
    <img src="data:image/png;base64,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" width={34} alt="" />
   </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#About">About-us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Departments">Departments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </header>
  
  
  </>
);

}
export default Header;