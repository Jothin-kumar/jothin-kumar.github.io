function displayMadeBy (bg, fg, shadow) {
    const element = document.createElement('a');
    const logo = document.createElement('img');
    const subtitles = document.createElement('p');
    logo.src = 'https://jothin.tech/favicon.png';
    logo.alt = 'Jothin kumar';
    logo.style.width = '20%';
    logo.style.height = '20%';
    logo.style.borderRadius = '50%';
    logo.style.padding = '5px';
    element.appendChild(logo);
    subtitles.innerText = 'Website made by Jothin kumar';
    subtitles.style.fontWeight = 'bold';
    subtitles.style.padding = '5px';
    element.appendChild(subtitles);
    element.style.position = 'fixed';
    element.style.bottom = '0';
    element.style.left = '0';
    element.style.margin = '5%';
    element.style.padding = '0';
    element.style.backgroundColor = bg;
    element.style.color = fg;
    element.style.zIndex = '100';
    element.style.fontSize = 'medium';
    element.style.boxShadow = '1px 1px 3px ' + shadow;
    element.style.textAlign = 'center';
    element.style.maxWidth = '10%';
    element.style.textDecoration = 'none';
    element.id = 'made-by-jothin-kumar-widget'
    element.href = 'https://jothin.tech' + '?utm_source=' + window.location.hostname + '&utm_medium=widget&utm_campaign=made-by-jothin-kumar-widget';
    document.body.appendChild(element);
    const additionalStyle = document.createElement('style');
    additionalStyle.innerText = '#made-by-jothin-kumar-widget:hover {box-shadow: 0px 0px 0px red; transform: scale(1.1);}';
    document.head.appendChild(additionalStyle);
}
