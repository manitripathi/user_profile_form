import React from "react";
import { useSelector } from "react-redux";

function ContactAndOtherInfo(props) {
  const contacts = useSelector((state) => state?.Reducer?.contact);
  return (
    <div className="container mt-4">
      <h4>Contact Information</h4>
      {contacts?.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <div className="mb-3">
                <div className="font-weight-light">Address 1</div>
                <div>{item?.address1}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Address 2</div>
                <div>{item?.address2}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">City</div>
                <div>{item?.city}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">State/Province</div>
                <div>{item?.state}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Zip/Postal Code</div>
                <div>{item?.zip}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Home Phone</div>
                <div>{item?.home}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Office Phone</div>
                <div>{item?.office}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">E-mail</div>
                <div>{item?.email}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Alternate E-mail</div>
                <div>{item?.alternateEmail}</div>
              </div>
            </div>
          </div>
        );
      })}

      <h4>Other</h4>
      {contacts?.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <div className="mb-3">
                <div className="font-weight-light">Medicare Reason</div>
                <div>{item?.medicareReason}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Medicare Plan</div>
                <div>{item?.medicarePlan}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Medicare Begin Date</div>
                <div>{item?.medicareBeginDate}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Medicare Termination Date</div>
                <div>{item?.medicareTerminationDate}</div>
              </div>
              <div className="mb-3">
                <div className="font-weight-light">Benefit Salary - 01/01/20...</div>
                <div>{item?.benefitSalary}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactAndOtherInfo;
