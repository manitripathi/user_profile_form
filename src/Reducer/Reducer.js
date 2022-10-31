const intialState = {
  contact: [
    {
      id: 1,
      firstName: "Timothy",
      middleName: "--",
      lastName: "Hamilton",
      SSN: "XXX-XX-5555",
      address1: "123 Main St.",
      address2: "--",
      city: "Anytown",
      state: "Florida",
      zip: "12345",
      home: "--",
      office: "--",
      email: "tim.hamilton@devbridge.com",
      alternateEmail: "--",
      medicareReason: "Age",
      medicarePlan: "Part A and B",
      medicareBeginDate: "03/07/2022",
      medicareTerminationDate: "08/04/2022",
      benefitSalary: "$40.00",
    },
  ],
};

const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case "EDIT_DATA":
      return {
        ...state,
        contact: state.contact.map((item) =>
          item.id == action.payload.id ? action.payload : item
        ),
      };

    default:
      return intialState;
  }
};

export default Reducer;
