document.addEventListener("alpine:init", () => {
  Alpine.data("enoughAirtimeWidget", () => {
    return {
      airtimeUsage: '',
      availableAmount: '0.00',
      airtimeMessage: '',
      calculate() {
        this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.availableAmount);


        setTimeout(() => {
          this.airtimeMessage = '';
        }, 4000);
      }
    }

  })
});
