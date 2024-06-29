import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem, Nav, NavbarText, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import tokenService from './services/token.service';
import jwt_decode from "jwt-decode";

function AppNavbar() {
    const [roles, setRoles] = useState([]);
    const [username, setUsername] = useState("");
    const jwt = tokenService.getLocalAccessToken();
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        if (jwt) {
            setRoles(jwt_decode(jwt).authorities);
            setUsername(jwt_decode(jwt).sub);
        }
    }, [jwt])

    let adminLinks = <></>;
    let ownerLinks = <></>;
    let userLogout = <></>;
    let publicLinks = <></>;

    roles.forEach((role) => {
        if (role === "ADMIN") {
            adminLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white", marginRight: 10, marginLeft: 10 }} tag={Link} to="/createGame">Crear Partida</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white", marginRight: 10 }} tag={Link} to="/joinGame">Unirse a Partida</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white", marginRight: 10 }} tag={Link} to="/users">Gestionar Usuarios</NavLink>
                    </NavItem>
                </>
            )
        }
        if (role === "PLAYER") {
            ownerLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white", marginRight: 10, marginLeft: 10 }} tag={Link} to="/createGame">Crear Partida</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white", marginRight: 10 }} tag={Link} to="/joinGame">Unirse a Partida</NavLink>
                    </NavItem>
                </>
            )
        }
    })

    if (!jwt) {
        publicLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white", marginRight: 10 }} id="register" tag={Link} to="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white", marginRight: 10 }} id="login" tag={Link} to="/login">Login</NavLink>
                </NavItem>
            </>
        )
    } else {
        userLogout = (
            <>
                <NavbarText style={{ color: "white", marginRight: 10 }}>{username}</NavbarText>
                <NavItem className="">
                    <NavLink style={{ color: "white", marginRight: 10 }} id="logout" tag={Link} to="/logout">Logout</NavLink>
                </NavItem>
            </>
        )

    }

    return (
        <div>
            <Navbar expand="md" dark style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
                <NavbarBrand href="/">
                    <img alt="logo" src="/d.png" style={{ height: 40, width: 40, marginRight: 10 }} />
                    DIXIT
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="ms-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="me-auto mb-2 mb-lg-0" navbar>
                        {adminLinks}
                        {ownerLinks}
                    </Nav>
                    <Nav className="ms-auto mb-2 mb-lg-0" navbar>
                        {publicLinks}
                        {userLogout}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;