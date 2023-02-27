const options = {
  meats : ["Beef",
  "Pork",
  "Chicken",
  "Turkey",
  "Lamb",
  "Game",
  "Fish",
  "Vegetables"],
  cuts :{
    Beef: ["Brisket", "Short Ribs", "Tri-Tip", "Picanha", "Ribeye", "Sirloin", "FlatIron", "T-Bone", "Flank", "Skirt", "Hanger", "Strip/Loin", "Filet", "Chuck Roast", "Rib Roast",],
    Pork: ["Whole Hog", "Picnic Shoulder", "Boston Butt", "Whole Shoulder", "Spare Ribs", "St. Louis Style Ribs", "Baby Back Ribs", "Country Ribs", "Loin Chop", "Rib Chop", "Loin Roast", "Rib Roast", "Tenderloin", "Belly", "Bacon", "Ham", "Ham Hock"],
    Chicken: ["Whole Chicken - Trussed", "Whole Chicken - Spatchcocked", "Whole Chicken - Deboned and Rolled", "Crown Roast", "Bone In Breast", "Boneless Breast", "Boneless Skinless Breast", "Airline Breast", "Whole Leg", "Bone In Thigh", "Boneless Thigh", "Drumstick", "Whole Wing", "Wing Drumette", "Wing Flat", "Chicken Feet"],
    Turkey: ["Whole Turkey - Trussed", "Whole Turkey - Spatchcocked", "Whole Turkey - Deboned and Rolled", "Crown Roast", "Bone In Breast", "Boneless Breast", "Boneless Skinless Breast", "Airline Breast", "Whole Leg", "Bone In Thigh", "Boneless Thigh", "Drumstick", "Whole Wing", "Wing Drumette", "Wing Flat",],
    Lamb: ["Shoulder - Bone In, Square Cut", "Shoulder - Boneless, Rolled and Tied", "Blade Chop", "Arm Chop", "Neck Roast", "Whole Leg", "Center Leg Roast", "Boneless Leg Roast - Rolled and Tied", "Shank", "Loin Roast", "Loin Roast- Boneless, Rolled and Tied", "Saddle", "Loin Chop", "Tenderloin", "Rib Roast", "Rib Chop", "Belly", "Ribs"],
    // Game: {
    //   Duck: [],
    //   Quail: [],
    //   Pheasant: [],
    //   Grouse: [],
    //   Squab: [],
    //   Venison: [],
    //   Rabbit: []
    // },
    Fish: ["Salmon", "Swordfish", "Cod", "Halibut", "Mahi-Mahi", "Tilapia", "Flounder", "Fluke", "Skate", "Pollock", "Haddock", "Grouper", "Snapper", "Catfish", "Pike", "Mackerel", "Stripped Bass", "Branzino", "Bluefish", "Tuna", "Perch", "Walleye", "Rainbow Trout", "Steelhead Trout", "Monkfish", "Kingfish", "Amberjack", "Cobia", "Pompano", "Wahoo", "Tautog", "Black Bass", "Triple Tail", "Hogfish"],
    // Vegetables: []
  },
  cookingMethods : ["Webber Style Charcoal Grill", "Offset Chamber Smoker", "Pellet Smoker", "Gas Grill"]
};

export const { meats, cuts, cookingMethods } = options;