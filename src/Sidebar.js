import React from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Crys The GOAT </h2>
                <h3>
                    <FiberManualRecordIcon />
                Sacre Crys
                </h3>
                </div>
                <CreateIcon />
            </div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOption title="Youtube"/>
        </div>
    )
}

export default Sidebar;
