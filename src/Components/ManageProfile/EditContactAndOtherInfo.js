import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editData } from "../../Actions/actions";

function EditContactAndOtherInfo({ setShowComponent }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state?.Reducer?.contact);

  const onEditData = (data) => {
    // console.log(data, "l");
    dispatch(editData(data));
    // console.log(dispatch(editData(data)),"ggg");
    setShowComponent(false);
  };

  return (
    <form className="details" key="id" onSubmit={handleSubmit(onEditData)}>
      <div className="container">
        <h4>Contact Information</h4>
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
          <div>
            <button type="button" onClick={() => setShowComponent(false)}>
              Cancel
            </button>
            <input type="submit" id="1" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditContactAndOtherInfo;
