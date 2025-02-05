// List function
function list(clients) {
    // Return the list of clients
    return clients.map((client, index) =>
        //Html template for each client
        `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$${client.balance}</strong>
      </li>
        `
    ).join(''); // Join the array of clients into a string
}

// Order function
function order(clients, property) {
    // Return the ordered list of clients
    return clients.sort((a, b) => {
        if (a[property] < b[property]) return -1; // If a is less than b, return -1
        if (a[property] > b[property]) return 1; // If a is greater than b, return 1
        return 0; // If a is equal to b, return 0
    });
}

// Total function
function total(clients) {
    // Return the total balance of all clients
    return clients.reduce((sum, client) => sum + client.balance, 0);
}

// Info function
function info(index) {
    // Return the client with the given index
    return clients.find((client) => client.index === index);
}

// Search function
function search(query) {
    // Return the clients that match the search
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}