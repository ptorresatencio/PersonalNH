import React, { useState } from "react";
import SettingsStl from "./SettingsStl";
import { useDispatch, useSelector } from "react-redux";
import QhatuAction from "../../core/actions/qhatuAction";
import AuthenticationService from "../../core/services/AuthenticationService";
import { useHistory } from "react-router-dom";

const SettingsSfl = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userViewData = useSelector((state) => state.userData);
  const [userData, setUserData] = useState(userViewData);

  const handleChange = (change, value) => {
    if (value === "name") {
      setUserData({ ...userData, name: change });
    } else if (value === "last_name") {
      setUserData({ ...userData, last_name: change });
    } else if (value === "document_number") {
      setUserData({ ...userData, document_number: change });
    }
  };

  const update = async () => {
    try {
      const data = {
        customerId: userData.id,
        firstName: userData.name,
        lastName: userData.last_name,
        documentNumber: userData.document_number,
      };

      console.log("calling", { data });

      dispatch(QhatuAction.backdropAction(true));
      const resultSignUp = await AuthenticationService.SignUp(data);
      dispatch(QhatuAction.backdropAction(false));

      if (resultSignUp.success) {
        dispatch(
          QhatuAction.modalAction(
            true,
            () => {
              history.push("/home");
              dispatch(QhatuAction.modalAction(false));
            },
            "Los datos del usuario fueron actualizados correctamente"
          )
        );
        dispatch(
          QhatuAction.userDataAction({
            name: resultSignUp.data.firstName,
            last_name: resultSignUp.data.lastName,
            document_number: resultSignUp.data.documentNumber,
          })
        );
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <SettingsStl
      userData={userData}
      handleChange={handleChange}
      update={update}
    ></SettingsStl>
  );
};

export default SettingsSfl;
