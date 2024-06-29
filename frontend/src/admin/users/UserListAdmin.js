import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../../services/token.service";
import "../../static/css/auth/authPage.css";
import deleteFromList from "../../util/deleteFromList";
import getErrorModal from "../../util/getErrorModal";
import useFetchState from "../../util/useFetchState";

const jwt = tokenService.getLocalAccessToken();

export default function UserListAdmin() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useFetchState(
    [],
    `/api/v1/users`,
    jwt,
    setMessage,
    setVisible
  );
  const [alerts, setAlerts] = useState([]);

  const userList = users.map((user) => {
    return (
      <tr key={user.id} style={{ textAlign: "center", border: "2px solid black", backgroundColor: "rgba(255,255,255,0.3)"}}>
        <td className="p-2">{user.username}</td>
        <td className="p-2">{user.authority.authority}</td>
        <td className="p-2">
          <ButtonGroup>
            <Button
              size="sm"
              color="primary"
              aria-label={"edit-" + user.id}
              tag={Link}
              to={"/users/" + user.id}
            >
              Editar
            </Button>
            <Button
              size="sm"
              color="danger"
              aria-label={"delete-" + user.id}
              onClick={() =>
                deleteFromList(
                  `/api/v1/users/${user.id}`,
                  user.id,
                  [users, setUsers],
                  [alerts, setAlerts],
                  setMessage,
                  setVisible
                )
              }
            >
              Borrar
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  const modal = getErrorModal(setVisible, visible, message);

  return (
    <div className="auth-page-container">
      <h1 className="text-center" style={{ marginTop: 125, marginBottom: 30 }}>Usuarios</h1>
      {alerts.map((a) => a.alert)}
      {modal}
      <div className="auth-form-container2">
        <Button className="auth-button" tag={Link} to="/users/new">
          Añadir Usuario
        </Button>
        <table className="mt-4" style={{color: "#1f324f"}}>
          <thead>
            <tr style={{ textTransform: "uppercase", textAlign: "center", border: "2px solid black", backgroundColor: "rgba(255,255,255,0.9)" }}>    
              <th className="p-2">Usuario</th>
              <th className="p-2">Rol</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="p-2">{userList}</tbody>
        </table>
      </div>
    </div>
  );
}
