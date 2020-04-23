/eslint-disable/
import Vue from 'vue'
import { ConversationalForm } from 'conversational-form';
import axios from 'axios'
// import VueAxios from 'vue-axios'

export default Vue.component('MyForm', {
  data(){
    return{
      geocoder:""
    }
  },
  template: '<div class="myForm"></div>',
  styles: [`
    .myForm {
      position: relative;
      height: 100%;
      width: 100%;
    }
    
.cf-input-button{
  background-color: green;
  font-size:100px;
}

.inputWrapper{
background-color: #c4c4c431;

}

.dark-theme .conversational-form cf-input input:{
color: black;
}

.dark-theme .conversational-form cf-input textarea:hover {
color: grey;
}

.dark-theme .conversational-form cf-chat-response thumb > p {
  background-color: white;
  background-image: url(../images/google.svg) !important;
}

.dark-theme .conversational-form cf-chat-response.user thumb {
  background-color:white;
  background-image: url(/images/Ellipse/ 26.png) !important;
      background-image: url(   https://cdn.glitch.com/1d1d7c79-abe4-4c95-b135-3a111632f4d8%2FEllipse%2018.png?v=1585908713570) !important;
)

}

dark-theme .conversational-form cf-chat-response.robot thumb {
  background-color: white;
}

#chatstart{
  margin: 0;
  padding: auto;
  padding-left: 10px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  /* background-color: #868282; */
  color: white;
  font-weight: lighter;
}

.hold{
  /* background-color: #ededed; */
  background: linear-gradient(140.72deg, #72DEFF 0%, rgba(35, 31, 219, 0.51) 100%);
  margin-top: -10px;
  padding-bottom: 20px;
  padding-top: 20px;
}

#chatone{
  font-family: 'Lato', sans-serif;
  padding-left: 10px;
  font-weight: lighter;
  padding-top: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  font-size: large;  
}

#conversational-form{
  background-color: white;
  color: white;
}

.conversational-form-inner{
  background-color: white;
}

.conversational-form-inner input{
color: #00000050;
background-color: #c4c4c431;
}

.conversational-form{
background-color: white;
  }

.cf-button-input{
  background-color: #c4c4c431;
}



.chat-popup{
  width: 50%;
}

#cf-context{
  width: 100% !important;
}

.user.can-edit.peak-thumb.show p{
  background-color: blue;
  color: white;
  font-weight: bold;
}

.conversational-form--enable-animation .cf-button.animate-in{
  background-color: blue;
  color: white;
  font-weight: bold;
  border: 1px solid white;
}

.cf-button:hover, .cf-button:hover:not([checked=checked]){
  color: green;
}

.conversational-form--enable-animation .cf-button.animate-in:hover{
  background-color: white;
  color: blue;
  border: 1px solid  blue;

}

thumb .conversational-form--enable-animation cf-chat-response.user.peak-thumb {
  background-color: tomato;
}


.conversational-form--enable-animation cf-chat-response text>p.show{
  /* color:black; */
}
.cf-input-button.cf-input-button{
  background-color: white;
  background-repeat: no-repeat ;
  color: white;

}

cf-input-button.cf-input-button .cf-input-icons{
  color: green;
}

cf-input-button.cf-input-button .cf-input-progress{
  background-color: green;
}

cf-input-button.cf-input-button .cf-input-attachment{
  background-color: green;
}

.conversational-form--enable-animation cf-chat-response text>p.show{
  background-color: white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  /* line-height: normal; */
  font-family: 'Lato', sans-serif;
  font-weight: light;
  width: auto;
}

cf-chat-response.user thumb{
  background-color: blue;

}

cf-input-button.cf-input-button:hover {
  background-color: blue;
}

cf-chat-response.user thumb{
  background-color: teal;
}

.conversational-form--enable-animation cf-chat-response.user.peak-thumb thumb{
  background-color: white;
}

cf-chat-response.show{
  padding-left: 0;
}

#hide-button{
    display: none;
}

#cf-context { 
width: 350px; 
height: 500px;
}
#form {
height: 0px;
overflow: hidden;
}
#form-appointment{
height: 0px;
overflow: hidden;
}
/* The popup chat - hidden by default */
.chat-popup {
display: none;
position: fixed;
bottom: 0;
right: 15px;
border: 3px solid #f1f1f1;
z-index: 9;
}

/* Add styles to the form container */
.form-container {
max-width: 300px;
padding: 10px;
background-color: white;
}

/* Full-width textarea */
.form-container textarea {
width: 100%;
padding: 15px;
margin: 5px 0 22px 0;
border: none;
background: #f1f1f1;
resize: none;
min-height: 200px;
}

/* When the textarea gets focus, do something */
.form-container textarea:focus {
background-color: #ddd;
outline: none;
}

/* Set a style for the submit/send button */
.form-container .btn {
background-color: #4CAF50;
color: white;
padding: 16px 20px;
border: none;
cursor: pointer;
width: 100%;
margin-bottom:10px;
opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover, .open-button:hover {
opacity: 1;
}
.myForm{
/* Add shadows to create the "card" effect */
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
}
iframe {
  height: 100%;
  width: 100%;
  border-width: 0px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
  border: 0;
  border: none;
  min-height: 0px;
  min-width: 0px;
  background: transparent;
}
* {
  box-sizing: border-box;
}
/* width */
::-webkit-scrollbar {
  height: 0px;
  width: 0px;
}
/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent; 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: transparent; 
}


@media screen and (max-width: 770px) { 
#cf-context{
  width: 100% !important;
}

.chat-popup{
  width: 100%;
  /* height: 100%; */
}

#chatstart{
  font-size: 18px;
}
}


  `],
  methods: {
    setupForm: function () {
    
    const date = new Date();
    // eslint-disable-next-line
	  const greeting = date.getHours() >= 17? "😊 Good evening" : date.getHours() >= 12? "😊 Good afternoon" : "😊 Good morning";
    const formFields = [
        {
          "tag": "cf-robot-message",
          "name": "message",
          "cf-questions": greeting,
          "class": "once"
        },
        {
          tag: "select",
          name: "appointmentselection",
          "cf-questions": "I’m Serenity and I am here to help you feel better. How may I help?",
          children: [
            { tag: "option", "cf-label": "I need a doctor", value: "" },
          ]
        },
        {
          tag: "select",
          name: "appointmentselection",
          "cf-questions": "Would you like our doctors to visit you at home or would you prefer to have an online consultaion with our doctors?",
          children: [
            { tag: "option", "cf-label": "I would like to book a home visit", value: "" },
            { tag: "option", "cf-label": "I would like an online consultation", value: "" },
          ]
        }
      ];

      this.cf = ConversationalForm.startTheConversation({
        options: {
          submitCallback: this.submitCallback,
          preventAutoFocus: true,
        },
        tags: formFields
      });
      this.$el.appendChild(this.cf.el);
    },
    submitCallback: function () {
      var formDataSerialized = this.cf.getFormData(true);
      console.log("Formdata, obj:", formDataSerialized);
      this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
    },

    // let geocoder = "";

     getLocation:function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        this.geocoder = new google.maps.Geocoder();
      } else { 
        console.log("Geolocation is not supported by this browser.");
      }
    },

    showPosition:function (position) {
			const location = codeLatLng(position.coords.latitude, position.coords.longitude);
			console.log("Latitude: " + position.coords.latitude);
			console.log("Longitude: " + position.coords.longitude);
    },
    
    showError:function (error) {
			switch(error.code) {
				case error.PERMISSION_DENIED:
					console.log("User denied the request for Geolocation.");
				break;
				case error.POSITION_UNAVAILABLE:
					console.log("Location information is unavailable.");
				break;
				case error.TIMEOUT:
					console.log("The request to get user location timed out.");
				break;
				case error.UNKNOWN_ERROR:
					console.log("An unknown error occurred.");
				break;
			}
    },

     codeLatLng:function(lat, lng) {
			var latlng = new google.maps.LatLng(lat, lng);
			geocoder.geocode({'latLng': latlng}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
			console.log(results)
				if (results[1]) {
				//formatted address
				alert(results[0].formatted_address)
				//find country name
					for (var i=0; i<results[0].address_components.length; i++) {
					for (var b=0;b<results[0].address_components[i].types.length;b++) {
		
					//there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
						if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
							//this is the object you are looking for
							city= results[0].address_components[i];
							break;
						}
					}
				}
				//city data
				alert(city.short_name + " " + city.long_name)
		
		
				} else {
				alert("No results found");
				}
			} else {
				alert("Geocoder failed due to: " + status);
			}
			});
		},

    openForm: function (form) {
      // Pick geolocation 
      getLocation();
      // Redundant code: remove in future
      window.isAppointmentBooking = form === "form-appointment" ? true : false;
      
      const userSessionData = {appointmentCost: "GHc 5", address: "Some location in the world", result: [], resultData: {}};
      
      let totalPoints = 0;
      // Setup greeting message
      const date = new Date();
      const greeting = date.getHours() >= 17? "😊 Good evening" : date.getHours() >= 12? "😊 Good afternoon" : "😊 Good morning";
      
      // Start conversation tags (Appointment Booking)
      const greetingsTags = [
        {
          "tag": "cf-robot-message",
          "name": "message",
          "cf-questions": greeting
        },
        {
          tag: "select",
          name: "appointmentselection",
          "cf-questions": "I’m Serenity and I am here to help you feel better. How may I help?",
          children: [
            { tag: "option", "cf-label": "I need a doctor", value: "" },
          ]
        },
        {
          tag: "select",
          name: "appointmentselection",
          "cf-questions": "Would you like our doctors to visit you at home or would you prefer to have an online consultaion with our doctors?",
          children: [
            { tag: "option", "cf-label": "I would like to book a home visit", value: "" },
            { tag: "option", "cf-label": "I would like an online consultation", value: "" },
          ]
        }
      ];
      
      var flowCallback = async function (dto, success, error) {
      // Algorithm for appointment booking starts here--
      if(window.isAppointmentBooking)
      {
        // Tags
        // Home visit: Time selection
        const homeVisitStartTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": "Ok, great."
          },
          {
            tag: "select",
            name: "homevisitstartoptions",
            "cf-questions": "When would you like the home visit?",
            children: [
              { tag: "option", "cf-label": "Next available Date", value: "" },
              { tag: "option", "cf-label": "Choose my own Date", value: "" },
            ]
          }
        ];
        const virtualCareStartTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": "Ok, great."
          },
          {
            tag: "select",
            name: "homevisitstartoptions",
            "cf-questions": "When would you like the online consultation?",
            children: [
              { tag: "option", "cf-label": "Next available Date", value: "" },
              { tag: "option", "cf-label": "Choose my own Date", value: "" },
            ]
          }
        ];
        const otherTimeSlots = [
          {
            tag: "select",
            name: "otherTimeSlots",
            "cf-questions": "Select from the available slots a day for your home visit.",
            children: [
              { tag: "option", "cf-label": "Today", value: "" },
              { tag: "option", "cf-label": "Tomorrow", value: "" },
              { tag: "option", "cf-label": "Choose other days", value: "" },
            ]
          }
        ];
        const otherTimeSlotsNoToday = [
          {
            tag: "select",
            name: "otherTimeSlots",
            "cf-questions": "Select from the available slots a day for your home visit.",
            children: [
              { tag: "option", "cf-label": "Tomorrow", value: "" },
              { tag: "option", "cf-label": "Choose other days", value: "" },
            ]
          }
        ];
        const userExistenceTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": "Ok great before I firm up this appointment I’d like a few details about you."
          },
          {
            tag: "select",
            name: "userexistence",
            "cf-questions": "Is this your first time?",
            children: [
              { tag: "option", "cf-label": "Yes,  I’m a new user", value: "" },
              { tag: "option", "cf-label": "No I’m an existing user", value: "" },
            ]
          }
        ];
        const newUserDetailsCollectionTags = [
          {
            tag: "input",
            name: "phone",
            "cf-questions": "Kindly input the phone number for registration."
          },
          {
            tag: "input",
            name: "fullname",
            "cf-questions": "Kindly give me your full name."
          },
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": "Kindly share your Date of Birth with me."
          },
          {
            tag: "input",
            name: "dateofbirth",
            "cf-input-placeholder": "dd/mm/yyyy",
            "cf-questions": "<strong>eg. 26/09/1993</strong>"
          }
        ];
        const existingUserDetailsCollectionTags = [
          {
            tag: "input",
            name: "mobile",
            "cf-questions": "Kindly input the phone number for registration."
          }
        ];
        const verificationCodeMessageTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": "Sending you a code to verify."
          }
        ];
        const verificationCodeInputTags = [
          {
            tag: "input",
            name: "code",
            "cf-questions": "A code has been sent to your phone, kindly input for verification."
          }
        ];
        const verifyLoginCodeInputTags = [
          {
            tag: "input",
            name: "verifylogincode",
            "cf-questions": "Please verify your number by entering the six digit code that has been sent to your phone."
          }
        ];
        const accountCreationMessageTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": "Your Serenity account has been created and verified."
          }
        ];
        const welcomeBackMessageTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": `Hello ${userSessionData.fullName}, welcome back`
          },
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": `Please find a summary of your ${userSessionData.appointmentType} : You opted for ${userSessionData.appointmentDate} at ${userSessionData.appointmentTime}`
          },
          {
            tag: "select",
            name: "proceedwithappointment",
            "cf-questions": "Select Proceed to book an appointment or cancel to cancel the appointment.",
            children: [
              { tag: "option", "cf-label": "Proceed", value: "" },
              { tag: "option", "cf-label": "Cancel", value: "" },
            ]
          }
        ];
        const paymentSelectionTags = [
          {
            tag: "select",
            name: "paymentselection",
            "cf-questions": `Your total fee for the ${userSessionData.appointmentType} is ${userSessionData.appointmentCost}. How would you like to pay`,
            children: [
              { tag: "option", "cf-label": "Mobile Money", value: "" },
              { tag: "option", "cf-label": "Visa", value: "" },
            ]
          }
        ];
        const noVisaTags = [
          {
            tag: "select",
            name: "paymentselection",
            "cf-questions": "Sorry, Visa payment is not available at the moment. Use Mobile Money.",
            children: [
              { tag: "option", "cf-label": "Try Mobile Money", value: "" },
              { tag: "option", "cf-label": "I don't have mobile money", value: "" },
            ]
          }
        ];
        const mobileMoneyProviderSelectionTags = [
          {
            tag: "select",
            name: "mobilemoneyproviderselection",
            "cf-questions": "Please select a payment provider",
            children: [
              { tag: "option", "cf-label": "MTN", value: "" },
              { tag: "option", "cf-label": "Airtel Tigo", value: "" },
              { tag: "option", "cf-label": "Vodafone", value: "" },
            ]
          }
        ];
        const vodafoneVoucherInputTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": `Please dial *110# and select option 4 then select Generate voucher to generate a voucher for this payment.`
          },
          {
            tag: "input",
            name: "voucher",
            "cf-questions": "Enter your generated voucher here"
          }
        ];
        const paymentFailedTags = [
          {
            tag: "select",
            name: "paymentfailed",
            "cf-questions": "Sorry, could not process payment at this time.",
            children: [
              { tag: "option", "cf-label": "Try again", value: "" },
              { tag: "option", "cf-label": "Return to start", value: "" },
            ]
          }
        ];
        const cancelTags = [
          {
            tag: "select",
            name: "cancel",
            "cf-questions": "Would you like to end the session or return back to the start?",
            children: [
              { tag: "option", "cf-label": "End the session", value: "" },
              { tag: "option", "cf-label": "Return to back to the start", value: "" },
            ]
          }
        ];
        const mobileMoneyNumberInputTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": "A charge of "+ userSessionData.appointmentCost +" will be charged to your account"
          },
          {
            tag: "input",
            name: "mobilemoneynumber",
            "cf-questions": "Please enter the {mobilemoneyproviderselection} Mobile money number"
          }
        ];
        const finalSessionMessageTags = [
          {
            tag: "select",
            name: "finalsessionmessage",
            "cf-questions": `Thanks for having me, ${userSessionData.fullName}. Your process has been initiated, once your payment succeeds. You will receive an SMS and Email to confirm your appointment booking.`,
            children: [
              { tag: "option", "cf-label": "Book another appointment", value: "" },
              { tag: "option", "cf-label": "End Session", value: "" },
            ]
          }
        ];
        const finalSessionMTNMessageTags = [
          {
            "tag": "cf-robot-message",
            "name": "message",
            "cf-questions": `Thanks for having me, ${userSessionData.fullName}. Your process has been initiated, once your payment succeeds. You will receive an SMS and Email to confirm your appointment booking.`,
          },
          {
            tag: "select",
            name: "finalsessionmessage",
            "cf-questions": "Please dial *170# and select options 6 then 3 to authorise payment. Thank you.",
            children: [
              { tag: "option", "cf-label": "Book another appointment", value: "" },
              { tag: "option", "cf-label": "End Session", value: "" },
            ]
          }
        ];
        
        // Branching: Conditional flow
        // First interaction
        if(dto.tag.domElement.name === "appointmentselection")
        {
          if(dto.text === "I would like to book a home visit"){
            userSessionData.appointmentType = 'Home visit';
            userSessionData.appointmentTypeKey = 'home-visit-gp';
            ConversationalForm.addTags(homeVisitStartTags, true);
          }
          if(dto.text === "I would like an online consultation"){
            userSessionData.appointmentType = 'Virtual Care';
            userSessionData.appointmentTypeKey = 'virtual-care-gp';
            ConversationalForm.addTags(virtualCareStartTags, true);
          }
        }
        // Second interaction: Home visit
        if(dto.tag.domElement.name === "homevisitstartoptions")
        {
          if(dto.text === "Next available Date"){ 
            // TODO: Make a network call: Get next Available time slot
            ConversationalForm.addRobotChatResponse("Fetching next available time slot...");
            let payload = { "serviceid": "virtual-care-gp" }
            try {
              // Make a request for a user with a given ID
              const response = await axios.post('https://api.v05.serenity.health/patient/nextavailableslot', payload);
              const time = response.data.endDateTime.split("T")[1]; 
              const date = response.data.endDateTime.split("T")[0]; 
              const parsedTime = time.split(":")[0]+":"+time.split(":")[1] + (parseInt(time.split(":")[0]) > 11?"pm":"am");
              // TODO: Update this tag with api response
              const tags = [
                {
                  tag: "select",
                  name: "nextavailabletimeslot",
                  "cf-questions": "The next available time slot is",
                  children: [
                    { tag: "option", "cf-label": parsedTime, value: "" },
                  ]
                }
              ];
              ConversationalForm.addTags(tags, true); 
              userSessionData.slotId = response.data.slotid;
              userSessionData.appointmentDateTime = `${date.split('-')[2]+"/"+date.split('-')[1]+"/"+date.split('-')[0]} 00:00 ${time.split(":")[0]+":"+time.split(":")[1]}`;
              console.log("logging axios..(success)",userSessionData.appointmentDateTime);
              console.log("logging axios..(success)",response);
            }catch(e){
              // handle success
              console.log("logging axios..(error)",e);
              ConversationalForm.addRobotChatResponse("Sorry, I could not fetch the available time slots for this date.");
            }
          }
          if(dto.text === "Choose my own Date"){
            // add choose your own date tags
            const date = new Date();
            if(date.getHours() > 22) ConversationalForm.addTags(otherTimeSlotsNoToday, true);
            if(date.getHours() <= 22) ConversationalForm.addTags(otherTimeSlots, true);
          }
        }
        // Second interaction: Choose my own date -> Pick dates
        if(dto.tag.domElement.name === "otherTimeSlots")
        {
          ConversationalForm.addRobotChatResponse("Fetching available time slots...");
          const date = new Date();
          let currentDate = date.getFullYear()+"-"+(parseInt(date.getMonth()+1)<10?"0"+(date.getMonth()+1):date.getMonth()+1)+"-"+date.getDate()+" "+"00:00";
          const tommorrow = new Date(date.setDate(date.getDate()+1));
          const tomorrowDate = tommorrow.getFullYear()+"-"+(parseInt(tommorrow.getMonth()+1)<10?"0"+(tommorrow.getMonth()+1):tommorrow.getMonth()+1)+"-"+tommorrow.getDate()+" "+"00:00";
          const nextDate = new Date(date.setDate(date.getDate()+1));
          const nextDayDate = nextDate.getFullYear()+"-"+(parseInt(nextDate.getMonth()+1)<10?"0"+(nextDate.getMonth()+1):nextDate.getMonth()+1)+"-"+nextDate.getDate()+" "+"00:00";
          let payload = {startDateTime:currentDate, endDateTime:tomorrowDate};
          if(dto.text === "Today"){ 
            // TODO: Make a network call: Get Available time slots for today and then add time selections tags
            try {
              // Make a request for a user with a given ID
              const response = await axios.post('https://api.v05.serenity.health/patient/availableslots', payload);
              const availableTimeSlots = [
                {
                  tag: "select",
                  name: "availabletimeslots",
                  "cf-questions": "The available time slots for today are:",
                  children: []
                }
              ];
              userSessionData.result = [];
              for(let item of response.data){
                  const time = item.startDateTime.split("T")[1]; 
                  const parsedTime = time.split(":")[0]+":"+time.split(":")[1] + (parseInt(time.split(":")[0]) > 11?"pm":"am");
                  if(!userSessionData.result.includes(parsedTime)){
                    userSessionData.result.push(parsedTime); 
                    availableTimeSlots[0].children.push({ tag: "option", "cf-label": parsedTime, value: "" });
                    userSessionData.resultData[parsedTime] = item;
                  }
              }
              //availableTimeSlots[0].children = availableTimeSlots[0].children.reverse();
              // handle success
              if(response.data.length > 0) ConversationalForm.addTags(availableTimeSlots, true); 
              if(response.data.length === 0) ConversationalForm.addRobotChatResponse("Sorry, It looks like all the available slots for today have been booked. There are no available slots.");
              console.log("logging axios..(success)",response);
            }catch(e){
              // handle success
              console.log("logging axios..(error)",e);
              ConversationalForm.addRobotChatResponse("Sorry, I could not fetch the available time slots for this date.");
            }
            while(currentDate.includes('-')) currentDate = currentDate.replace('-','/');
            userSessionData.appointmentDateTime = currentDate;
          }
          payload = {startDateTime:tomorrowDate, endDateTime:nextDayDate};
          if(dto.text === "Tomorrow"){ 
            // TODO: Make a network call: Get Available time slots for tomorrow and then add time selections tags
            try {
              // Make a request for a user with a given ID
              const response = await axios.post('https://api.v05.serenity.health/patient/availableslots', payload);
              const availableTimeSlots = [
                {
                  tag: "select",
                  name: "availabletimeslots",
                  "cf-questions": "The available time slots for tomorrow are:",
                  children: []
                }
              ];
              userSessionData.result = [];
              for(let item of response.data){
                  const time = item.startDateTime.split("T")[1]; 
                  const parsedTime = time.split(":")[0]+":"+time.split(":")[1] + (parseInt(time.split(":")[0]) > 11?"pm":"am");
                  if(!userSessionData.result.includes(parsedTime)){
                    userSessionData.result.push(parsedTime); 
                    availableTimeSlots[0].children.push({ tag: "option", "cf-label": parsedTime, value: "" });
                    userSessionData.resultData[parsedTime] = item;
                  }
              }
              availableTimeSlots[0].children = availableTimeSlots[0].children.reverse();
              // handle success
              if(response.data.length > 0) ConversationalForm.addTags(availableTimeSlots, true); 
              if(response.data.length === 0) ConversationalForm.addRobotChatResponse("Sorry, It looks like all the available slots for tomorrow have been booked. There are no available slots.");
              console.log("logging axios..(success)",response);
            }catch(e){
              // handle success
              console.log("logging axios..(error)",e);
              ConversationalForm.addRobotChatResponse("Sorry, I could not fetch the available time slots for this date.");
            }
            userSessionData.appointmentDateTime = tommorrow.getDate()+"/"+(parseInt(tommorrow.getMonth()+1)<10?"0"+(tommorrow.getMonth()+1):tommorrow.getMonth()+1)+"/"+tommorrow.getFullYear();
          }
          if(dto.text === "Choose other days"){
            // open date selection popup
            openTray("bottom-sheet");
            // hold chatbot to wait: for time selection response from popup
            const result = await new Promise((resolve)=>{
              const timer = setInterval(()=>console.log('popup open and waiting'), 1000)
              window.addEventListener('popupclosed', ()=>{
                clearInterval(timer);
                resolve();
              });
            });			
            // add tags
            ConversationalForm.addTags(userExistenceTags, true);
            userSessionData.appointmentDateTime = window.selectDate+" "+window.selectTime;
          }
        }
        // Second interaction: Pick available time slot
        if(dto.tag.domElement.name === "availabletimeslots")
        {
          userSessionData.appointmentDateTime += (" "+dto.text.slice(0,5));
          userSessionData.selectedTime = dto.text;
          ConversationalForm.addTags(userExistenceTags, true);
        }
        // Second interaction: After Next available time slot
        if(dto.tag.domElement.name === "nextavailabletimeslot")
        {
          ConversationalForm.addTags(userExistenceTags, true);
        }
        // Third interaction: User Existence
        if(dto.tag.domElement.name === "userexistence")
        {
          if(dto.text === "Yes,  I’m a new user") ConversationalForm.addTags(newUserDetailsCollectionTags, true);
          if(dto.text === "No I’m an existing user") ConversationalForm.addTags(existingUserDetailsCollectionTags, true);
        }
        // Fourth interaction: New user
        if(dto.tag.domElement.name === "phone" || dto.tag.domElement.name === "mobile") userSessionData.mobile = dto.text; 
        if(dto.tag.domElement.name === "fullname") userSessionData.fullName = dto.text; 
        if(dto.tag.domElement.name === "dateofbirth") userSessionData.dateOfBirth = dto.text; 
        // Fifth interaction: New user | send verification code
        if(dto.tag.domElement.name === "dateofbirth"){
          // post 
          const payload = {"phone": userSessionData.mobile};
          
          //ConversationalForm.addRobotChatResponse("Sending you a code to verify.");
          try {
            // Make a request for a user with a given ID
            const response = await axios.post('https://api.v05.serenity.health/user/sendotpcode', payload);
            
            // handle success
            console.log("logging axios..(success)",response);
            userSessionData.code = response.data.code;
            ConversationalForm.addTags(verificationCodeInputTags, true);
          }catch(e){
            // handle success
            console.log("logging axios..(error)",e);
            ConversationalForm.addRobotChatResponse("Sorry, I could not send the verification code");
            ConversationalForm.addRobotChatResponse("Please check the number you enetered.");
          }
        }
        // Sixth interaction: New user | verify code
        if(dto.tag.domElement.name === "code")
        {
          // post 
          const payload = {
            "sz_firstname": userSessionData.fullName,
            "sz_email": userSessionData.mobile+"@Nhyahohealth.com",
            "sz_password": "password",
            "sz_lastname": "",
            "sz_dob": userSessionData.dateOfBirth,
            "sz_gender":"",
            "sz_phoneno": userSessionData.mobile,
            "sz_marital_status":"",
            "sz_nationality":"",
            "sz_native_language":"",
            "sz_religion":"",
            "sz_occupation":"",
            "sz_employer":"",
            "sz_ice_name":"",
            "sz_ice_place_of_work":"",
            "sz_ice_address": userSessionData.address,
            "sz_ice_phoneno": "",
            "sz_bookedfortime": userSessionData.appointmentDateTime,
            "sz_bookername":"",
            "sz_paymentmethod":"",
            "sz_bookingtype": userSessionData.appointmentType,
            "sz_complaint":"",
            "sz_docempid":"",
            "sz_docname":"",
            "sz_unitid":"",
            "sz_othername":"",
            "sz_address":"",
            "sz_title":""		
          }
        
          // verify code
          if(userSessionData.code == dto.text)
          {
            ConversationalForm.addRobotChatResponse("Verifying code...");
            try {
              // Make a request for a user with a given ID
              const response = await axios.post('https://api.v05.serenity.health/patient/createappointmentandinfo/', payload);
              
              // handle success
              console.log("logging axios..(success)",response);
              ConversationalForm.addRobotChatResponse("Your Serenity account has been created and verified.");
              welcomeBackMessageTags[0]["cf-questions"] = `Welcome ${response.data.sz_username}`;
              welcomeBackMessageTags[1]["cf-questions"] = `Please find a summary of your ${userSessionData.appointmentType} : You opted for ${userSessionData.appointmentDateTime.split(' ')[0]} at ${userSessionData.appointmentDateTime.split(' ')[2]}`;
              ConversationalForm.addTags(welcomeBackMessageTags, true);
            }catch(e){
              // handle success
              console.log("logging axios..(error)",e);
              const tags = [
                 {
                   tag: "select",
                   name: "tryexisting",
                   "cf-questions": "This number might be registered to an existing account.",
                    children: [
                     { tag: "option", "cf-label": "Try logging into an existing account", value: "" },
                     { tag: "option", "cf-label": "Cancel", value: "" },
                   ]
                 }
               ];
              ConversationalForm.addTags(tags, true);
            }
          }else {
            ConversationalForm.addRobotChatResponse("Wrong input. Try again.");
            ConversationalForm.addTags(verificationCodeInputTags, true);
          }
        }
        // Seventh interaction: Existing User
        if(dto.tag.domElement.name === "tryexisting")
        {
          if(dto.text === "Try logging into an existing account") conversationalForm.addTags(existingUserDetailsCollectionTags, true);
          if(dto.text === "Cancel") closeForm();
        }
        // Seventh interaction: Existing User
        if(dto.tag.domElement.name === "mobile")
        {
          // post 
          const payload = {
            "sz_firstname": "",
            "sz_email": "",
            "sz_password": "",
            "sz_lastname":"",
            "sz_dob":"",
            "sz_gender":"",
            "sz_phoneno": userSessionData.mobile,
            "sz_marital_status":"",
            "sz_nationality":"",
            "sz_native_language":"",
            "sz_religion":"",
            "sz_occupation":"",
            "sz_employer":"",
            "sz_ice_name":"",
            "sz_ice_place_of_work":"",
            "sz_ice_address": "",
            "sz_ice_phoneno": "",
            "sz_bookedfortime":"",
            "sz_bookername":"",
            "sz_paymentmethod":"",
            "sz_complaint":"suspected-covid-19",
            "sz_docempid":"",
            "sz_docname":"",
            "sz_unitid":"",
            "sz_othername":"",
            "sz_address":"",
            "sz_title":"",
            "phone": userSessionData.mobile
          }
        
          // verify account
          ConversationalForm.addRobotChatResponse("Verifying...");
          try {
            // Make a request for a user with a given ID
            let response = await axios.post('https://api.v05.serenity.health/patient/checkexistence', payload);
            // handle success
            console.log("logging axios..(success)",response);
            userSessionData.fullName = response.data.sz_username;
            userSessionData.userId = response.data.sz_userid;
            welcomeBackMessageTags[0]["cf-questions"] = `Welcome ${response.data.sz_username}`;
            welcomeBackMessageTags[1]["cf-questions"] = `Please find a summary of your ${userSessionData.appointmentType} : You opted for ${userSessionData.appointmentDateTime.split(' ')[0]} at ${userSessionData.appointmentDateTime.split(' ')[2]}`;
            
            // Send code
            response = await axios.post('https://api.v05.serenity.health/user/sendotpcode', payload);
            // handle success
            console.log("logging axios..(success)",response);
            userSessionData.code = response.data.code;
            ConversationalForm.addTags(verifyLoginCodeInputTags, true);
          }catch(e){
            // handle success
            console.log("logging axios..(error)",e);
            ConversationalForm.addRobotChatResponse("Your account could not be verified.");
          }
        }
        // Seventh interaction: Existing User -> Verify Login
        if(dto.tag.domElement.name === "verifylogincode")
        {
          if(dto.text == userSessionData.code)
          {
            welcomeBackMessageTags[0]["cf-questions"] = `Welcome ${userSessionData.fullName}`;
            welcomeBackMessageTags[1]["cf-questions"] = `Please find a summary of your ${userSessionData.appointmentType} : You opted for ${userSessionData.appointmentDateTime.split(' ')[0]} at ${userSessionData.appointmentDateTime.split(' ')[2]}`;
            ConversationalForm.addTags(welcomeBackMessageTags, true);
          }else{
            ConversationalForm.addRobotChatResponse("Wrong input. Try again.");
            ConversationalForm.addTags(verifyLoginCodeInputTags, true);
          }
        }
        // Eight interaction: Payment
        if(dto.tag.domElement.name === "proceedwithappointment")
        {
          if(dto.text === "Proceed") {
            ConversationalForm.addRobotChatResponse("Selecting your slot...");
            const slotInfo = userSessionData.resultData[userSessionData.selectedTime];
            userSessionData.slotId =  userSessionData.slotId === "" ? slotInfo.slotid : userSessionData.slotId;
            const payload = {
              "slotid": userSessionData.slotId,
              "patientName": userSessionData.fullName, 
              "mobile": userSessionData.mobile,
              "email": userSessionData.mobile+"@Nhyahohealth.com",
              "patientId": userSessionData.userId, 
              "sz_bookerid": userSessionData.userId,
              "sz_bookername": userSessionData.fullName,
              "sz_bookedforid": userSessionData.userId,
              "sz_docempid": slotInfo.assignedDoctorId,
              "sz_docname": slotInfo.doctorName,
              "sz_bookedtime": userSessionData.appointmentDateTime,
              "sz_bookingnote":"",
              "sz_bookingstatus":"",
              "sz_bookingmode":"Online",
              "sz_hospid":"",
              "sz_unitid":"",
              "sz_paymentmethod":"",
              "sz_bookedforname":"",
              "sz_complaint":"",
              "assignedDoctorId": slotInfo.assignedDoctorId,
              "sz_bookingtype": userSessionData.appointmentTypeKey,
              "sz_bookedfortime": userSessionData.appointmentDateTime
            };
            try {
              // Make a request for a user with a given ID
              const response = await axios.post('https://api.v05.serenity.health/patient/booking/bookslot', payload);
              // handle success
              userSessionData.patientId = response.data.sz_bookedforid;
              userSessionData.appointmentId = response.data.id;
              console.log("logging axios..(success)",response);
            }catch(e){
              // handle error
              console.log("logging axios..(error)",e);
              ConversationalForm.addRobotChatResponse("Sorry, I could not select this slot");
            }
              ConversationalForm.addTags(paymentSelectionTags, true);
            };
          if(dto.text === "Cancel") ConversationalForm.addTags(cancelTags, true);// TODO: exit 
        }
        // Nineth interaction: Cancel appointment -> select option
        if(dto.tag.domElement.name === "cancel")
        {
          if(dto.text === "End the session") closeForm(); // TODO: exit 
          if(dto.text === "Return to back to the start") openForm('form-appointment');
        }
        // Nineth interaction: Payment -> select payment method
        if(dto.tag.domElement.name === "paymentselection")
        {
          if(dto.text === "Mobile Money" || dto.text === "Try Mobile Money") ConversationalForm.addTags(mobileMoneyProviderSelectionTags, true);
          if(dto.text === "Visa") ConversationalForm.addTags(noVisaTags, true); // TODO: exit 
          if(dto.text === "I don't have mobile money") ConversationalForm.addRobotChatResponse("Sorry, You will need a payment option to proceed. Thank you.");
        }
        // Tenth interaction: Payment -> Mobile Money -> select provider
        if(dto.tag.domElement.name === "mobilemoneyproviderselection")
        {
          if(dto.text === "MTN") userSessionData.provider = "mtn";
          if(dto.text === "Airtel Tigo") userSessionData.provider = "airtel";
          if(dto.text === "Vodafone") userSessionData.provider = "vodafone";
          ConversationalForm.addTags(mobileMoneyNumberInputTags, true);
        }
        // Tenth interaction: Payment -> Mobile Money -> select provider
        if(dto.tag.domElement.name === "voucher")
        {
          userSessionData.voucher = dto.text;
          //POST: api 
          const payload = {
            "dob": userSessionData.dateOfBirth,
            "vendor":userSessionData.provider,
            "mobile": "233" + (userSessionData.mobile[0] === "0" ? userSessionData.mobile.slice(1) : userSessionData.mobile),
            "serviceid": userSessionData.appointmentTypeKey,
            "productid":"",
            "status": "pending",
            "trans_type":"debit",
            "voucher_number":userSessionData.voucher,
            "slotid": userSessionData.slotId,
            "provider":"Nyaho",
            patientName: userSessionData.fullName,
            patientId: userSessionData.patientId,
            appointmentId: userSessionData.appointmentId
          }
        
          // call payment api
          ConversationalForm.addRobotChatResponse("Verifying payment...");
          try {
            // Make a request for a user with a given ID
            const response = await axios.post('https://api.v05.serenity.health/finance/paybills', payload);
            
            // handle success
            console.log("logging axios..(success)",response);
            finalSessionMessageTags[0]["cf-questions"] = `Thanks for having me, ${userSessionData.fullName}. Your payment has been initiated, once your payment succeeds. You will receive an SMS and Email to confirm your appointment booking.`;
            ConversationalForm.addTags(finalSessionMessageTags, true);
          }catch(e){
            // handle success
            console.log("logging axios..(error)",e);
            ConversationalForm.addTags(paymentFailedTags, true);
          }
        }
        // Eleventh interaction: Payment -> Processing
        if(dto.tag.domElement.name === "mobilemoneynumber" && userSessionData.provider != "vodafone")
        {
          //POST: api 
          const payload = {
            "dob": userSessionData.dateOfBirth,
            "vendor":userSessionData.provider,
            "mobile": "233" + (userSessionData.mobile[0] === "0" ? userSessionData.mobile.slice(1) : userSessionData.mobile),
            "serviceid": userSessionData.appointmentTypeKey,
            "productid":"",
            "status": "pending",
            "trans_type":"debit",
            "voucher_number":"",
            "slotid": userSessionData.slotId,
            "provider":"Nyaho",
            patientName: userSessionData.fullName,
            patientId: userSessionData.patientId,
            appointmentId: userSessionData.appointmentId
          }
        
          // call payment api
          ConversationalForm.addRobotChatResponse("Verifying payment...");
          try {
            // Make a request for a user with a given ID
            const response = await axios.post('https://api.v05.serenity.health/finance/paybills', payload);
            
            // handle success
            console.log("logging axios..(success)",response);
            finalSessionMessageTags[0]["cf-questions"] = `Thanks for having me, ${userSessionData.fullName}. Your payment has been initiated, once your payment succeeds. You will receive an SMS and Email to confirm your appointment booking.`;
            if(userSessionData.provider === "mtn")ConversationalForm.addTags(finalSessionMTNMessageTags, true);
            if(userSessionData.provider != "mtn")ConversationalForm.addTags(finalSessionMessageTags, true);
          }catch(e){
            // handle success
            console.log("logging axios..(error)",e);
            ConversationalForm.addTags(paymentFailedTags, true);
          }
        }else if(dto.tag.domElement.name === "mobilemoneynumber" && userSessionData.provider === "vodafone"){
          ConversationalForm.addTags(vodafoneVoucherInputTags, true);
        }
        // End of flow: Final
        if(dto.tag.domElement.name === "paymentfailed")
        {
          if(dto.text === "Try again"){
            //POST: api 
            const payload = {
              "dob": userSessionData.dateOfBirth,
              "vendor":userSessionData.provider,
              "mobile": "233" + (userSessionData.mobile[0] === "0" ? userSessionData.mobile.slice(1) : userSessionData.mobile),
              "serviceid": userSessionData.appointmentTypeKey,
              "productid":"",
              "status": "pending",
              "trans_type":"debit",
              "voucher_number":"",
              "slotid": userSessionData.slotId,
              "provider":"Nyaho",
              patientName: userSessionData.fullName,
              patientId: userSessionData.patientId,
              appointmentId: userSessionData.appointmentId
            }
        
            // call payment api
            ConversationalForm.addRobotChatResponse("Retrying..");
            ConversationalForm.addRobotChatResponse("Verifying payment...");
            try {
              // Make a request for a user with a given ID
              const response = await axios.post('https://api.v05.serenity.health/finance/paybills', payload);
  
              // handle success
              console.log("logging axios..(success)",response);
              finalSessionMessageTags[0]["cf-questions"] = `Thanks for having me, ${userSessionData.fullName}. Your payment has been initiated, once your payment succeeds. You will receive an SMS and Email to confirm your appointment booking.`;
              if(userSessionData.provider === "mtn")ConversationalForm.addTags(finalSessionMTNMessageTags, true);
              if(userSessionData.provider != "mtn")ConversationalForm.addTags(finalSessionMessageTags, true);
            }catch(e){
              // handle success
              console.log("logging axios..(error)",e);
              ConversationalForm.addTags(paymentFailedTags, true);
            }
          }
          if(dto.text === "Return to start") openForm('form-appointment');
        }
        // End of flow: Final
        if(dto.tag.domElement.name === "finalsessionmessage")
        {
          const anotherAppointmentTags = [
            {
              "tag": "cf-robot-message",
              "name": "message",
              "cf-questions": "😊 Hi "+userSessionData.fullName
            },
            {
              tag: "select",
              name: "appointmentselection",
              "cf-questions": "I am ready to help you feel better. How may I help you again?",
              children: [
                { tag: "option", "cf-label": "I would like to book a home visit.", value: "" },
                { tag: "option", "cf-label": "I would like to book a virtual visit.", value: "" },
              ]
            }
          ];
        
          if(dto.text === "Book another appointment") openForm('form-appointment');
          if(dto.text === "End Session") closeForm();// TODO: exit 
        }
      }
    }
  },
  mounted: function () {
    this.setupForm()
  }}
});