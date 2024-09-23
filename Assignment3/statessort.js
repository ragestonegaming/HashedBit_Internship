// Array of Indian states
const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal"
  ];
  
  // Function to remove states starting with a vowel
  const filteredStates = states.filter(state => {
    // Check if the first letter is not a vowel (case insensitive)
    return !/^[AEIOU]/i.test(state);
  });
  
  // Output the filtered list
  console.log(filteredStates);
  