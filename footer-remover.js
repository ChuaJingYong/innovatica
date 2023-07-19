function hideLogo() {
    const logo = document.querySelector('.w-webflow-badge');

    if (logo !== null) {
        logo.style.setProperty('display', 'none', 'important');
        logo.style.setProperty('opacity', '0', 'important');
    } else {
        setTimeout(hideLogo, 5); // wait 5ms then try again
    }
}

// Start the function
hideLogo();
