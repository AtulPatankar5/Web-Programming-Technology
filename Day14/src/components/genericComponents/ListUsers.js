const users = [
    { id: '1', firstName: 'Shrilata', lastName: 'T' },
    { id: '2', firstName: 'Anita', lastName: 'Patil' },
];

// const users = []

//var users;

function ListUsers() {
    return (
        <div>
            <List list={users} />
        </div>
    );
}
function List({ list }) {
    if (!list) {
        return null;
    }
    if (!list.length) {
        return <p>Sorry, the list is empty.</p>;
    }
    return (
        <ul>
            {list.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    );
}
function Item({ item }) {
    return (
        <li>
            {item.firstName} {item.lastName}
        </li>
    );
}
export default ListUsers;