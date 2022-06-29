document.addEventListener("alpine:init", () => {
    Alpine.data("whichShift", () => ({

        message: "",
        shift: "",
        morningShift() {
            if (this.shift === "morning") {
                this.message = transportFee(this.shift);
            }
        },
        afternoonShift() {
            if (this.shift === "afternoon") {
                this.message = transportFee(this.shift);
            }
        },
        nightShift() {
            if (this.shift === "nightshift") {
                this.message = transportFee(this.shift);
            }
        }

    }))
})