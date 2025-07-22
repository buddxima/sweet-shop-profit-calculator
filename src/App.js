import { useState } from "react";

const vendorsWithSubcategories = {
  "කේක්": [
    "බටර් කේක්", "චොක්ලට් කේක්", "ෆෘට් කේක්", "රිබන් කේක්", "මාබල් කේක්", "ස්වීට් පාන්", "ස්වීට් රෝල්"
  ],
  "වාසනා කේක්": [
    "පොල් කේක්", "බටර් ලේයර් කේක්", "චොක්ලට් කේක්", "රිබන් කේක්", "මාබල් කේක්"
  ],
  "බූන්දි": ["බූන්දි", "පැණි වලලු"],
  "හයිලන්ඩ්": ["යෝගට්", "කිරි පැකට්"],
  "චෙලෝ": ["යෝගට් බීම"],
  "උඳුවැල්": ["උඳුවැල්"],
  "කොකිස්": ["කොකිස් පැකට්"],
  "කැවිලි": [
    "රුලං", "ෆෘට් රුලං", "දොදොල්", "කිරි අලුවා", "මස්කට්", "තල අලුවා", "තල බෝල කප්",
    "කිරි ටොෆි කප්", "චොක්ලට්/ස්ටොබෙරි අලුවා බෝතල්", "10 ටොෆි", "පුහුල් දෝසි පැකට් (5kg)"
  ],
  "වතුර": ["1L බෝතල්", "500ml බෝතල්"],
  "කැවුම්": ["මුං සහ අතිරස කැවුම්"],
  "දොදොල්": ["දොදොල් තැටි(10kg)", "මස්කට් තැටි(10kg)"],
  "ලඩ්ඩු": ["ලඩ්ඩු"],
  "ආස්මි": ["ආස්මි"],
  "තල": ["130 පොඩි පැකට්", "250 මීඩියම් පැකට්", "380 ලොකු පැකට්"],
  "කප් කේක්": ["කප් කේක් සහ මිනි කේක්", "220 කුකීස්", "270 කුකීස්"],
};

const unitPrices = {
  "බටර් කේක්": 820,
  "චොක්ලට් කේක්": 900,
  "ෆෘට් කේක්": 840,
  "රිබන් කේක්": 840,
  "මාබල් කේක්": 840,
  "ස්වීට් පාන්": 130,
  "ස්වීට් රෝල්": 270,
  "පොල් කේක්": 450,
  "බටර් ලේයර් කේක්": 935,
  "චොක්ලට් කේක් (වාසනා කේක්)": 935,
  "රිබන් කේක් (වාසනා කේක්)": 935,
  "මාබල් කේක් (වාසනා කේක්)": 935,
  "බූන්දි": 630,
  "පැණි වලලු": 630,
  "යෝගට්": 53.37,
  "කිරි පැකට්": 82.50,
  "යෝගට් බීම": 124.61,
  "උඳුවැල්": 30,
  "කොකිස් පැකට්": 150,
  "රුලං": 40,
  "ෆෘට් රුලං": 40,
  "දොදොල්": 40,
  "කිරි අලුවා": 40,
  "මස්කට්": 40,
  "තල අලුවා": 40,
  "තල බෝල කප්": 520,
  "කිරි ටොෆි කප්": 500,
  "චොක්ලට්/ස්ටොබෙරි අලුවා බෝතල්": 950,
  "10 ටොෆි": 780,
  "පුහුල් දෝසි පැකට් (5kg)": 3000,
  "1L බෝතල්": 55,
  "500ml බෝතල්": 35,
  "මුං සහ අතිරස කැවුම්": 35,
  "දොදොල් තැටි(10kg)": 6000,
  "මස්කට් තැටි(10kg)": 7000,
  "ලඩ්ඩු": 45,
  "ආස්මි": 60,
  "130 පොඩි පැකට්": 100,
  "250 මීඩියම් පැකට්": 200,
  "380 ලොකු පැකට්": 300,
  "කප් කේක් සහ මිනි කේක්": 140,
  "220 කුකීස්": 150,
  "270 කුකීස්": 200,
};

