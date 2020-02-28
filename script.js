const insert = number => {
    document.form.textview.value = document.form.textview.value + number
}

const clean = () => {
    document.form.textview.value = ""
}
const cancel = () => {
    let equation = document.form.textview.value;
    document.form.textview.value = equation.substring(0, equation.length - 1);
}
const equal = () => {
    let equation = document.form.textview.value;
    if(equation) {
        document.form.textview.value = eval(equation);
    }
}