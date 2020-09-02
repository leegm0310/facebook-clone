import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"
import GamepadOutlinedIcon from "@material-ui/icons/GamepadOutlined"
import { Avatar, IconButton } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import TextsmsIcon from "@material-ui/icons/Textsms"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img 
                src="https://www.iconninja.com/files/565/4/933/google-gogle-network-logo-icon.png"
                alt=""
                />
                <div className="header__input">
                  <SearchIcon />
                  <input placeholder="Facebook 검색" 
                  type="text" />
                </div>
                

            </div>
            <div className="header__middle">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <LiveTvOutlinedIcon fontSize="large"/>
                </div>               
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                 <div className="header__option">
                    <GamepadOutlinedIcon fontSize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>이광민</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <TextsmsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
