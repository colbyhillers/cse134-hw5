let alertDialogue = document.getElementById('alertDialogue');
let confirmDialogue = document.getElementById('confirmDialogue');
let promptDialogue = document.getElementById('promptDialogue');

export function showAlert() {
    alertDialogue.showModal();

    let closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', () => {alertDialogue.close()});
}

export function showConfirm() {
    confirmDialogue.showModal();

    let cancelBtn = document.getElementById('cancelBtn');
    let okBtn = document.getElementById('okBtn');
    let result = document.getElementById('result');

    cancelBtn.addEventListener('click', () => {
        result.innerText = 'The value returned by the confirm method is : False'; 
        confirmDialogue.close();
    });
    okBtn.addEventListener('click', () => {
        result.innerText = 'The value returned by the confirm method is : True'; 
        confirmDialogue.close();
    });
}

export function showPrompt() {
    promptDialogue.showModal();

    let cancelPromptBtn = document.getElementById('cancelPromptBtn');
    let okPromptBtn = document.getElementById('okPromptBtn');
    let result = document.getElementById('result');


    cancelPromptBtn.addEventListener('click', () => {
        result.innerText = 'User didn\'t enter anything';
        promptDialogue.close();
    });

    okPromptBtn.addEventListener('click', () => {
        result.innerHTML = 'Your name is ' + document.getElementById('name').value;
        promptDialogue.close();
    });

}
