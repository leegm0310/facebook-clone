import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import PeopleIcon from "@material-ui/icons/People"  
import GroupWorkIcon from "@material-ui/icons/GroupWork"
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined"
import EventAvailableIcon from "@material-ui/icons/EventAvailable"
import HistoryIcon from "@material-ui/icons/History"
import BookmarkIcon from "@material-ui/icons/Bookmark"
import FlagIcon from "@material-ui/icons/Flag"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="" title="username" />
            <SidebarRow Icon={LocalHospitalIcon} title="코로나19 정보 센터" />
            <SidebarRow Icon={PeopleIcon} title="친구"/>
            <SidebarRow Icon={GroupWorkIcon} title="그룹"/>
            <SidebarRow Icon={LiveTvOutlinedIcon} title="동영상"/>
            <SidebarRow Icon={EventAvailableIcon} title="이벤트"/>
            <SidebarRow Icon={HistoryIcon} title="과거의 오늘"/>
            <SidebarRow Icon={BookmarkIcon} title="저장됨"/>
            <SidebarRow Icon={FlagIcon} title="페이지"/>
            <SidebarRow Icon={ExpandMoreIcon} title="더 보기"/>
        </div>
    )
}

export default Sidebar
