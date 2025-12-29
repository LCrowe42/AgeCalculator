document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("formsubmit");
    submit.addEventListener("click", calculateAge);
});

window.onload = function() {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const yearSelect = document.getElementById("yearin");

    for (let i = currentYear; i >= startYear; i--) { // loops through the years and add options
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    const monthSelect = document.getElementById("monthin");
    for (let i = 12; i >= 1; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }

    const daySelect = document.getElementById("dayin");
    for (let i = 31; i >= 1; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
};

function calculateAge() {
    document.getElementById("errormessage").textContent = "";
    const dayin = parseInt(document.getElementById("dayin").value,10);
    const monthin = parseInt(document.getElementById("monthin").value,10);
    const yearin = parseInt(document.getElementById("yearin").value,10);

    const birth = new Date(yearin,monthin-1,dayin)
    const today = new Date();

    if (today - birth < 0) {
        document.getElementById("errormessage").textContent = "*date must be in the past"
        return false;
    }

    var years = today.getFullYear() - birth.getFullYear();
    var months = today.getMonth() - birth.getMonth();
    var days = today.getDate() - birth.getDate();
    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(),today.getMonth(),0);
        days += previousMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12
        years--;
    }
    document.getElementById("yearsout").textContent = (years).toString();
    document.getElementById("monthsout").textContent = (months).toString();
    document.getElementById("daysout").textContent = (days).toString();
    return false;
}