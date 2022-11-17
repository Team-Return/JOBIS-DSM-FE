import Logo from "../../Assets/Logo.png";
import Search from "../../Assets/search.svg";
import Bell from "../../Assets/bell.svg";
import My from "../../Assets/my.svg";
import * as _ from "./Header.style";

const Header = () => {
  return (
    <_.Container>
      <_.Wrapper>
        <img width={100} src={Logo} alt="Logo" />
        <_.Item>Menu</_.Item>
        <_.Item>Menu</_.Item>
        <_.Item>Menu</_.Item>
        <_.Item>Menu</_.Item>
        <_.Item>Menu</_.Item>
      </_.Wrapper>
      <_.Wrapper>
        <_.Img src={Search}></_.Img>
        <_.Img src={Bell}></_.Img>
        <_.Img src={My}></_.Img>
      </_.Wrapper>
    </_.Container>
  );
};

export default Header;
