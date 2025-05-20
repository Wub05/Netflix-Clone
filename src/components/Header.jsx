import { images } from "../constants/images";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="flex sticky  h-[10vh] bg-black text-white items-center top-0 z-1 transition-all duration-500 ease-in cursor-pointer">
      <div className="flex justify-around items-center w-full py-4">
        <div>
          <ul className="flex justify-around items-center gap-5">
            <li>
              <img src={images.Logo} alt="logo" width="100px" height="50px" />
            </li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-around items-center gap-5">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
