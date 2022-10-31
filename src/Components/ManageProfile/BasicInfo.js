import React from "react";
import { useSelector } from "react-redux";

function BasicInfo(props) {
  const contacts = useSelector((state) => state?.Reducer?.contact);

  return (
    <div className="container mt-5">
      <h4>Basic Information</h4>
      {contacts?.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <div className="mb-3">
                <div className="font-weight-light">First Name</div>
                <div>{item?.firstName}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Middle Name</div>
                <div>{item?.middleName}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Last Name</div>
                <div>{item?.lastName}</div>
              </div>
              <div>
                <div className="font-weight-light">SSN</div>
                <div>{item?.SSN}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BasicInfo;
