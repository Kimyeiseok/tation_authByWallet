import React  from "react";
import { Menu, Dropdown, Avatar } from "antd";

import { useSelector, useDispatch } from 'react-redux'
import { signOut,} from 'redux/actions/Auth';
import { 
  EditOutlined, 
  SettingOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';



const menuItem = [
	{
		title: "Edit Profile",
		icon: EditOutlined ,
		path: "/app/dashboard/editProfile"
    },  
		// {
		// title: "Account Setting",
		// icon: SettingOutlined,
		// path: "/"
		// },
]

export const NavProfile = (props) => {
  const {userInfo} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const walletAddressShort = userInfo? userInfo.walletAddress.substring(0,6)+'...'+ userInfo.walletAddress.substring(38,42) : 'no address'

  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <Avatar size={45} src={userInfo && userInfo.profileImage} />
          <div className="pl-3">
            <h4 className="mb-0">{walletAddressShort}</h4>
            <span className="text-muted">{userInfo && userInfo.walletType}</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon className="mr-3" type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.legth + 1} onClick={e => dispatch(signOut())}>
            <span className="font-weight-semibold text-danger">
              <LogoutOutlined className="mr-3" width="2rem"/>
              <span >Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item>
          <Avatar src={userInfo && userInfo.profileImage} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
}



export default NavProfile
