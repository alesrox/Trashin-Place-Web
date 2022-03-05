var darkTheme = false;

var changeTheme = function() {
    if (darkTheme) {
        var [colorRemove, colorAdd] = ['bg-dark', 'bg-light'];
        var [classRemove, classAdd] = ['white-text', 'text-dark'];
        var mainColor = "#000";
        var iconColor = 'black';
        darkTheme = false;
    } else {
        var [colorRemove, colorAdd] = ['bg-dark', 'bg-light'].reverse();
        var [classRemove, classAdd] = ['white-text', 'text-dark'].reverse();
        var mainColor = "#fff";
        var iconColor = 'white';
        darkTheme = true;
    }

    var element = document.querySelector(":root");
    element.style.setProperty("--main-color-text", mainColor);
    element.style.setProperty("--icon-color", iconColor);

    const footer = document.querySelector('footer');
    footer.classList.remove(colorRemove);
    footer.classList.add(colorAdd);

    const subfooterLink = document.querySelector(".subfooter-link");
    subfooterLink.classList.remove(classRemove);
    subfooterLink.classList.add(classAdd);
}

changeTheme();