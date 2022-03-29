document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector(".btn");
    let followers = document.querySelector(".followers")
    btn.addEventListener("click", function () {
        btn.classList.toggle('following')
        change();
    })
    function change() {
        if (btn.classList.contains('following')) {
            followers.textContent = parseInt(followers.textContent) + 1
            btn.innerHTML = 'Following <span class="fas fa-user-times"></span>';
        }
        else {
            followers.textContent = parseInt(followers.textContent) - 1
            btn.innerHTML = 'Follow <span class="fas fa-user-plus"></span>';
        }
    }
})