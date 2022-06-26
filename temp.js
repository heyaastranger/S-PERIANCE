window.addEventListener('load', () => {
const params=(new URL(document.location)).searchParams;
const email=params.get('semail');

document.getElementById('semail').innerHTML= semail;

})