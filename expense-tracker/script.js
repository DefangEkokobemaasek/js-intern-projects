// Get elements
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addBtn = document.querySelector("button");
const clearBtn = document.querySelectorAll("button")[1];
const expenseList = document.querySelector("ul");
const totalSpan = document.querySelector("h2 span");

let total = 0;

// Add expense
addBtn.addEventListener("click", function () {
    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);

    if (name === "" || amount <= 0) {
        alert("Please enter valid expense and amount");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = `${name} - ${amount}`;

    // Highlight expensive items
    if (amount > 10000) {
        li.style.color = "red";
    }

    // Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = " CLOSE RESULT";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", function () {
        expenseList.removeChild(li);
        total -= amount;
        totalSpan.textContent = total;
    });

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);

    total += amount;
    totalSpan.textContent = total;

    expenseNameInput.value = "";
    expenseAmountInput.value = "";
});

// Clear all expenses
clearBtn.addEventListener("click", function () {
    expenseList.innerHTML = "";
    total = 0;
    totalSpan.textContent = total;
});
