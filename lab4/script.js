window.onload = async () => {
    let users = [];
    const addBtn = document.querySelector('.add');
    addBtn.onclick = addUser;
    const usersTable = document.querySelector('.usersTable');

    await getUsers().then(data => users = data);
    console.log(users);
    createTable(users,usersTable);

    async function deleteUser(id) {
        const response = await fetch('/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({_id: id}),
        })
        const result = await response.json();
        console.log(result);
        users = users.filter((item) => item._id !== result._id);
        console.log(users);
        createTable(users,usersTable);
    }

    async function addUser() {
        const name = document.getElementById('name');
        const age = document.getElementById('age');
        if (!name.value || !age.value) {
            alert('Input all values');
            return;
        }
        const user = {
            name: name.value,
            age: +age.value,
            test: "new",
        }
        const response = await fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user),
        })
        const result = await response.json();
        users.push(result);
        name.value = '';
        age.value = '';
        createTable(users,usersTable);
    }
    async function getUsers() {
        const response = await fetch('/user');
        if (response.ok) {
            const users = await response.json();
            return users
        } else {
            console.log(`Http errors - ${response.status}`)
            return []
        }
    }

    function createTable(users, element) {
        const buttons = ['Delete', 'Update'];
        element.innerHTML = '';
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        table.append(tbody);
        table.classList.add('table','table-success','table-bordered','table-striped');
        element.append(table);
        for (let element of users) {
            const tr = document.createElement('tr');
            tbody.append(tr);
            for(let key in element) {
                const td = document.createElement('td');
                td.innerHTML = element[key];
                tr.append(td);
            }
            for(const item of buttons) {
                const td = document.createElement('td');
                tr.append(td);
                const btn = document.createElement('button');
                const clBtn = item === 'Delete' ? 'btn-danger' : 'btn-info';
                btn.classList.add('btn', clBtn);
                td.append(btn);
                btn.innerHTML = item;
                btn.onclick = (event) => {
                    const target = event.target;
                    if (target.innerHTML === 'Delete') {
                        const td = target.parentElement.parentElement.firstChild;
                        console.log(td.innerText);
                        deleteUser(td.innerText);
                    }
                }
            }
        }
    }

}


