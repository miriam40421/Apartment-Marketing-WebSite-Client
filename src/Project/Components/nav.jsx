import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
// import './style.css'

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CategoryIcon from '@mui/icons-material/Category';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Tooltip } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const Nav = () => {
  return <>
    <div id="nav">
      <div>
        <img className="n" id="mylogo" src="logo5.png"></img>
      </div>


      <Tooltip title="התחברות" >
        <NavLink className="n " to='login' ><PersonAddAltIcon id="a" ></PersonAddAltIcon></NavLink></Tooltip>
      <Tooltip title="כל הדירות">
        <NavLink className="n" to='apartment'> <HomeIcon id="b" ></HomeIcon></NavLink>
      </Tooltip>
      <Tooltip title="מפרסמים">
        <NavLink className="n" to='advertiser'> <Diversity3Icon id="c" ></Diversity3Icon></NavLink>
      </Tooltip>
      <Tooltip title="קטגוריות">
        <NavLink className="n" to='category'> <CategoryIcon id="d" ></CategoryIcon></NavLink>
      </Tooltip>
      <Tooltip title="כל הערים">
        <NavLink className="n" to='city'> <LocationCityIcon id="e" ></LocationCityIcon></NavLink>
      </Tooltip>

    </div>

  </>
}