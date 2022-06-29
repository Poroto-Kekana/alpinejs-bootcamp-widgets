document.addEventListener("alpine:init", () => {
  Alpine.data("enoughAirtimeWidget", () => ({
      airtimeUsage: '',
      availableAmount: '0.00',
      airtimeMessage: '',
      calculate() {
        alert('')
        this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.availableAmount);
      }
  }));
});
