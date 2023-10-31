import { Menu } from "antd";
//import { Link, useNavigate } from 'react-router-dom'
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";

//import MenuItem from 'antd/es/menu/MenuItem'
//import Logo from './Logo'

const MenuList = () => {
  return (
    <Menu
      onClick={(key) => {}}
      theme="dark "
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>

      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        Task
      </Menu.Item>

      <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key="task-1">Task 1</Menu.Item>
        <Menu.Item key="task-2">Task 2</Menu.Item>
        <Menu.SubMenu key="subtask" title="Subtask">
          <Menu.Item key="subtask-1"> Subtask1</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Management
      </Menu.Item>
      <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        Cuy
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
};
export default MenuList;
