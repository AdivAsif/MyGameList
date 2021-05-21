import '../Style/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout, selectUser } from '../features/userSlice';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import useSound from 'use-sound';
import music from './music.mp3';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  const [play, { pause, isPlaying }] = useSound(music);

  const handleClick = () => {
    if (isPlaying) {
      pause();
      console.log('Hello');
    } else {
      play();
      console.log('Bye');
    }
  };

  return (
    <div className='header'>
      <div className="header_left">
        <img
          src="https://www.clipartmax.com/png/full/128-1287443_file-game-controller-icon-transparent.png"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input placeholder='Search' type="text" />
        </div>
      </div>

      {user ? (
        <div className="header_right">
          <HeaderOption Icon={HomeRoundedIcon} title='Home' />
          <HeaderOption
            Icon={MusicNoteIcon}
            title='Music'
            onClick={handleClick}
          />
          <HeaderOption Icon={ListRoundedIcon} title='My List' />
          <HeaderOption
            avatar={true}
            title='Profile'
          />
          <HeaderOption
            Icon={ExitToAppRoundedIcon}
            title='Sign Out'
            onClick={logoutOfApp}
          />
        </div>
      ) : (
        <div className="header_right">
          <HeaderOption Icon={HomeRoundedIcon} title='Home' />
          <HeaderOption
            Icon={MusicNoteIcon}
            title='Music'
            onClick={handleClick}
          />
          <HeaderOption Icon={AssignmentIcon} title='Register' />
        </div>
      )}
    </div>
  );
}

export default Header;
