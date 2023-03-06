export const Footer = () => {
  return (
    <div className="main-color">
      <footer className="container d-flex flex-wrap justify-content-between align0item-center py-5 main-color">
        <p className="col-md-4 mb-0 text-white">©2023 myLibrary</p>
        <ul className="nav navbar-dark col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Search Books
            </a>
          </li>
          <li className="nav-item">
            <p className="nav-link px-2 text-white">|</p>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/elvis-espinoza/"
              className="nav-link px-2 text-white"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <p className="nav-link px-2 text-white">|</p>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              href="https://github.com/elvisEspinozaN/myLibrary"
              className="nav-link px-2 text-white"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
