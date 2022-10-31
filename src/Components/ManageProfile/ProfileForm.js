import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import ContactAndOtherInfo from "./ContactAndOtherInfo";
import EditContactAndOtherInfo from "./EditContactAndOtherInfo";

function ProfileForm(props) {
  const [showComponent, setShowComponent] = useState(false);

  const handleEditButton = () => {
    setShowComponent(true);
  };

  const handleCloseButton = () => {
    setShowComponent(false);
  };

  return (
    <div className="container">
      <div className="card-body">
        {showComponent ? (
          <button type="button" onClick={handleCloseButton} className="ml-1">
            <span>
              <i className="fa fa-close"></i>
            </span>
            <span> Close</span>
          </button>
        ) : (
          <button>
            <span>
              <i className="fas fa-angle-left"></i>
            </span>
            <span> Back</span>
          </button>
        )}
      </div>
      <h3 className="ml-4">Manage your profile</h3>
      <hr className="rounded"></hr>
      <p className="ml-4">
        Make sure we have it right! This info is used for your paycheck, taxes
        and ID cards.
      </p>
      <button
        type="button"
        className="btn btn-outline-primary ml-4"
        // onClick={()=>{dispatch(editData())}}
        onClick={handleEditButton}
      >
        <span>
          <i className="far fa-edit"></i>
        </span>
        <span>Edit Info</span>
      </button>

      <div className="container">
        {showComponent ? (
          <>
            <BasicInfo />
            <EditContactAndOtherInfo setShowComponent={setShowComponent} />
          </>
        ) : (
          <>
            <BasicInfo />
            <ContactAndOtherInfo />
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileForm;
