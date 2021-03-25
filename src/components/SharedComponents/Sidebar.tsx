import React from "react";
import { List, Avatar } from "antd";
import {
  managerMenuOptions,
  studentMenuOptions,
} from "../../utils/data/menuOptions";
import MenuOption from "../../utils/interfaces/MenuOption";
import { Link, useHistory } from "react-router-dom";
import "../../css/sidebar.css";

const Sidebar: React.FC = () => {
  const history = useHistory();

  return (
    <List
      className="mt-3"
      itemLayout="horizontal"
      dataSource={managerMenuOptions}
      renderItem={(menuOption: MenuOption) => {
        const style =
          menuOption.link === history.location.pathname ? "selected" : "";
        return (
          <List.Item className={"px-3 " + style}>
            <List.Item.Meta
              //avatar={React.createElement(menuOption.icon)}
              title={
                <div>
                  <Link
                    to={menuOption.link}
                    className="d-flex align-items-center sidebar-link"
                  >
                    {React.createElement(menuOption.icon)}
                    <span className="ml-2">{menuOption.name}</span>
                  </Link>
                </div>
              }
            />
          </List.Item>
        );
      }}
    ></List>
  );
};

export default Sidebar;
