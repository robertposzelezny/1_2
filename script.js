(function () {
    document.querySelector("#ex1_button").addEventListener("click", () => {
        let btn1 = document.querySelector("#ex1_content");
        for (let i = 0; i < 10; i++) {
            btn1.textContent += `${i} `;
        }
    });
    let input = document.querySelector("#ex2_text");
    let info = document.querySelector("#ex2_content");
    input.addEventListener("input", () => {
        let text = input.value;
        let errors = [];

        if (text.length !== 9) errors.push("Długość numeru musi być równa 9");
        if (/\p{L}/u.test(text)) errors.push("Numer nie może zawierać liter");
        if (/[^0-9\p{L}]/u.test(text))
            errors.push("Numer nie może zawierać znaków specjalnych");

        info.textContent = errors.join("\n");

        if (errors.length == 0)
            info.textContent = "Numer telefonu jest poprawny";
    });

    let ex3_one = document.querySelector("#ex3_one");
    let ex3_two = document.querySelector("#ex3_two");
    let ex3_el = document.querySelector("#ex3_element");

    ex3_el.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    });
    ex3_two.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    ex3_two.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        ex3_two.appendChild(document.getElementById(id));
    });

    ex3_one.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    ex3_one.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        ex3_one.appendChild(document.getElementById(id));
    });
})();
