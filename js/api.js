const URL = "js/contacts.json";

const postContactDetails = contact => {
    console.log(contact)
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }).then(resp => console.log(resp.json()));
};

export default postContactDetails