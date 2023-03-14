

// Buttons
const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");
const clearBtn = document.getElementById("clearBtn");

// Input Fields
let idVal = document.getElementById("id");
let articleNameVal = document.getElementById("article_name");
let articleBodyVal = document.getElementById("article_body");
let dateVal = document.getElementById("date");

// Output
let result = document.getElementById("result");

clearBtn.addEventListener("click", () => {
    document.forms[0].reset();
    result.innerHTML = "";
});

postBtn.addEventListener('click', () => {
    dateVal.value = new Date().toLocaleString();
    let data = new FormData(document.querySelector("form"));

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const resp = JSON.parse(this.responseText);
                result.innerHTML = `<pre>${JSON.stringify(resp, null, 2)}</pre>`;
            } else {
                console.log('Error:', this.statusText);
            }
        }
    };
    xhr.open('POST', `https://httpbin.org/post`);
    xhr.send(data);
});

getBtn.addEventListener('click', () => {
    dateVal.value = new Date().toLocaleString();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const resp = JSON.parse(this.responseText);
                result.innerHTML = `<pre>${JSON.stringify(resp, null, 2)}</pre>`;
            } else {
                console.log('Error:', this.statusText);
            }
        }
    };
    xhr.open('GET', `https://httpbin.org/get?id=${idVal.value}&article_name=${articleNameVal.value}&article_body=${articleBodyVal.value}&date=${dateVal.value}`);
    xhr.send();
});

putBtn.addEventListener('click', () => {
    dateVal.value = new Date().toLocaleString();
    let data = new FormData(document.querySelector("form"));
    
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const resp = JSON.parse(this.responseText);
                result.innerHTML = `<pre>${JSON.stringify(resp, null, 2)}</pre>`;
            } else {
                console.log('Error:', this.statusText);
            }
        }
    };
    xhr.open('PUT', `https://httpbin.org/put`);
    xhr.send(data);
});

deleteBtn.addEventListener('click', () => {
    dateVal.value = new Date().toLocaleString();
    let data = new FormData(document.querySelector("form"));
    
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const resp = JSON.parse(this.responseText);
                result.innerHTML = `<pre>${JSON.stringify(resp, null, 2)}</pre>`;
            } else {
                console.log('Error:', this.statusText);
            }
        }
    };
    xhr.open('DELETE', `https://httpbin.org/delete`);
    xhr.send(data);
});

