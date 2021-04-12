import { Space } from 'antd';
import React from 'react';

function Header() {
    return (
        <div className="header" style={{ backgroundColor: 'yellow', height: '3rem' }}>
            <Space direction="vertical">
                {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
            </Space>
        </div>
    )
}

export default Header
