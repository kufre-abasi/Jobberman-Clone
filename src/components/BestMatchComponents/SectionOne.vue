<template>
  <div class="md:px-14 px-6">
    <div class="py-10 mx-auto md:px-0 request-demo-form">
      <div class="flex flex-col w-full lg:flex-row lg:justify-between lg:pl-5">
        <div class="flex flex-col pb-4 w-full lg:items-start lg:pb-0 lg:w-1/2 lg:pr-10">
          <span class="text-3xl md:text-5xl font-medium capitalize text-gray-700 md:pb-5">
            Best Match </span
          ><img
            class="pt-5 md:pt-0"
            src="https://www.jobberman.com/static-assets/img/ng/best-match-hero-image.png"
            loading="lazy"
            alt="hero-image"
            width="575"
          /><span class="text-3xl leading-9 font-medium text-gray-700 pt-5">
            Get qualified and ranked candidates, quickly! </span
          ><span class="text-xl leading-7 font-normal pt-5 text-brand-secondary">
            #ANewWayToMatch
          </span>
        </div>
        <div class="flex w-full md:w-1/2">
          <div class="flex flex-col justify-evenly w-full border rounded-lg">
            <div class="p-5">
              <form id="faljq">
                <input name="_token" type="hidden" /><input
                  type="hidden"
                  value="best-match"
                  name="product"
                />
                <div class="flex flex-col">
                  <label
                    for="firstname"
                    class="block mb-1 text-sm font-medium text-left text-gray-700"
                  >
                    First Name </label
                  ><input
                    type="text"
                    class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 mb-4"
                    required="true"
                    name="firstname"
                    value=""
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    for="lastname"
                    class="block mb-1 text-sm text-left font-medium text-gray-700"
                  >
                    Last Name </label
                  ><input
                    type="text"
                    class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 mb-4"
                    required="true"
                    name="lastname"
                    value=""
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    for="email"
                    class="block mb-1 text-sm text-left font-medium text-gray-700"
                  >
                    Email Address </label
                  ><input
                    type="text"
                    class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 mb-4"
                    required="true"
                    name="email"
                    value=""
                  />
                </div>
                <div class="flex flex-col mb-4 w-full">
                  <label
                    for="mobile_number"
                    class="block mb-1 text-sm text-left font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <div class="flex relative mt-1 rounded-md">
                    <select
                      class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 py-0 pr-7 pl-3 w-1/3 text-gray-500 bg-gray-200 rounded-r-none rounded-l-md border-gray-300 focus:ring-0 sm:text-sm"
                      style=""
                      required="true"
                      name="mobile_number_country"
                    >
                      <option value="AF">Afghanistan (+93)</option>
                      <option value="AL">Albania (+355)</option>
                      <option value="DZ">Algeria (+213)</option>
                      <option value="AS">American Samoa (+1)</option>
                      <option value="AD">Andorra (+376)</option>
                      <option value="AO">Angola (+244)</option>
                      <option value="AI">Anguilla (+1)</option>
                      <option value="AQ">Antarctica (+0)</option>
                      <option value="AG">Antigua and Barbuda (+1)</option>
                      <option value="AR">Argentina (+54)</option>
                      <option value="AM">Armenia (+374)</option>
                      <option value="AW">Aruba (+297)</option>
                      <option value="AU">Australia (+61)</option>
                      <option value="AT">Austria (+43)</option>
                      <option value="AZ">Azerbaijan (+994)</option>
                      <option value="BS">Bahamas (+1)</option>
                      <option value="BH">Bahrain (+973)</option>
                      <option value="BD">Bangladesh (+880)</option>
                      <option value="BB">Barbados (+1)</option>
                      <option value="BY">Belarus (+375)</option>
                      <option value="BE">Belgium (+32)</option>
                      <option value="BZ">Belize (+501)</option>
                      <option value="BJ">Benin (+229)</option>
                      <option value="BM">Bermuda (+1)</option>
                      <option value="BT">Bhutan (+975)</option>
                      <option value="BO">Bolivia (+591)</option>
                      <option value="BA">Bosnia and Herzegovina (+387)</option>
                      <option value="BW">Botswana (+267)</option>
                      <option value="BV">Bouvet Island (+0)</option>
                      <option value="BR">Brazil (+55)</option>
                      <option value="IO">British Indian Ocean Territory (+246)</option>
                      <option value="BN">Brunei Darussalam (+673)</option>
                      <option value="BG">Bulgaria (+359)</option>
                      <option value="BF">Burkina Faso (+226)</option>
                      <option value="BI">Burundi (+257)</option>
                      <option value="KH">Cambodia (+855)</option>
                      <option value="CM">Cameroon (+237)</option>
                      <option value="CA">Canada (+1)</option>
                      <option value="CV">Cape Verde (+238)</option>
                      <option value="BQ">Caribbean Netherlands (+599)</option>
                      <option value="KY">Cayman Islands (+1)</option>
                      <option value="CF">Central African Republic (+236)</option>
                      <option value="TD">Chad (+235)</option>
                      <option value="CL">Chile (+56)</option>
                      <option value="CN">China (+86)</option>
                      <option value="CX">Christmas Island (+61)</option>
                      <option value="CC">Cocos (Keeling) Islands (+61)</option>
                      <option value="CO">Colombia (+57)</option>
                      <option value="KM">Comoros (+269)</option>
                      <option value="CG">Congo (+242)</option>
                      <option value="CD">Congo, Democratic Republic of (+243)</option>
                      <option value="CK">Cook Islands (+682)</option>
                      <option value="CR">Costa Rica (+506)</option>
                      <option value="HR">Croatia (+385)</option>
                      <option value="CU">Cuba (+53)</option>
                      <option value="CW">Curaçao (+599)</option>
                      <option value="CY">Cyprus (+357)</option>
                      <option value="CZ">Czech Republic (+420)</option>
                      <option value="CI">Côte d'Ivoire (+225)</option>
                      <option value="DK">Denmark (+45)</option>
                      <option value="DJ">Djibouti (+253)</option>
                      <option value="DM">Dominica (+1)</option>
                      <option value="DO">Dominican Republic (+1)</option>
                      <option value="EC">Ecuador (+593)</option>
                      <option value="EG">Egypt (+20)</option>
                      <option value="SV">El Salvador (+503)</option>
                      <option value="GQ">Equatorial Guinea (+240)</option>
                      <option value="ER">Eritrea (+291)</option>
                      <option value="EE">Estonia (+372)</option>
                      <option value="ET">Ethiopia (+251)</option>
                      <option value="FK">Falkland Islands (+500)</option>
                      <option value="FO">Faroe Islands (+298)</option>
                      <option value="FJ">Fiji (+679)</option>
                      <option value="FI">Finland (+358)</option>
                      <option value="FR">France (+33)</option>
                      <option value="GF">French Guiana (+594)</option>
                      <option value="PF">French Polynesia (+689)</option>
                      <option value="TF">French Southern Territories (+0)</option>
                      <option value="GA">Gabon (+241)</option>
                      <option value="GM">Gambia (+220)</option>
                      <option value="GE">Georgia (+995)</option>
                      <option value="DE">Germany (+49)</option>
                      <option value="GH">Ghana (+233)</option>
                      <option value="GI">Gibraltar (+350)</option>
                      <option value="GR">Greece (+30)</option>
                      <option value="GL">Greenland (+299)</option>
                      <option value="GD">Grenada (+1)</option>
                      <option value="GP">Guadeloupe (+590)</option>
                      <option value="GU">Guam (+1)</option>
                      <option value="GT">Guatemala (+502)</option>
                      <option value="GG">Guernsey (+44)</option>
                      <option value="GN">Guinea (+224)</option>
                      <option value="GW">Guinea-Bissau (+245)</option>
                      <option value="GY">Guyana (+592)</option>
                      <option value="HT">Haiti (+509)</option>
                      <option value="HM">Heard and McDonald Islands (+0)</option>
                      <option value="HN">Honduras (+504)</option>
                      <option value="HK">Hong Kong (+852)</option>
                      <option value="HU">Hungary (+36)</option>
                      <option value="IS">Iceland (+354)</option>
                      <option value="IN">India (+91)</option>
                      <option value="ID">Indonesia (+62)</option>
                      <option value="IR">Iran (+98)</option>
                      <option value="IQ">Iraq (+964)</option>
                      <option value="IE">Ireland (+353)</option>
                      <option value="IM">Isle of Man (+44)</option>
                      <option value="IL">Israel (+972)</option>
                      <option value="IT">Italy (+39)</option>
                      <option value="JM">Jamaica (+1)</option>
                      <option value="JP">Japan (+81)</option>
                      <option value="JE">Jersey (+44)</option>
                      <option value="JO">Jordan (+962)</option>
                      <option value="KZ">Kazakhstan (+7)</option>
                      <option value="KE">Kenya (+254)</option>
                      <option value="KI">Kiribati (+686)</option>
                      <option value="KW">Kuwait (+965)</option>
                      <option value="KG">Kyrgyzstan (+996)</option>
                      <option value="LA">Lao People's Democratic Republic (+856)</option>
                      <option value="LV">Latvia (+371)</option>
                      <option value="LB">Lebanon (+961)</option>
                      <option value="LS">Lesotho (+266)</option>
                      <option value="LR">Liberia (+231)</option>
                      <option value="LY">Libya (+218)</option>
                      <option value="LI">Liechtenstein (+423)</option>
                      <option value="LT">Lithuania (+370)</option>
                      <option value="LU">Luxembourg (+352)</option>
                      <option value="MO">Macau (+853)</option>
                      <option value="MK">Macedonia (+389)</option>
                      <option value="MG">Madagascar (+261)</option>
                      <option value="MW">Malawi (+265)</option>
                      <option value="MY">Malaysia (+60)</option>
                      <option value="MV">Maldives (+960)</option>
                      <option value="ML">Mali (+223)</option>
                      <option value="MT">Malta (+356)</option>
                      <option value="MH">Marshall Islands (+692)</option>
                      <option value="MQ">Martinique (+596)</option>
                      <option value="MR">Mauritania (+222)</option>
                      <option value="MU">Mauritius (+230)</option>
                      <option value="YT">Mayotte (+262)</option>
                      <option value="MX">Mexico (+52)</option>
                      <option value="FM">Micronesia, Federated States of (+691)</option>
                      <option value="MD">Moldova (+373)</option>
                      <option value="MC">Monaco (+377)</option>
                      <option value="MN">Mongolia (+976)</option>
                      <option value="ME">Montenegro (+382)</option>
                      <option value="MS">Montserrat (+1)</option>
                      <option value="MA">Morocco (+212)</option>
                      <option value="MZ">Mozambique (+258)</option>
                      <option value="MM">Myanmar (+95)</option>
                      <option value="NA">Namibia (+264)</option>
                      <option value="NR">Nauru (+674)</option>
                      <option value="NP">Nepal (+977)</option>
                      <option value="NC">New Caledonia (+687)</option>
                      <option value="NZ">New Zealand (+64)</option>
                      <option value="NI">Nicaragua (+505)</option>
                      <option value="NE">Niger (+227)</option>
                      <option value="NG" selected="">Nigeria (+234)</option>
                      <option value="NU">Niue (+683)</option>
                      <option value="NF">Norfolk Island (+672)</option>
                      <option value="KP">North Korea (+850)</option>
                      <option value="MP">Northern Mariana Islands (+1)</option>
                      <option value="NO">Norway (+47)</option>
                      <option value="OM">Oman (+968)</option>
                      <option value="PK">Pakistan (+92)</option>
                      <option value="PW">Palau (+680)</option>
                      <option value="PS">Palestine, State of (+970)</option>
                      <option value="PA">Panama (+507)</option>
                      <option value="PG">Papua New Guinea (+675)</option>
                      <option value="PY">Paraguay (+595)</option>
                      <option value="PE">Peru (+51)</option>
                      <option value="PH">Philippines (+63)</option>
                      <option value="PN">Pitcairn (+0)</option>
                      <option value="PL">Poland (+48)</option>
                      <option value="PT">Portugal (+351)</option>
                      <option value="PR">Puerto Rico (+1)</option>
                      <option value="QA">Qatar (+974)</option>
                      <option value="RO">Romania (+40)</option>
                      <option value="RU">Russian Federation (+7)</option>
                      <option value="RW">Rwanda (+250)</option>
                      <option value="RE">Réunion (+262)</option>
                      <option value="BL">Saint Barthélemy (+590)</option>
                      <option value="SH">Saint Helena (+290)</option>
                      <option value="KN">Saint Kitts and Nevis (+1)</option>
                      <option value="LC">Saint Lucia (+1)</option>
                      <option value="VC">Saint Vincent and the Grenadines (+1)</option>
                      <option value="MF">Saint-Martin (France) (+590)</option>
                      <option value="WS">Samoa (+685)</option>
                      <option value="SM">San Marino (+378)</option>
                      <option value="ST">Sao Tome and Principe (+239)</option>
                      <option value="SA">Saudi Arabia (+966)</option>
                      <option value="SN">Senegal (+221)</option>
                      <option value="RS">Serbia (+381)</option>
                      <option value="SC">Seychelles (+248)</option>
                      <option value="SL">Sierra Leone (+232)</option>
                      <option value="SG">Singapore (+65)</option>
                      <option value="SX">Sint Maarten (Dutch part) (+1)</option>
                      <option value="SK">Slovakia (+421)</option>
                      <option value="SI">Slovenia (+386)</option>
                      <option value="SB">Solomon Islands (+677)</option>
                      <option value="SO">Somalia (+252)</option>
                      <option value="ZA">South Africa (+27)</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands (+0)
                      </option>
                      <option value="KR">South Korea (+82)</option>
                      <option value="SS">South Sudan (+211)</option>
                      <option value="ES">Spain (+34)</option>
                      <option value="LK">Sri Lanka (+94)</option>
                      <option value="PM">St. Pierre and Miquelon (+508)</option>
                      <option value="SD">Sudan (+249)</option>
                      <option value="SR">Suriname (+597)</option>
                      <option value="SJ">Svalbard and Jan Mayen Islands (+47)</option>
                      <option value="SZ">Swaziland (+268)</option>
                      <option value="SE">Sweden (+46)</option>
                      <option value="CH">Switzerland (+41)</option>
                      <option value="SY">Syria (+963)</option>
                      <option value="TW">Taiwan (+886)</option>
                      <option value="TJ">Tajikistan (+992)</option>
                      <option value="TZ">Tanzania (+255)</option>
                      <option value="TH">Thailand (+66)</option>
                      <option value="NL">The Netherlands (+31)</option>
                      <option value="TL">Timor-Leste (+670)</option>
                      <option value="TG">Togo (+228)</option>
                      <option value="TK">Tokelau (+690)</option>
                      <option value="TO">Tonga (+676)</option>
                      <option value="TT">Trinidad and Tobago (+1)</option>
                      <option value="TN">Tunisia (+216)</option>
                      <option value="TR">Turkey (+90)</option>
                      <option value="TM">Turkmenistan (+993)</option>
                      <option value="TC">Turks and Caicos Islands (+1)</option>
                      <option value="TV">Tuvalu (+688)</option>
                      <option value="UG">Uganda (+256)</option>
                      <option value="UA">Ukraine (+380)</option>
                      <option value="AE">United Arab Emirates (+971)</option>
                      <option value="GB">United Kingdom (+44)</option>
                      <option value="US">United States (+1)</option>
                      <option value="UM">
                        United States Minor Outlying Islands (+0)
                      </option>
                      <option value="UY">Uruguay (+598)</option>
                      <option value="UZ">Uzbekistan (+998)</option>
                      <option value="VU">Vanuatu (+678)</option>
                      <option value="VA">Vatican (+39)</option>
                      <option value="VE">Venezuela (+58)</option>
                      <option value="VN">Vietnam (+84)</option>
                      <option value="VG">Virgin Islands (British) (+1)</option>
                      <option value="VI">Virgin Islands (U.S.) (+1)</option>
                      <option value="WF">Wallis and Futuna Islands (+681)</option>
                      <option value="EH">Western Sahara (+212)</option>
                      <option value="YE">Yemen (+967)</option>
                      <option value="ZM">Zambia (+260)</option>
                      <option value="ZW">Zimbabwe (+263)</option>
                      <option value="AX">Ãland Islands (+358)</option>
                    </select>
                    <div class="text-red-500 text-sm err-msg" style="display: none"></div>
                    <input
                      type="text"
                      class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 block w-2/3 rounded-md rounded-l-none border-gray-300 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      name="mobile_number"
                      required="true"
                      data-rules='["required"]'
                    />
                  </div>
                </div>
                <div class="flex flex-col">
                  <label
                    for="company"
                    class="block mb-1 text-sm text-left font-medium text-gray-700"
                  >
                    Company Name </label
                  ><input
                    type="text"
                    class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 mb-5"
                    required="true"
                    name="company"
                    value=""
                  />
                </div>
                <div class="flex flex-col py-2">
                  <label
                    for="industry_id"
                    class="block mb-1 text-sm text-left font-medium text-gray-700"
                  >
                    Industry </label
                  ><select
                    class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-5"
                    style=""
                    required="true"
                    name="industry_id"
                  >
                    <option value="">Select...</option>
                    <option value="0">Agriculture, Fishing &amp; Forestry</option>
                    <option value="1">Construction</option>
                    <option value="2">Banking, Finance &amp; Insurance</option>
                    <option value="3">Education</option>
                    <option value="4">Energy &amp; Utilities</option>
                    <option value="5">Government</option>
                    <option value="6">Healthcare</option>
                    <option value="7">Hospitality &amp; Hotel</option>
                    <option value="8">Recruitment</option>
                    <option value="9">IT &amp; Telecoms</option>
                    <option value="10">Law &amp; Compliance</option>
                    <option value="11">Shipping &amp; Logistics</option>
                    <option value="12">Manufacturing &amp; Warehousing</option>
                    <option value="13">Advertising, Media &amp; Communications</option>
                    <option value="14">Mining, Energy &amp; Metals</option>
                    <option value="15">NGO, NPO &amp; Charity</option>
                    <option value="16">Retail, Fashion &amp; FMCG</option>
                    <option value="17">Enforcement &amp; Security</option>
                    <option value="18">Real Estate</option>
                    <option value="19">Tourism &amp; Travel</option>
                    <option value="20">Automotive &amp; Aviation</option>
                    <option value="21">Entertainment, Events &amp; Sport</option>
                  </select>
                </div>
                <div class="flex flex-col pb-2">
                  <label
                    for="user_type"
                    class="block mb-1 text-sm text-left font-medium text-gray-700"
                  >
                    Are you an Employer or Job Seeker? </label
                  ><select
                    class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-5"
                    style=""
                  >
                    <option value="">Select...</option>
                    <option value="0">Employer</option>
                    <option value="1">Job Seeker</option>
                  </select>
                </div>
                <div class="flex flex-col py-2">
                  <button
                    type="submit"
                    class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 px-6 bg-primary text-white focus:shadow-pri hover:bg-pri-hover w-full capitalize"
                    id="reset-submit"
                  >
                    request a demo
                  </button>
                </div>
              </form>
              <div class="py-2 text-sm">
                <span class="text-sm leading-5 font-medium text-gray-400"
                  >By clicking "Request a Demo", you agree to our</span
                >&nbsp;<a href="https://www.jobberman.com/terms" style="color: #2485af"
                  >Terms &amp; Conditions</a
                >&nbsp;<span class="text-sm leading-5 font-medium text-gray-400">and</span
                >&nbsp;<a
                  href="https://www.jobberman.com/privacy-policy"
                  style="color: #2485af"
                  >Privacy Policy</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
