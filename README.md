Customize the visible buttons in Vivaldi as you like! Change the position, icons, color, size and make the extension icons truly monochrome! You can place buttons and extensions wherever you like, add or remove spaces, and make the toolbar *compact*, `w i d e` or **HUGE**! 

Customization is possible via config in JS script. How to start

1. Go to C:\Program Files\Vivaldi\Application

2. Open the version folder.

3. Go to resources\vivaldi

4. Open the window.html file.

5. After the element `<body>` add the following line: `<script src="customise_buttons.js"/></script>`

6. Open the script and read the rules for filling out the config. Unnecessary parameters can be left empty:  `' '`. The `buttons` config must not contain **extensions**, and the `extensions` config must not contain **buttons**!

If you encounter any issues:

1. Type `vivaldi:inspect/#apps` in your browser

2. Find the line that contains `window.html`

3. Click `inspect`.

4. Click the `console` tab. Read the errors and fix the configuration.

If the issue persists, please send a screenshot from the tab.