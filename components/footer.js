document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById("footer-container");

    const footerHTML = `
    <footer>
        <h5 class="footer__title" id="footer-info"></h5>
        <div class="footer__social-media">
            <a href="https://www.facebook.com/">
                <img
                    class="footer__icon"
                    src=""
                    id="fb-icon"
                    alt="social media facebook icon"
                />
            </a>
            <a href="https://instagram.com">
                <img
                    class="footer__icon"
                    src=""
                    id="ig-icon"
                    alt="social media instagram icon"
                />
            </a>
            <a href="https://twitter.com">
                <img
                    class="footer__icon"
                    src=""
                    id="tw-icon"
                    alt="social media twitter icon"
                />
            </a>
        </div>
    </footer>`;

    footerContainer.innerHTML = footerHTML;
});

fetch('../data.json')
.then(response => response.json())
.then(data => {
    document.getElementById('footer-info').textContent = data.FooterInfo.Text;
    document.getElementById('ig-icon').src = data.FooterInfo.InstagramIcon;
    document.getElementById('fb-icon').src = data.FooterInfo.FacebookIcon;
    document.getElementById('tw-icon').src = data.FooterInfo.TwitterIcon;
})
.catch(error => console.error('Error fetching data: ' + error));