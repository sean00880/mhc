import Link from "next/link";

const Menu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item">
        <Link legacyBehavior href='/'>
            Home
          </Link>
          
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/#about">
            About
          </Link>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Services
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/mowing">
                Mowing
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/blowing">
                Blowing
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/edging">
                Edging
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/tree-shrub-care">
                Tree/Shrub Care
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/mulching">
                Mulching
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/hardscaping">
                Hardscaping
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/#process">
            Process
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/#whychooseus">
            Why Choose Us
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/#testimonials">
            Testimonials
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
