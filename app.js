// app.js

const boatsContainer = document.getElementById("boatsContainer");

function addBoat(name = "", link = "") {

  const boatDiv = document.createElement("div");

  boatDiv.classList.add("boat-item");

  boatDiv.innerHTML = `
    <input type="text" class="boat-name" placeholder="Boat Name" value="${name}">
    <input type="text" class="boat-link" placeholder="Boat Link" value="${link}">
  `;

  boatsContainer.appendChild(boatDiv);
}

addBoat();

function generateEmail() {

  const guestName = document.getElementById("guestName").value;
  const totalGuests = document.getElementById("totalGuests").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;

  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  const observations = document.getElementById("observations").value;

  const totalPrice = document.getElementById("totalPrice").value;
  const deposit = document.getElementById("deposit").value;
  const remaining = document.getElementById("remaining").value;

  const guestForm = document.getElementById("guestForm").value;
  guestForm = "https://docs.google.com/forms/d/e/1FAIpQLSfv7fN11NWk3Gm46uG8LwCBTT9-9nfXXObHfQ-v60f6Y9TxgQ/alreadyresponded"; 

  const transport = document.getElementById("transport").checked;

  const boatNames = document.querySelectorAll(".boat-name");
  const boatLinks = document.querySelectorAll(".boat-link");

  let boatsText = "";

  boatNames.forEach((boat, index) => {

    boatsText += `
- ${boat.value}
${boatLinks[index].value}
`;
  });

  let transportText = "";

  if (transport) {
    transportText = `
Transportation, round trip from Panama City (USD 120) and the mandatory entrance fee to Guna Yala(USD 22) are not included in the price. Around USD 120 + USD 22 per person.

We’re happy to help you arrange all logistics 🙌
`;
  }

  const email = `
Hi ${guestName}, how are you?

We are happy to confirm your reservation with Sailing the World ✨

Your booking is CONFIRMED.

BOOKING DETAILS

- Check-in: ${checkin}
- Check-out: ${checkout}

- Guests: ${totalGuests}
  - Adults: ${adults}
  - Children: ${children}

BOATS RESERVED

${boatsText}

RESERVATION SUMMARY

- Total reservation value: USD ${totalPrice}
- Deposit payment received: USD ${deposit}
- Remaining balance to be paid onboard: USD ${remaining}
 *Payment on board must be made in cash.

GUEST INFORMATION FORM:
Please complete the following form, this will provide us with the information needed to prepare and ensure your "Sailing the World" experience is complete.


${guestForm}

ABOUT SAILING THE WORLD

Website:
https://sailingtheworld.net/

Instagram:
@sailingthe.world

WhatsApp:
+507 6630-2038

${transportText}

OBSERVATIONS

${observations}

We remain available for any questions.

Sailing the World is very happy to be part of this adventure with you in San Blas.

Have a wonderful trip!

Best regards,

Sailing the World Team
`;

  document.getElementById("output").value = email;
}

function copyEmail() {

  const output = document.getElementById("output");

  output.select();
  document.execCommand("copy");

  alert("Email copied!");
}