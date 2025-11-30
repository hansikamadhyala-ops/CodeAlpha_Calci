const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val");

        if (btn.id === "clear") {
            display.value = "";
        } 
        else if (btn.classList.contains("equals")) {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += val;
        }
    });
});
