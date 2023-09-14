document.addEventListener("DOMContentLoaded", function() {
    var navigationContainer = document.getElementById("navigation-container");

var navigationHTML = `
<nav>
        <a href="/" class="navigation--left_link">
             <h2 class="navigation--left" id="bookstore-name"></h2>
        </a>
        <h2 class="navigation--left" id="bookstore-name"></h2>
        <div class="navigation--right">
         <div class="navigation__hamburger">
              <span class="navigation__hamburger-bar"></span>
              <span class="navigation__hamburger-bar"></span>
              <span class="navigation__hamburger-bar"></span>
        </div>
        <div class="navigation__menu">
            <a class="menu__item" href="../components/book-list.html">Book list</a>
            <a class="menu__item" href="../components/about.html">About</a>
            <a class="menu__item" href="../components/contacts.html">Contacts</a>
            <a class="menu__item" href="../components/order.html">Order</a>
        </div>
</nav>`;

navigationContainer.innerHTML = navigationHTML;

var hamburger = document.querySelector(".navigation__hamburger");
var dropdown = document.querySelector(".navigation__menu");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        dropdown.classList.toggle("active");
    });
});
fetch('../data.json')
.then(response => response.json())
.then(data => {
    document.getElementById('bookstore-name').textContent = data.NavigationInfo.Name;
})
.catch(error => console.error('Error fetching data: ' + error));
