import React, { useEffect } from "react";
import "../components/HeaderPostLogin";
import GaugeComponent from "react-gauge-component";
import HeaderPostLogin from "../components/HeaderPostLogin";
import { Link, useNavigate } from "react-router-dom";
import HomeHistoryCard from "../components/HomeHistoryCard";

function UserProfile() {
  const navigate = useNavigate();

  const userDetails = {
    name: "Atharva Upare",
    email: "atharva.upare@somaiya.edu",
    phoneNo: "+91 98337 30477",
    age: 19,
    gender: "Prefer not to say",
    bloodGroup: "N/A",
    height: 185,
    weight: 67,
    allergies: "Dust, Pollen",
    address: "Hiranandalani Meadows, Thane, Maharashtra, India",
  };

  // Retrieve user object from local storage
  const userObject = JSON.parse(localStorage.getItem("user"));
  const finalUserObject = userObject
    ? Object.fromEntries(
        Object.entries(userObject).slice(0, -7) // Remove the last 7 fields
      )
    : userDetails;

  console.log(finalUserObject);

  //let bmi = (finalUserObject.weight / ((finalUserObject.height / 100) ** 2));
  let bmi=24.5;

  finalUserObject.height = finalUserObject.height + " cm";
  finalUserObject.weight = finalUserObject.weight + " kg";

  let history_cards = [
    {
      date: "2024-12-10",
      time: "12:00",
      doctor: "Dr. Parul Madan",
      hospital: "Bhanushali Hospital",
      status: "Cancelled",
      index: 2,
      doctor_img:
        "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    },
    {
      date: "2024-10-10",
      time: "10:00",
      doctor: "Dr. Avanish Yadav",
      hospital: "Fortis Hospital",
      status: "Confirmed",
      index: 0,
      doctor_img:
        "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    },
    {
      date: "2024-10-10",
      time: "10:00",
      doctor: "Dr. Utkash Kesarwani",
      hospital: "Max Hospital",
      status: "Confirmed",
      index: 1,
      doctor_img:
        "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    },
    {
      date: "2024-12-10",
      time: "12:00",
      doctor: "Dr. Pavani Jain",
      hospital: "Bhanushali Hospital",
      status: "Cancelled",
      index: 2,
      doctor_img:
        "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    },

  ];

  // Now, userObject contains the object retrieved from local storage

  return (
    <div>
      <HeaderPostLogin name={finalUserObject.name} />
      <div className="w-[100vw] min-h-[80vh] max-h-full flex items-center justify-center mt-10">
        <div className="flex flex-row gap-x-4 h-full mx-24 text-[21px]">
          <div
            className="flex flex-col gap-[2vh] h-[40%] bg-[#222222] px-5 py-4 rounded-[32px] mb-16 "
            style={{ flex: "30%" }}
          >
            <div>
              <h1 className="text-[#4BD472] text-3xl font-bold text-center">BMI</h1>
            </div>
            <GaugeComponent
              type="semicircle"
              arc={{
                width: 0.4,
                padding: 0.05,
                cornerRadius: 4,
                subArcs: [
                  {
                    limit: 18.5,
                    color: "#3CF55F",
                    showTick: true,
                  },
                  {
                    limit: 24.9,
                    color: "#35DA54",
                    showTick: true,
                  },
                  {
                    limit: 29.9,
                    color: "#2CB947",
                    showTick: true,
                  },
                  {
                    limit: 34.9,
                    color: "#218E35",
                    showTick: true,
                  },
                  {
                    limit: 40,
                    color: "#114219",
                    showTick: true,
                  },
                ],
              }}
              minValue={10}
              maxValue={40}
              value={bmi}
            />

            <div className="flex gap-y-4 flex-col w-[90%]">
              {Object.entries(finalUserObject).map(([key, value]) => (
                <p
                  key={key}
                  className={
                    key === "email" || key === "address"
                      ? "text-md flex-wrap"
                      : ""
                  }
                >
                  <span className="text-[#4BD472]">
                    {" "}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  : <span className="font-medium">{value}</span>
                </p>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col gap-4 items-center"
            style={{ flex: "80%" }}
          >
            <div className="flex flex-row gap-4 text-[36px] font-black justify-between w-full">
              <button
                className="rounded-[16px] border-2 border-[#4BD472] bg-gradient-to-br from-[#4BD472] to-[#0e5c1b] px-[5.1vw] py-0.5 w-[50%]"
                onClick={() => navigate("/ai")}
              >
                Chat with AI
              </button>

              <button
                className="bg-[#2a2a2a] border-2 border-[#ffffff] rounded-[16px] px-4 py-0.5 w-[50%]"
                onClick={() => navigate("/myappointments")}
              >
                Check Appointments
              </button>
            </div>
            <div className="rounded-[32px] w-full h-[100%] bg-[#222222] px-16 py-16 mb-16">
              {
                history_cards.map((card, index) => (
                  <HomeHistoryCard
                    key={index}
                    date={card.date}
                    time={card.time}
                    doctor={card.doctor}
                    hospital={card.hospital}
                    status={card.status}
                    index={card.index}
                    doctor_img={card.doctor_img}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
