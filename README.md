Customize the visible buttons in Vivaldi as you like! Change the position, icons, color, size and make the extension icons truly monochrome! You can place buttons and extensions wherever you like, add or remove spaces, and make the toolbar *compact*, `w i d e` or **HUGE**! 

![](screenshots/promo1.png)
![](screenshots/promo2.png)

# Let's get started

1. Download the archive with all the files:
![](screenshots/download.png)   

2. Go to `C:\Program Files\Vivaldi\Application`

3. Open the *version* folder.

4. Go to `resources\vivaldi`

5. Copy the `window.html`, `customise_buttons.js` files here and skip next step.

6.  Open the `window.html`. After the element `<body>` add the following line: `<script src="customise_buttons.js"/></script>`

7. Open the `customise_buttons.js`. For each button you want to customize, create/copy a code block that should look like this:
![](screenshots/files.png)   

8. Read the rules on how to work with these parameters. Explore already existing code blocks to better understand what values to enter!

   > Parameters you are not interested in can be blank:  `' '`. The `buttons` config must not contain **extensions**, and the `extensions` config must not contain **buttons**!  

I recommend you use these mods in conjunction with the script:
- https://github.com/JoyHak/Vivaldi-CSS-mods
- https://github.com/quartz1216/vivaldi-gutter

# Command chains
You can customize icons for command chains:
1. Create command chain in `Settings -> Quick commands -> Command chains section`. In my case it would be `Dark theme` and `Dev tools`:
![](screenshots/add_chain.png)
2. Add this command to the panel. Right click on panel, select `Customize toolbar` from context menu, select `Command chains` in the drop-down list, drag new chains to the panel and click `Done`.
![](screenshots/panel_chain.png)
3. Open `customise_buttons.js`, find `const buttons = [` line and add new item with command chain name:
```js
const buttons = [
        // Each item in {..} brackets represents single button
        {
            name:     'Dark theme',  // name should contain command chain name. It can be partial and case-insensitive: 'theme'
            hide:       false,
            toolbar:   'side',
            space:    '',
            position:  '',  // position doesn't matters here but you can specify exact position on toolbar [0 — max number of current buttons]
            svg:        '<svg fill="currentColor" viewBox="0 0 0.7 0.7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><path d="m 0.36584958,0.67060638 c -0.0183214,-7.56e-6 -0.036612,-0.001501 -0.0546919,-0.004468 C 0.12701605,0.63592354 0.00214561,0.46227037 0.03211678,0.2780885 0.04843716,0.17605537 0.11080183,0.08720801 0.20121552,0.03718323 c 0.0153735,-0.0085898 0.0343439,-0.0074268 0.0485531,0.0029765 0.014531,0.0099425 0.0210896,0.02732609 0.0178664,0.04463537 l -5.6588e-4,0.0024292 c -0.0266771,0.14150675 0.0540369,0.28127407 0.1899338,0.32889614 v 0 c 0.0506435,0.0175756 0.10512569,0.0209848 0.1575651,0.00986 0.036844,-0.007231 0.0660356,0.0308499 0.0494835,0.0645514 -0.0584658,0.11053887 -0.1731544,0.17979563 -0.29820196,0.18007454 z M 0.19984447,0.10896335 c -0.12126409,0.0891337 -0.13769965,0.25859868 -0.0366323,0.399372 0.17009995,0.17037169 0.34776783,0.0960092 0.42914441,-0.0144958 -0.0607408,0.0165303 -0.11162771,0.004044 -0.16935046,-0.015781 C 0.28112572,0.42116287 0.16947009,0.27376154 0.19984447,0.10896335 Z" id="path1" style="stroke-width:4.94047;stroke-dasharray:none" /></svg>'
        },  // don't miss the comma!
        {
            name:     'Dev tools',
            hide:       false,
            toolbar:   'side',
            space:     '',
            position:   '',
            svg:        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 496 472"><path d="M312 3q-8-4-16 .5T286 18L169 404q-4 18 15 25q8 4 16-.5t10-14.5L325 28q7-18-13-25zm45 320q14 14 30 0l106-107l-106-107q-16-14-30 0q-16 16 0 30l77 77l-77 77q-12 14 0 30zm-250 0q16 14 30 0q16-16 0-30l-75-77l77-77q16-14 0-30q-14-14-30 0L3 216z"/></svg>'
        }
]
```
   > Don't add this item to the `extensions` section!

# Icons
Here you can find the SVG code for the icons. Copy it and paste it in quotation marks `' '` in the `svg` parameter:
- https://pictogrammers.com/library/mdi/
- https://icons8.com/icon/set/SVG/
- https://freesvgicons.com
- https://www.flaticon.com

To match the color of other icons, use white. The script will take care of the rest. 

# If you encounter any issues
![](screenshots/console.png)

1. Type `vivaldi:inspect/#apps` in your browser or open `open_console.lnk`.

2. Find the line that contains `window.html`

3. Click `inspect`.

4. Click the `console` tab. Read the errors and fix them in the script.

If something is still not working **after your fixes**, [open the issue](https://github.com/JoyHak/customize-vivaldi-buttons/issues/new/choose) or or go to the [topic on the forum](https://forum.vivaldi.net/post/803412). Don't forget to attach a screenshot and a description of the problem!

# Performance

I optimised not only the speed but also the readability of the script. I documented many optimisation tricks. Customizing 10 normal buttons, changing and moving 4 extensions, changing 4 extensions on another toolbar takes just from 7ms to 11ms: 
![](screenshots/profiling_0.png)
![](screenshots/profiling_1.png)

I will be glad if you suggest improvements and innovations and find a workaround to the limitations.

# Limitations

- I can't move buttons from invisible panes: e.g. if I close the status bar, I can't move any button from it.

- After adding tabs to the tab bar, the svg icon's height attribute disappears. Fixed by assigning it manually, but it's weird.

- I can't load SVG/PNG icons from disc: I got `fetch error`. Chrome flags and settings do not fix the error.
  
- The SVG parser is currently replacing all types of `white` with `currentColor`, this makes it possible to change the color of all icons through the `buttons_color` global parameter. If the user uses a different color, such as blue, the icon color will not change through the parameter.
  
- The extensions popup window may go off the screen. To fix this, I need to somehow calculate the position and size of the window relative to the current position of the buttons. 

- I did not set up Mutation observer because of the infinite loop. It generates a change, which triggers mutation observer, which generates a change,... 
I had the idea of assigning a hidden html class to the panel that would tell the observer ‘stop, everything is fine, buttons added’.
- Initialisation of the script can be done via 
`addEventListener(‘DOMContentLoaded’, (event) => {})`, but I haven't tested this feature.
- I haven't figured out how to assign hotkeys to each button. This could fix the issue of non-working extension hotkeys in Vivaldi.

