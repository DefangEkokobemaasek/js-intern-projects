const nameInput = document.getElementById("studentName");
const scoreInput = document.getElementById("studentScore");
const checkBtn = document.querySelector("button");
const clearBtn = document.querySelectorAll("button")[1];
const resultText = document.getElementById("resultText");
const studentList = document.querySelector("ul");

checkBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const score = Number(scoreInput.value);

    if (name === "" || score < 0 || score > 100) {
        alert("Please enter valid name and score (0 - 100)");
        return;
    }

    let grade = "";
    let color = "";

    if (score >= 90) {
        grade = "A";
        color = "green";
    } else if (score >= 80) {
        grade = "B";
        color = "lightgreen";
    } else if (score >= 70) {
        grade = "C";
        color = "yellow";
    } else if (score >= 60) {
        grade = "D";
        color = "orange";
    } else {
        grade = "F";
        color = "red";
    }

    resultText.textContent = `${name} scored ${score} — Grade: ${grade}`;
    resultText.style.color = color;

    const li = document.createElement("li");
    li.textContent = `${name} - ${score} (${grade})`;
    li.style.color = color;

    studentList.appendChild(li);
});

clearBtn.addEventListener("click", function () {
    nameInput.value = "";
    scoreInput.value = "";
    resultText.textContent = "No result yet";
    resultText.style.color = "black";
});
