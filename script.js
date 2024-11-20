const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        const current = e.target;
        const next = inputs[index + 1];
        
        if (current.value && next) {
            next.focus(); 
        }
    });

    input.addEventListener("keydown", (e) => {
        const current = e.target;
        const prev = inputs[index - 1];
        
        
        if (e.key === "Backspace" && !current.value && prev) {
            prev.focus();
        }
    });
});
