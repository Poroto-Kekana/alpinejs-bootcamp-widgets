document.addEventListener("alpine:init", () => {
    Alpine.data("whichShift", () => ({
        
        message: "",
        shift: "",
        morningShift() {
            this.shift = "morning";
            this.message = transportFee(this.shift);

            setTimeout(() => {
                this.message = '';
            }, 4000);
            
        },
        afternoonShift() {
            this.shift = "afternoon";
            this.message = transportFee(this.shift);

            setTimeout(() => {
                this.message = '';
            }, 4000);
        
        },
        nightShift() {
            this.shift = "nightshift";
            this.message = transportFee(this.shift);

            setTimeout(() => {
                this.message = '';
            }, 4000);
        }
    }))
})