const sellingPrices = {
  "බටර් කේක්": 1060,
  "චොක්ලට් කේක්": 1150,
  "ෆෘට් කේක්": 1060,
  "රිබන් කේක්": 1150,
  "මාබල් කේක්": 1150,
  "ස්වීට් පාන්": 160,
  "ස්වීට් රෝල්": 350,
  "පොල් කේක්": 560,
  "බටර් ලේයර් කේක්": 1150,
  "චොක්ලට් කේක් (වාසනා කේක්)": 1150,
  "රිබන් කේක් (වාසනා කේක්)": 1150,
  "මාබල් කේක් (වාසනා කේක්)": 1150,
  "බූන්දි": 1000,
  "පැණි වලලු": 1000,
  "යෝගට්": 70,
  "කිරි පැකට්": 100,
  "යෝගට් බීම": 150,
  "උඳුවැල්": 40,
  "කොකිස් පැකට්": 200,
  "රුලං": 50,
  "ෆෘට් රුලං": 50,
  "දොදොල්": 50,
  "කිරි අලුවා": 50,
  "මස්කට්": 50,
  "තල අලුවා": 50,
  "තල බෝල කප්": 750,
  "කිරි ටොෆි කප්": 600,
  "චොක්ලට්/ස්ටොබෙරි අලුවා බෝතල්": 1400,
  "10 ටොෆි": 1000,
  "පුහුල් දෝසි පැකට් (5kg)": 5000,
  "1L බෝතල්": 100,
  "500ml බෝතල්": 70,
  "මුං සහ අතිරස කැවුම්": 50,
  "දොදොල් තැටි(10kg)": 10000,
  "මස්කට් තැටි(10kg)": 11000,
  "ලඩ්ඩු": 60,
  "ආස්මි": 80,
  "130 පොඩි පැකට්": 130,
  "250 මීඩියම් පැකට්": 250,
  "380 ලොකු පැකට්": 380,
  "කප් කේක් සහ මිනි කේක්": 180,
  "220 කුකීස්": 220,
  "270 කුකීස්": 270,
};

export default function App() {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [vendorsQuantities, setVendorsQuantities] = useState({});

  const toggleVendor = (vendor) => {
    if (selectedVendors.includes(vendor)) {
      setSelectedVendors(selectedVendors.filter((v) => v !== vendor));
      const updatedQuantities = { ...vendorsQuantities };
      delete updatedQuantities[vendor];
      setVendorsQuantities(updatedQuantities);
    } else {
      setSelectedVendors([...selectedVendors, vendor]);
    }
  };

  const handleQuantityChange = (vendor, sub, value) => {
    setVendorsQuantities({
      ...vendorsQuantities,
      [vendor]: {
        ...vendorsQuantities[vendor],
        [sub]: value,
      },
    });
  };

  const totalExpenses = Object.entries(vendorsQuantities).reduce((vendorTotal, [vendor, subs]) => {
    if (!subs) return vendorTotal;
    return (
      vendorTotal +
      Object.entries(subs).reduce(
        (subTotal, [sub, qty]) => subTotal + (Number(qty || 0) * (unitPrices[sub] || 0)),
        0
      )
    );
  }, 0);

  const totalRevenue = Object.entries(vendorsQuantities).reduce((vendorTotal, [vendor, subs]) => {
    if (!subs) return vendorTotal;
    return (
      vendorTotal +
      Object.entries(subs).reduce(
        (subTotal, [sub, qty]) => subTotal + (Number(qty || 0) * (sellingPrices[sub] || 0)),
        0
      )
    );
  }, 0);

  const totalProfit = totalRevenue - totalExpenses;

  const today = new Date();
  const formattedDate = `${today.getFullYear()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">දිනයේ ලාභය ගණනය කිරීම</h1>

      <div className="w-full max-w-sm space-y-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="font-bold mb-2">අදට සැපයූ සැපයුම්කරුවන්</h2>
          {Object.keys(vendorsWithSubcategories).map((vendor) => (
            <div key={vendor} className="mb-4">
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  checked={selectedVendors.includes(vendor)}
                  onChange={() => toggleVendor(vendor)}
                />
                {vendor}
              </label>


              {selectedVendors.includes(vendor) && (

<div className="space-y-2"> {vendorsWithSubcategories[vendor].map((sub) => ( <div key={sub} className="flex justify-between items-center"> <input type="number" placeholder={`${sub} ප්‍රමාණය`} className="p-2 rounded border w-2/3" value={(vendorsQuantities[vendor]?.[sub]) || ""} onChange={(e) => handleQuantityChange(vendor, sub, e.target.value)} /> <span className="text-sm"> Rs. {((vendorsQuantities[vendor]?.[sub] || 0) * (unitPrices[sub] || 0)).toFixed(2)} </span> </div> ))} <div className="mt-2 text-left"> <p className="font-semibold"> මුළු වියදම: Rs. {Object.entries(vendorsQuantities[vendor] || {}).reduce((total, [sub, qty]) => total + (Number(qty || 0) * (unitPrices[sub] || 0)), 0).toFixed(2)} </p> <p className="font-semibold"> ලාභය: Rs. {( Object.entries(vendorsQuantities[vendor] || {}).reduce((total, [sub, qty]) => total + (Number(qty || 0) * (sellingPrices[sub] || 0)), 0) - Object.entries(vendorsQuantities[vendor] || {}).reduce((total, [sub, qty]) => total + (Number(qty || 0) * (unitPrices[sub] || 0)), 0) ).toFixed(2)} </p> </div> </div> )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-4 mt-4">
          <h2 className="text-lg font-bold mb-2">{formattedDate} දින සාරාංශය</h2>
          <p>මුළු වියදම: Rs. {totalExpenses.toFixed(2)}</p>
          <p>මුළු ආදායම: Rs. {totalRevenue.toFixed(2)}</p>
          <p className="font-bold">ලාභය: Rs. {totalProfit.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
