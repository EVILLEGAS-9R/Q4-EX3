function scale() {
    var magnitudeInput = document.getElementById('magnitude').value;

       if (magnitudeInput >= 8) {
        window.alert("CATASTROPHIC");
      } 
      else if (magnitudeInput >= 7 && magnitudeInput <= 7.9) {
        window.alert("MAJOR");
      } 
      else if (magnitudeInput >= 6 && magnitudeInput <= 6.9) {
        window.alert("STRONG");
      } 
      else if (magnitudeInput >= 5 && magnitudeInput <= 5.9) {
        window.alert("MODERATE");
      } 
      else if (magnitudeInput >= 4 && magnitudeInput <= 4.9) {
        window.alert("LIGHT");
      } 
      else if (magnitudeInput >= 3 && magnitudeInput <= 3.9) {
        window.alert("MINOR");
      } 
      else if (magnitudeInput >= 1 && magnitudeInput <= 2.9) {
        window.alert("MICRO");
      } 
      else {
        window.alert("Invalid");
      }
}
    

