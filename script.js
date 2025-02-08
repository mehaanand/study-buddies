const courseList = [
    "CSCI 1100", "CSCI 1100L", "CSCI 1210", "CSCI 1300", "CSCI 1300L",
    "CSCI 1301", "CSCI 1301L", "CSCI 1302", "CSCI 1360", "CSCI 1360E",
    "CSCI 1730", "CSCI 1900", "CSCI 2150", "CSCI 2150L", "CSCI 2610",
    "CSCI 2610E", "CSCI 2611", "CSCI 2670", "CSCI 2670E", "CSCI 2720",
    "CSCI 2725", "CSCI 3030", "CSCI 3030E", "CSCI 3030H", "CSCI 3360",
    "CSCI 4050", "CSCI 4050E", "CSCI 4060", "CSCI 4070", "CSCI 4080",
    "CSCI 4130", "CSCI 4140", "CSCI 4150", "CSCI 4170", "CSCI 4210",
    "CSCI 4250", "CSCI 4260", "CSCI 4270", "CSCI 4300", "CSCI 4330",
    "CSCI 4350", "CSCI 4360", "CSCI 4370", "CSCI 4380", "CSCI 4470",
    "CSCI 4490", "CSCI 4500", "CSCI 4520", "CSCI 4530", "CSCI 4540",
    "CSCI 4550", "CSCI 4560", "CSCI 4570", "CSCI 4600", "CSCI 4612",
    "CSCI 4670", "CSCI 4690", "CSCI 4720", "CSCI 4720E", "CSCI 4730",
    "CSCI 4740", "CSCI 4760", "CSCI 4770", "CSCI 4780", "CSCI 4795",
    "CSCI 4800", "CSCI 4810", "CSCI 4830", "CSCI 4835", "CSCI 4840",
    "CSCI 4850", "CSCI 4900", "CSCI 4910", "CSCI 4911", "CSCI 4922",
    "ENGR 4922", "CSCI 4950", "CSCI 4960", "CSCI 4970R", "CSCI 4980R",
    "CSCI 4990", "STAT 4990", "CSCI 4990R", "CSCI 5007", "CSCI 5310",
    "CSCI 7310"
];

const courseDropdown = document.getElementById("courses");
if (courseDropdown) {
    courseList.forEach(course => {
        let option = document.createElement("option");
        option.value = course;
        option.textContent = course;
        courseDropdown.appendChild(option);
    });
}
