function transportFee(shift) {
    console.log(shift)
  if (shift === "morning") {
    return "R20";
  } else if (shift === "afternoon"){
    return "R10";
  } else {
    return "free";
  }
}