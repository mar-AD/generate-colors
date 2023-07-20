const btn = document.querySelector("#btn");
const generate = document.querySelector("#generate");
const warning = document.querySelector("#warnings");

btn.addEventListener("click", function(){

    const gen = generate.value.trim();
    if (!/^[a-fA-F0-9]+$/.test(gen)) {
        warning.textContent = "Invalid character found";
    } else if (gen.length < 3) {
        warning.textContent = "Don't write less than 3 digits";
    } else if (gen.length > 6) {
        warning.textContent = "Please enter exactly 6 characters";
    } else {
        document.body.style.backgroundColor = "#" + gen;
        generate.value = "";
        warning.textContent = "";
    }
});

