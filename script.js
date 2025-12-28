function calculateAge() {
    const dayin = parseInt(document.getElementById("dayin").value,10);
    const monthin = parseInt(document.getElementById("monthin").value,10);
    const yearin = parseInt(document.getElementById("yearin").value,10);

    const birth = new Date(yearin,monthin-1,dayin)
    const today = new Date();

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