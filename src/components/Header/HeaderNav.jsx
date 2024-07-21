import user from "./NavICons/user.svg";
import basket from "./NavICons/basket.svg";

function HeaderNav() {
  return (
    <div className="header__navBlock">
      <nav>
        <ol>
          <a href="">
            <li>new & Featured</li>
          </a>
          <a href="">
            <li>men</li>
          </a>
          <a href="">
            <li>women</li>
          </a>
        </ol>
      </nav>

      <div className="header__navIc">
        <a href="">
          <img src={user} alt="" />
        </a>
        <a href="">
          <img src={basket} alt="" />
        </a>
      </div>
    </div>
  );
}

export default HeaderNav;
