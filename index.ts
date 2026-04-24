// Задание 1
function checkPassword(password: string): boolean {
  if (password.length >= 6) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPassword("qwerty")); // true (6 символов)
console.log(checkPassword("abс")); // false (меньше 6 символов)

// Задание 2
const element = document.querySelector("#myButton") as HTMLElement

element.addEventListener('click', () => {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
});

