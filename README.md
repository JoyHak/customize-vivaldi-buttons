Customize the visible buttons in Vivaldi as you like! Change the position, icons, color, size and make the extension icons truly monochrome! You can place buttons and extensions wherever you like, add or remove spaces, and make the toolbar *compact*, `w i d e` or **HUGE**! 

![1](https://github.com/JoyHak/customize-vivalid-buttons/blob/main/screenshots/1.png)
![2](https://github.com/JoyHak/customize-vivalid-buttons/blob/main/screenshots/2.png)

# Customization is possible via `config` in JS script. How to start:

1. Go to `C:\Program Files\Vivaldi\Application`

2. Open the *version number* folder.

3. Go to `resources\vivaldi`

4. Open the `window.html` file.

5. After the element `<body>` add the following line: `<script src="customise_buttons.js"/></script>`

6. Open the script and read the rules for filling out the config. Unnecessary parameters can be left empty:  `' '`. The `buttons` config must not contain **extensions**, and the `extensions` config must not contain **buttons**!

   

I recommend you use these mods in conjunction with the script:

- https://github.com/JoyHak/Vivaldi-CSS-mods
- https://github.com/quartz1216/vivaldi-gutter

# If you encounter any issues:

1. Type `vivaldi:inspect/#apps` in your browser

2. Find the line that contains `window.html`

3. Click `inspect`.

4. Click the `console` tab. Read the errors and fix the configuration.

If the issue persists, please send a screenshot from the tab.

# Performance

I optimised not only the speed but also the readability of the script. I documented many optimisation tricks, as a result of which the average script execution time for 15 buttons was 7-11ms

![2](https://github.com/JoyHak/customize-vivalid-buttons/blob/main/screenshots/profiling_6.png)

I will be glad if you suggest improvements and innovations and find a workaround to the limitations.

# Limitations

- I can't move buttons from invisible panes: if I close the status bar, I can't move any button from it.

- After adding tabs to the tab bar, the svg icon's height attribute disappears, making it invisible. Fixed by assigning it manually.

- Can't load SVG/PNG icons from disc: browser gives `fetch error`. Not fixed in any way. 

- Animation and position of extension popup window needs to be calculated somehow, the window sometimes moves off the screen.  

- I never got over the mutation observer, as it entered a perpetual loop after observing the toolbar: mutation observer generates a change, which triggers mutation observer, which generates a change, ... 
  I had the idea of assigning a hidden html class to the panel that would tell the observer ‘stop, everything is fine, buttons added’, but I never got round to implementing it.

- Initialisation of the script should be done via 
  `addEventListener(‘DOMContentLoaded’, (event) => {})`, but I haven't tested this feature
