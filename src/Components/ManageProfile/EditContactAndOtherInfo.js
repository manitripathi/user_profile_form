import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editData } from "../../Actions/actions";

function EditContactAndOtherInfo({ setShowComponent }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state?.Reducer?.contact);

  const onEditData = (data) => {
    console.log(data, "l");
    dispatch(editData(data));
    // console.log(dispatch(editData(data)),"ggg");
    setShowComponent(false);
  };

  return (
    <form className="details" key="id" onSubmit={handleSubmit(onEditData)}>
      <div className="container">
        <h4 className="mt-4">Contact Information</h4>
        <div>
          <input type="hidden" Value={contacts[0]?.id} {...register("id")} />
          <input
            type="hidden"
            Value={contacts[0]?.firstName}
            {...register("firstName")}
          />
          <input
            type="hidden"
            Value={contacts[0]?.middleName}
            {...register("middleName")}
          />
          <input
            type="hidden"
            Value={contacts[0]?.lastName}
            {...register("lastName")}
          />
          <input type="hidden" Value={contacts[0]?.SSN} {...register("SSN")} />
          <div className="mb-3 form-group">
            <label htmlFor="Address 1" className="font-weight-light">
              Address 1
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="address 1"
                Value={contacts ? contacts[0]?.address1 : ""}
                {...register("address1")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="Address 2" className="font-weight-light">
              Address 2
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="address 2"
                Value={contacts ? contacts[0]?.address2 : ""}
                {...register("address2")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="city" className="font-weight-light">
              City
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="city"
                Value={contacts ? contacts[0]?.city : ""}
                {...register("city")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="state" className="font-weight-light">
              State/Province
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="state"
                Value={contacts ? contacts[0]?.state : ""}
                {...register("state")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="zip" className="font-weight-light">
              Zip/Postal Code
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="zip"
                Value={contacts ? contacts[0]?.zip : ""}
                {...register("zip")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="homePh" className="font-weight-light">
              Home Phone
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="homePh"
                Value={contacts ? contacts[0]?.home : ""}
                {...register("home")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="officePh" className="font-weight-light">
              Office Phone
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="office"
                Value={contacts ? contacts[0]?.office : ""}
                {...register("office")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="email" className="font-weight-light">
              E-mail
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="email"
                Value={contacts ? contacts[0]?.email : ""}
                {...register("email")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="alt-email" className="font-weight-light">
              Alternate E-mail
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="alternateEmail"
                Value={contacts ? contacts[0]?.alternateEmail : ""}
                {...register("alternateEmail")}
                placeholder=""
              />
            </div>
          </div>
        </div>

        <h4 className="mt-4">Other</h4>

        <div>
          <div className="mb-3 form-group">
            <label htmlFor="Address 2" className="font-weight-light">
              Medicare Reason
            </label>
            <div>
              <select {...register("medicareReason")} className="form-control">
                <option value="Select Medicare Reason">
                  Select Medicare Reason
                </option>
                <option value="Age">Age</option>
                <option value="Age 1">Age 1</option>
              </select>
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="Address 2" className="font-weight-light">
              Medicare Plan
            </label>
            <div>
              <select {...register("medicarePlan")} className="form-control">
                <option value="Part A and B">Part A and B</option>
                <option value="Part A">Part A</option>
                <option value="Part B">Part B</option>
              </select>
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="Address 2" className="font-weight-light">
              Medicare Begin Date
            </label>
            <div>
              <input
                type="date"
                id="1"
                className="form-control"
                name="date"
                Value={contacts ? contacts[0]?.medicareBeginDate : ""}
                {...register("medicareBeginDate")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="Address 2" className="font-weight-light">
              Medicare End Date
            </label>
            <div>
              <input
                type="date"
                id="1"
                className="form-control"
                name="date"
                Value={contacts ? contacts[0]?.medicareTerminationDate : ""}
                {...register("medicareTerminationDate")}
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3 form-group">
            <label htmlFor="VIP" className="font-weight-light">
              <input
                TYPE="checkbox"
                id="1"
                // className="form-control"
                name="VIP"
                Value="VIP"
              />
              <span> VIP</span>
            </label>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="Highly Compensated" className="font-weight-light">
              <input
                TYPE="checkbox"
                id="1"
                // className="form-control"
                name="Highly Compensated"
                Value="Highly Compensated"
              />
              <span> Highly Compensated</span>
            </label>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="Test Employee" className="font-weight-light">
              <input
                TYPE="checkbox"
                id="1"
                // className="form-control"
                name="Test Employee"
                Value="Test Employee"
              />
              <span> Test Employee</span>
            </label>
          </div>
        </div>

        <h4 className="mt-4">Benefit Salary</h4>

        <div>
          <div className="mb-3 form-group">
            <label htmlFor="date" className="font-weight-light">
              2023-01-01 to 2023-12-31
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="date"
                Value={contacts ? contacts[0]?.benefitSalary : ""}
                {...register("benefitSalary")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="date" className="font-weight-light">
              2023-01-01 to 2023-12-31
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="date"
                Value={contacts ? contacts[0]?.benefitSalary : ""}
                {...register("benefitSalary")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="date" className="font-weight-light">
              2023-01-01 to 2023-12-31
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="date"
                Value={contacts ? contacts[0]?.benefitSalary : ""}
                {...register("benefitSalary")}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="date" className="font-weight-light">
              2023-01-01 to 2023-12-31
            </label>
            <div>
              <input
                id="1"
                className="form-control"
                name="benefitSalary"
                Value={contacts ? contacts[0]?.benefitSalary : ""}
                {...register("benefitSalary")}
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="button" onClick={() => setShowComponent(false)}>
          Cancel
        </button>
        <input type="submit" id="1" />
      </div>
    </form>
  );
}

export default EditContactAndOtherInfo;
