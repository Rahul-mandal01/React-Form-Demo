function App() {
  return (
    <div className="App">
      <form  >

      <label>
        First name

        <br/>

        
        <input
            type='text'
            placeholder='Rahul'
            
            name='firstName'
            value={FormData.firstName}
          />
      </label>

      <br/>
      <br/>

      <label>
        Last name

        <br/>

        <input
            type='text'
            placeholder='Kumar Mandal'
            
            name='lastName'
            value={FormData.lastName}
          />
      </label>

      <br/>
      <br/>

      <label>
        Email address

        <br/>

        <input
            type='text'
            placeholder='xyz@gmail.com'
            
            name='firstName'
            value={FormData.email}
          />
      </label>

      <br/>
      <br/>

      <label>
        Country

        <br/>

          <select>
              <option selected value="India">India</option>
              <option  value="United States">United States</option>
              <option  value="Canada">Canada</option>
              <option  value="Mexico">Mexico</option>

          </select>

      </label>

      <br/>
      <br/>

      <label>
        Street address

        <br/>

        <input
            type='text'
            placeholder='1234 Saltlake'
            
            name='streetAddress'
            value={FormData.streetAddress}
          />
      </label>

      <br/>
      <br/>
      <label>
        City

        <br/>

        <input
            type='text'
            placeholder='Kolkata'
            
            name='cityName'
            value={FormData.cityName}
          />
      </label>

      <br/>
      <br/>
      <label>
        State / Province

        <br/>

        <input
            type='text'
            placeholder='West Bengal'
            
            name='stateName'
            value={FormData.stateName}
          />
      </label>

      <br/>
      <br/>
      
      <label>
      ZIP / Postal code

        <br/>

        <input
            type='text'
            placeholder='700058'
            
            name='zipCode'
            value={FormData.zipCode}
          />
      </label>

      <br/>
      <br/>

      <label>
        By Email

          <br/>
          <br/>

          <input
            type="checkbox"
          />

          <span>
            Comments <br/>
              <div>Get notified when someones posts a comment on a posting.</div>
          </span>

          <br/>
          <br/>

          <input
            type="checkbox"
          />

          <span>
            Candidates <br/>
              <div>Get notified when a candidate applies for a job.</div>
          </span>
          <br/>
          <br/>

          <input
            type="checkbox"
          />

          <span>
            Offers <br/>
              <div>Get notified when a candidate accepts or rejects an offer.</div>
          </span>


      </label>

      <br/>


      <label>
          <div>
          Push Notifications <br/>
            <span>
            These are delivered via SMS to your mobile phone.
            </span>
          </div>

          
          <input
            type='radio'
          />
          <span>Everything</span>
          <br/>

          <input
            type='radio'
          />
          <span>Same as email</span>
          <br/>

          <input
            type='radio'
          />
          <span>No push notifications</span>

      </label>

            <br/>
            <br/>

            <button  >Submit</button>



      </form>

    </div>
  );
}

export default App;
