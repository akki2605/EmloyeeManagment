document.querySelector(".bg-modal").innerHTML += `
      <div class="modal-contant">
        <div class="childModal">
          <div class="closeModal">+</div>
          <h2><b>Adding New Employee</b></h2>

          <form action="" method="post" id="fillDetail" onsubmit="return false;" >
            <div class="fullname" id="">
              <label for="first">Name:</label>
              <input type="text" id="modalFirst" placeholder="First" required />
              <input type="text" id="modalMiddle" placeholder="middle" />
              <input type="text" id="modalLast" placeholder="last" required />
            </div>

            <div id="fields">
              <label for="emali">Email:</label>
              <input
                type="email"
                id="modalEmail"
                size="30"
                placeholder="example@xyz.com"
                required
              />
              <label for="number">Phone Number:</label>
              <input
                type="number"
                id="modalNumber"
                name="number"
                pattern="^[6-9]\d{9}$"
                size="10"
                required
              />
            </div>
            <div id="fields">
              <label for="gender">Gender</label>
              <select name="gender" id="modalGender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label for="age">Age</label>
              <input type="text" id="modalAge" name="age" size="3" required />
              <label for="idType">Id</label>
              <select name="idType" id="modalIdType">
                <option value="Aadhar Card">Aadhar Card</option>
                <option value="Pan Card">Pan Card</option>
                <option value="Driving Licence">Driving Licence</option>
              </select>
              <input type="text" id="modalIdValue" name="idValue" required />
            </div>

            <div id="fields">
              <label for="team">Team</label>
              <input type="text" id="modalTeam" name="team" required />
              <label for="manager">Manager</label>
              <input type="text" id="modalManager" name="manager" required />
            </div>

            <label for="">Address</label>
            <input
              type="text"
              class="lineOne"
              id="lineOne"
              placeholder="Line 1"
              required
            />
            <input
              type="text"
              class="lineTwo"
              id="lineTwo"
              placeholder="Line 2"
            />

            <label for="">City</label>
            <input type="text" class="city" id="modalCity" required />

            <div class="fields">
              <label for="state ">State</label>
              <select name="state" id="modalState">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <label for="">Pincode</label>
              <input type="text" class="pin" size="" id="modalPin" required />
            </div>
            <button class="submit" id="submit">Save</button>
          </form>
        </div>
      </div>
`;
         