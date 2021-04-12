import { DropboxOutlined, HomeOutlined, PlusCircleOutlined, ShoppingCartOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../scss/MenuLeft.scss';
const { Sider } = Layout;

function MenuLeft() {

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = (collapsed) => {
        setCollapsed(!collapsed)
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => onCollapse(collapsed)}>

            <div className="logo">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAvCAYAAABUiRJEAAAACXBIWXMAAAsSAAALEgHS3X78AAACuklEQVRogeWa/XHiMBDFN9dAKMEdHCU4FRwdhBJcgktIOnA6yHXAdUA6oARSwWaUWc0IY0ur/RBh7s34DwYs6/e8esiSHxAR/lf9MuDeAMA7ABzo2Dp5uU+u8WLSYrjzimODiEe81BkRt8p258cerzVp27UGjwoGdEbgu5VroNYAadlvqPx+r3z/CACdoiBT5YbRMwBM0oYl8CXw1pIbYFjqqY70W4uy39IwKql6CHiDT0kGcEMwjPEREQdvA1qAR3EMmKf65GlAK3COAUt/Z64GtATPGbAG7mpAa/CoUwX4EoyJAbcAT+88F3wJRm3APYEvwagMuDfwJRixAfcIHqU24KeCjwKYagPiiV7gKADfK+5m1TnxpJKk4JMQXFPO3HMGDrwUPKin8zidSe/4KakYLwPG0kRDA45JZ0paKvWzswFDWmJzA7TgmHQ+p9wY9zLgYszHIz5Ojgn4IARHaie08bLyPSfcrA24SvvcMQqg045vEgNiJ05kNBdIa0BH+dOnnBx47sXWlFvV2VW0LTEgy8bdtNjSut2jcH3uk9baD/Q5rAPuaP2ttp0eAI7MPj1kW2PceasKsBK3AuZzhqujBv6eDCiC15R9Ku0QsNJ8CMQtrIm7lC3dqPwpBvyl7BBJumNzJNc/7Tgu9I/C6q3wuz+ai2h2aT0N6OgfYV8w4EN1lcrAaxmCnOk1K9is0v6WBgyzh55R22/LNzO8QvCDhtfZuF2TNzOivDIg7AYPxm1+yxIeBAaEMHtiBFdv0LcrWcNDpQFxr78vGGBe8t8yCjxNCMZHz9wK8s6jj57wUgMOs+/Uqd4i7dfE/Rd4o0kN0CSnoyHkU/KKuX2tuAY8Jc/87vIIvCVxQ9Al1dfUCh4aPAxVqyU8MAxoVvJwA3jIGPDaGv6Wb12HCU4wIaR6eHH51PTqAPAFZ0TujB75em0AAAAASUVORK5CYII="
                    alt="logo"
                    style={{ width: '2.5rem', height: '2rem' }}
                />
            </div>

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">
                        Trang chủ
                    </Link>
                </Menu.Item>
                {/* <SubMenu key="sub1" title="Danh mục" icon={<ShoppingCartOutlined />}>
                    {data !== undefined && (
                        data?.categories?.map(category => (
                            <Menu.Item key={category.id}>
                                {category.name}
                            </Menu.Item>
                        ))
                    )}
                </SubMenu> */}
                <Menu.Item icon={<ShoppingCartOutlined />}>
                    <Link to="/categories">
                        Danh mục
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<DropboxOutlined />}>
                    <Link to="/new-products">
                        Sản phẩm mới thêm
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<PlusCircleOutlined />}>
                    <Link to="/add-item">
                        Thêm sản phẩm
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<UserOutlined />}>
                    <Link to="/contact-us">
                        Người dùng
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<SolutionOutlined />}>
                    Tiện ích
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default MenuLeft
