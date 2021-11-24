import React, { useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({ handleMenuClick }) => {
    const [info, updateInfo] = useState({});

    /**
     * Format information from db
     * @param {Array<Object>} data data from db
     * @returns formatted data
     */
    const getTableInfo = data => {
        let obj = {};

        data.map(t => {
            if (Object.keys(obj).includes(t.TABLE_NAME)) {
                obj[t.TABLE_NAME] = [...obj[t.TABLE_NAME], t];
            } else {
                obj = { ...obj, [t.TABLE_NAME]: [t] }
            }

            return true;
        });

        return obj;
    }

    /**
     * When a table is selected from menu, show contents of that table
     * @param {String} tableName table name selected from menu
     */
    const handleClick = (isOpen, tableName) => {
        const query = `select * from ${tableName}`;

        isOpen && fetch(`/users?sqlquery='${query}'`)
            .then(res => res.json())
            .then(data => handleMenuClick(data))
            .catch(e => console.warn(e));
    }

    useEffect(() => {
        const query = 'SELECT * FROM information_schema.columns WHERE table_schema="testdb" ORDER BY table_name,ordinal_position';

        fetch(`/users?sqlquery='${query}'`)
            .then(res => res.json())
            .then(data => updateInfo(getTableInfo(data)))
            .catch(e => console.warn(e));
    }, [])

    return <ProSidebar>
        <SidebarHeader>testdb</SidebarHeader>
        {info &&
            <Menu iconShape="square">
                {Object.entries(info).map(([key, values]) =>
                    <SubMenu title={key} onOpenChange={isOpen => handleClick(isOpen, key)}>
                        {values.map(val => <SubMenu title={val.COLUMN_NAME}>
                            <MenuItem>{val.COLUMN_TYPE}</MenuItem>
                        </SubMenu>
                        )}
                    </SubMenu>
                )}
            </Menu>
        }
    </ProSidebar>;
}

export default Sidebar;
//onClick={handleClick(key)}