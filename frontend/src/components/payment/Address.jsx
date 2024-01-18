import React, { useEffect, useState } from "react";
import { Country, State } from "country-state-city";

function Address({ setAddressData, summery }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [village, setVillage] = useState("");
  const [road, setRoad] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  useEffect(() => {
    // Update the address data in the Payment component when any field changes
    setAddressData({
      firstName,
      lastName,
      country,
      state,
      pinCode,
      village,
      road,
      mobileNo,
    });
  }, [
    firstName,
    lastName,
    country,
    state,
    pinCode,
    village,
    road,
    mobileNo,
    setAddressData,
  ]);
  return (
    <div className=" w-full align-middle sm:mx-[5%] sm:w-[90%]">
      <div className="bt_1 bg-gray-200 p-1 sm:m-0">
        <h1 className="text-[1.3rem]">Contact</h1>
        <span className="bb_1 py-1">codegreen19s@gmail.com</span>
      </div>
      <div className="m-1 sm:m-0">
        <h1 className="my-1 border-b-[1px] border-b-[#28282851] py-1 text-[1.3rem] ">
          Address
        </h1>
      </div>
      <div className="address_input_div">
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <select
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Country</option>
            {Country &&
              Country.getAllCountries().map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
          </select>
          <select
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">State</option>
            {State &&
              State.getStatesOfCountry(country).map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Village/City"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Road Adress (optional)"
            value={road}
            onChange={(e) => setRoad(e.target.value)}
          />
        </div>
        <div>
          <input
            className="mobile_input"
            type="text"
            placeholder="Mobile No"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Pin Code (optional)"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Address;
