/* eslint-disable react/no-unescaped-entities */

import useContextProvider from "../hooks/useContextProvider";

const CountrySlect = () => {
  const {setCountry} = useContextProvider()
  return (
    <div>
      <select
        onChange={(e) => setCountry(e.target.value)}
        className="max-w-full border text-sm px-2 border-gray-400 py-2 rounded-md"
      >
        <option value="Country">Country</option>
        <option value="Argentina,AR">Argentina</option>
        <option value="Australia,AU">Australia</option>
        <option value="Austria,AT">Austria</option>
        <option value="Bahrain,BH">Bahrain</option>
        <option value="Bangladesh,BD">Bangladesh</option>
        <option value="Belgium,BE">Belgium</option>
        <option value="Brazil,BR">Brazil</option>
        <option value="Brunei,BN">Brunei</option>
        <option value="Canada,CA">Canada</option>
        <option value="Chile,CL">Chile</option>
        <option value="Colombia,CO">Colombia</option>
        <option value="Cyprus,CY">Cyprus</option>
        <option value="Denmark,DK">Denmark</option>
        <option value="Finland,FI">Finland</option>
        <option value="France,FR">France</option>
        <option value="Germany,DE">Germany</option>
        <option value="Hong Kong,HK">Hong Kong</option>
        <option value="Iceland,IS">Iceland</option>
        <option value="India,IND">India</option>
        <option value="Ireland,IE">Ireland</option>
        <option value="Israel,IL">Israel</option>
        <option value="Italy,IT">Italy</option>
        <option value="Japan,JP">Japan</option>
        <option value="Kuwait,KW">Kuwait</option>
        <option value="Luxembourg,LU">Luxembourg</option>
        <option value="Macau,MO">Macau</option>
        <option value="Malaysia,MY">Malaysia</option>
        <option value="Mexico,MX">Mexico</option>
        <option value="Netherlands,NL">Netherlands</option>
        <option value="New Zealand,NZ">New Zealand</option>
        <option value="Norway,NO">Norway</option>
        <option value="Oman,OM">Oman</option>
        <option value="Peru,PE">Peru</option>
        <option value="Qatar,QA">Qatar</option>
        <option value="Saudi Arabia,SA">Saudi Arabia</option>
        <option value="Singapore,SG">Singapore</option>
        <option value="South Korea,KR">South Korea</option>
        <option value="Spain,ES">Spain</option>
        <option value="Sweden,SE">Sweden</option>
        <option value="Switzerland,CH">Switzerland</option>
        <option value="Taiwan,TW">Taiwan</option>
        <option value="United Arab Emirates,AE">United Arab Emirates</option>
        <option value="United Kingdom,GB">United Kingdom</option>
        <option value="United States,US">United States</option>
      </select>
    </div>
  );
};

export default CountrySlect;
