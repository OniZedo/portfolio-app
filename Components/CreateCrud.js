export default async function postData(data) {
    const rawResponse = await fetch('https://crudcrud.com/api/fcf8726cc4ec4073ae6cda83e70dfdf9/username', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
    return content;
}
