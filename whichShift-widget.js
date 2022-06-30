document.addEventListener("alpine:init", () => {
    Alpine.data("whichShift", () => ({
        
        message: "",
        shift: "",
        morningShift() {
            this.shift = "morning";
            this.message = transportFee(this.shift);
            
        },
        afternoonShift() {
            this.shift = "afternoon";
            this.message = transportFee(this.shift);
        
        },
        nightShift() {
            this.shift = "nightshift";
            this.message = transportFee(this.shift);
        }
    }))
})