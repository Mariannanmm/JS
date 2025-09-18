let form = document.forms[0];
form.onsubmit = function(ev) {
    ev.preventDefault()
    let userId = this.userId.value;
    let title = this.title.value;
    let body = this.body.value;
    if (!!userId.match(/[0-9]/g) && !!body.match(/\w+\s{3,}/g)) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: +userId,
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }
    console.log(userId, title, body);
}


