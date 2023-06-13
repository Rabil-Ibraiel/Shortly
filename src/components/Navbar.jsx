import styled from "styled-components";

function Navbar() {
  return (
      <div>
        <nav class="navbar mb-2 navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand fs-3 fw-bold" href="#">
              Shortly
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul
                class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              >
                
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                  Pricing
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                  Resources
                  </a>
                </li>
              </ul>
              <Sign>
                <Button className="sign-in">Login</Button>
                <Button>
                  Sign up
                </Button>
              </Sign>
            </div>
          </div>
        </nav>
      </div>
  );
}


const Button = styled.button`
    font-size: 0.8rem;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    outline: none;
    border: none;
    background-color: var(--primary-cyan);
    color: var(--primary-light);
    margin-top: 2rem;
    font-weight: 700;
`

const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .sign-in {
    background-color: transparent;
    color: var(--secondary-gray);
  }

  Button {
    margin-top: 0;
  }
`


export default Navbar;
