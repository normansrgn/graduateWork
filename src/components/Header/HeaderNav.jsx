function HeaderNav() {
  return (
    <div className="header__navBlock">
      <nav>
        <ol>
          <li>new & Featured</li>
          <li>men</li>
          <li>women</li>
          <li>Kids</li>
        </ol>
      </nav>

      <div className="header__form">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default HeaderNav;
