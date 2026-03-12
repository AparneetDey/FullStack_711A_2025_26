const Expenses = [];

const header = document.querySelector("h1");
const container = document.querySelector("#container");
const expenseForm = document.querySelector("#form");
const totalExpenses = document.querySelector("#totalExpenses p");

const renderExpenses = () =>{
    header.innerHTML = `Expenses ${Expenses.length ? `(${Expenses.length})` : ""}`;

    if(Expenses.length) {
        container.innerHTML = Expenses.map((exp, ind) =>
            `
                <div class="expense">
                    <h3>${exp.name}</h2>
                    <p>Rs ${exp.amount}</p>
                    <p>${exp.category}</p>
                    <button class="delete" onclick="deleteExpense(${ind})">Delete</button>
                    <button class="update" onclick="updateExpense(${ind})">Update</button>
                </div>
            `
        ).join('');
    } else {
        container.innerHTML = '<h3 style="font-style: italic;">Add some expenses to track.</h3>'
    }
}

const addExpense = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newExpense = {
        id: Expenses.length + 1,
        name: formData.get('name'),
        amount: formData.get('amount'),
        category: formData.get('category')
    }

    console.log(formData.get('name'))
    Expenses.push(newExpense)

    renderExpenses();
    e.target.reset();
}

const updateExpense = (i) => {
    const currentExpense = Expenses[i];

    expenseForm["name"].value = currentExpense.name;
    expenseForm["amount"].value = currentExpense.amount;
    expenseForm["category"].value = currentExpense.category;

    Expenses.splice(i, 1);

    renderExpenses();
}

const deleteExpense = (i) => {
    const confirmation = confirm("Are you sure you want to delete the expense?");

    if(confirmation) {
        Expenses.splice(i, 1);
        renderExpenses()
    }
}

const calculateTotalExpenses = () => {
    const totalAmount = Expenses.reduce((acc, exp) => acc + Number(exp.amount), 0 );
 
    totalExpenses.innerHTML = totalAmount ? totalAmount : "Add some expenses to calculate total expense";
}

renderExpenses();