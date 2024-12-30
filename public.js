/*
	Customize visible Vivaldi buttons and extensions

	Author: 		rafaell0
*/
(async () => {
    'use strict';
/*・・・・☆・・・・・*.・・・・・・・・・・・・・・・・・・・・・・・・・・・✧・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・.·:·・・・・・・・・・・・・・・・・・・・・・・・・・・☆・・・・・・・・・・・・・・・*・・・
	Global appearance settings
	
	Leave parameters blank ('') to ignore them
	color:      color of all browser buttons (css hex value/name: #e71818/red)
	scale:      scale of all browser buttons (number/%, better number <= 1)
	space:      size of the config space buttons & 'space' element on the sidebar (%, px, pt, cm, etc.)

	vertical_space: 	vertical distance between buttons on the sidebar
	script_restart: 	key combination to manually restart a script/debug
	order_start: 		buttons will appear in the order in which they are specified in the 'buttons' config starting from the this position
・・・.·:·・・・・・・・☆・・・・・・・・・・・・・・・*・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・✦・・・・・・・・・・・.·:·.・・・・・・・・・・・☆・・・・・*.・・・・・・・・・・・・・・・・・・・・・・・・・・・✧・・・・・・・・・*/
	const global = {
        buttons : {
            color:          '',
            scale:          '',
            space:          '30px',
        },
        vertical_space: 	'30px',
		restart_script:		'Ctrl+Shift+F',
        order_start: 		''
	};
/*・・・・☆・・・・・*.・・・・・・・・・・・・・・・・・・・・・・・・・・・✧・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・.·:·・・・・・・・・・・・・・・・・・・・・・・・・・・☆・・・・・・・・・・・・・・・*・・・
    Customize your buttons!

    Leave parameters blank ('') to ignore them
    name:				the name you see when you hover mouse over the icon (fuzzy match)
    hide: 				true — completely hide the button from the toolbar
    toolbar: 			top/side/bottom/tab 	— 	address bar, sidebar, status bar or tab bar
    space: 				after/before/both 		— 	space between buttons. Value is equal to 'button_space' parameter
    position: 			number on the toolbar [0 — max number of current buttons]
    svg:				SVG code in one line without line breaks
・・・.·:·・・・・・・・☆・・・・・・・・・・・・・・・*・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・✦・・・・・・・・・・・.·:·.・・・・・・・・・・・☆・・・・・*.・・・・・・・・・・・・・・・・・・・・・・・・・・・✧・・・・・・・・・*/
    const buttons = [
        {
            name:        'Synced tabs',
            hide:        false,
            toolbar:     'side',
            space:       '',
            position:    2,
            svg:         ''
        },
         {
            name:        'Show closed tabs',
            hide:        false,
            toolbar:     'side',
            space:       '',
            position:    4,
            svg:         ''
         },
         {
            name:        'capture page',
            hide:        false,
            toolbar:     'side',
            space:       'after',
            position:    1,
            svg:         ''
         },
        // These extensions are part of the sidebar, they must be in this config!
        {
            name:       'Any.Do',
            hide:       false,
            toolbar:    'side',
            space:      '',
            position:   '',
            svg:        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg>'
        },
        {
            name:       'TickTick',
            hide:       false,
            toolbar:    'side',
            space:      '',
            position:   '',
            svg:        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C12.8 22 13.6 21.9 14.3 21.7C13.9 21.2 13.5 20.6 13.3 19.9C12.9 20 12.4 20 12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C12.8 4 13.5 4.1 14.2 4.3L15.8 2.7C14.6 2.3 13.3 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22M6.5 11.5L7.9 10.1L11 13.2L19.6 4.6L21 6L11 16L6.5 11.5M19 14L17.74 16.75L15 18L17.74 19.26L19 22L20.25 19.26L23 18L20.25 16.75L19 14Z" /></svg>'
        },
        {
            name:       'Tab Shelf',
            hide:       false,
            toolbar:    'side',
            space:      '',
            position:   '',
            svg:        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" fill-opacity="context-fill-opacity"><path d="M13 1 3 1a2 2 0 0 0-2 2l0 9a2 2 0 0 0 2 2l10 0a2 2 0 0 0 2-2l0-9a2 2 0 0 0-2-2zM2.85 2.25l10.3 0 .6.6 0 2.15-11.5 0 0-2.15.6-.6zm10.3 10.5-10.3 0-.6-.6 0-5.9 11.5 0 0 5.9-.6.6z"/></svg>'
        },
    ];
/*・・・・☆・・・・・*.・・・・・・・・・・・・・・・・・・・・・・・・・・・✧・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・.·:·・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・☆・・・・・・・・・・・・・・・*・・・・・・・・・・・・・・・・・
    Extensions and hidden extensions menu.
	You can place it simultaneously on sidebar and address bar directly in Vivaldi.
    Extensions buttons near the "hidden extensions menu" CANNOT BE SEPARATED FROM THIS CONFIG (extension container) 
	and CANNOT BE placed in any sidebar position like regular buttons!

    You can move all extensions:
    from:						top/side	— 	from address bar/sidebar
    to:							bottom/tab	— 	to  status bar/tab bar

    Leave parameters blank ('') to ignore them
    name:						the name you see when you hover mouse over the icon (fuzzy match)
    hide: 						true — completely hide the button from the toolbar
    space: 						after/before/both 	— 	space between extensions. Value is equal to 'button_space' parameter
    position: 					relative to the position of other extensions [0 — max number of current icons]
    svg:						SVG code in one line without line breaks
・・・.·:·・・・・・・・☆・・・・・・・・・・・・・・・*・・・・・・・・・・・・・・・・・・・・✦・・・・・・・・・・・.·:·.・・・・・・・・・・・☆・・・・・*.・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・✧・・・・・・・・・・・・・・・・・・・・・・・・*/
	const move = {
        enabled:    false,
        from:       'side',
        to:         'tab',
        position:   3
    };
    const extensions = [
        {
            name:       'show hidden extensions',
            hide:       true,
            space:      'before',
            position:   4,
            svg:        ''
        },
        {
            name:       'ublock',
            hide:       false,
            space:      '',
            position:   2,
            svg:        '<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-5.995 4-7.995 4-14 4 0 20.005 0 20.005 14 28 14-7.995 14-7.995 14-28-5.995 0-7.995 0-14-4zM7.943 9.964h2.016v6.047c0 1.76 0.249 2.011 2.015 2.011 1.767 0 2.016-0.256 2.016-2.016v-6.041h2.011v1.020c0.869-0.661 1.932-1.020 3.027-1.020 2.776 0.009 5.025 2.26 5.031 5.041-0.011 2.776-2.26 5.025-5.036 5.031-1.349-0.005-2.641-0.547-3.584-1.509-0.615 1.025-1.749 1.509-3.464 1.509-2.771 0-4.031-1.26-4.031-4.031zM19.021 11.979c-1.677-0.009-3.032 1.349-3.021 3.027-0.005 1.672 1.355 3.025 3.027 3.016 1.671 0.009 3.025-1.349 3.015-3.027 0.011-1.672-1.348-3.025-3.020-3.016z"/></svg>'
        },
        {
            name:       'Bitwarden',
            hide:       false,
            space:      '',
            position:   3,
            svg:        '<svg version="1.1" viewBox="0 0 800 800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><path d="M 714.04355,33.594262 C 707.86998,27.420689 700.2265,24.186913 691.7011,24.186913 H 120.79267 c -8.52541,0 -16.16888,3.233776 -22.342461,9.407349 -6.173563,6.173571 -9.407343,13.817042 -9.407343,22.34245 V 436.64032 c 0,28.51603 5.58561,56.4441 16.462854,84.37215 11.17122,27.92808 24.69429,52.62237 41.15715,74.37686 16.46285,21.75449 35.86551,42.62705 58.50194,63.20561 22.63642,20.57859 43.50898,37.6294 62.61766,51.15247 19.10867,13.52305 39.0993,26.45817 59.97184,38.51132 20.87256,12.05317 35.57154,20.28461 44.39093,24.40032 8.81939,4.40968 15.8749,7.64346 21.16653,9.99529 3.82174,2.05788 8.23144,2.93981 12.9351,2.93981 4.70368,0 8.81939,-0.88193 12.9351,-2.93981 5.29164,-2.35183 12.34715,-5.58561 21.16654,-9.99529 8.81939,-4.40971 23.51837,-12.34715 44.39093,-24.40032 20.87256,-12.05315 40.86317,-24.98827 59.97183,-38.51132 19.10868,-13.52307 39.98124,-30.57388 62.61766,-51.15247 22.63644,-20.57856 42.0391,-41.45112 58.50196,-63.20561 16.46285,-21.75449 29.98592,-46.44878 41.15714,-74.37686 11.17122,-27.92805 16.46286,-56.1501 16.46286,-84.37215 V 55.936712 c 0,-8.525408 -3.23378,-15.874898 -9.40734,-22.34245 z M 640.54864,440.16808 c 0,137.87645 -234.00779,256.35023 -234.00779,256.35023 V 105.61927 h 234.00779 z" id="path1" style="stroke-width:2.10073" /></svg>'
        },
        {
            name:       'cookie',
            hide:       false,
            space:      '',
            position:   4,
            svg:        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10 20,10 20,10H18V9C18,8 17,8 17,8H15V7C15,6 14,6 14,6H13V4C13,3 12,3 12,3M9.5,6A1.5,1.5 0 0,1 11,7.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 8,7.5A1.5,1.5 0 0,1 9.5,6M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M11.5,11A1.5,1.5 0 0,1 13,12.5A1.5,1.5 0 0,1 11.5,14A1.5,1.5 0 0,1 10,12.5A1.5,1.5 0 0,1 11.5,11M16.5,13A1.5,1.5 0 0,1 18,14.5A1.5,1.5 0 0,1 16.5,16H16.5A1.5,1.5 0 0,1 15,14.5H15A1.5,1.5 0 0,1 16.5,13M11,16A1.5,1.5 0 0,1 12.5,17.5A1.5,1.5 0 0,1 11,19A1.5,1.5 0 0,1 9.5,17.5A1.5,1.5 0 0,1 11,16Z" /></svg>'
        },
        {
            name:       'dark reader',
            hide:       false,
            space:      '',
            position:   0,
            svg:        '<svg fill="currentColor" viewBox="0 0 0.7 0.7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><path d="m 0.36584958,0.67060638 c -0.0183214,-7.56e-6 -0.036612,-0.001501 -0.0546919,-0.004468 C 0.12701605,0.63592354 0.00214561,0.46227037 0.03211678,0.2780885 0.04843716,0.17605537 0.11080183,0.08720801 0.20121552,0.03718323 c 0.0153735,-0.0085898 0.0343439,-0.0074268 0.0485531,0.0029765 0.014531,0.0099425 0.0210896,0.02732609 0.0178664,0.04463537 l -5.6588e-4,0.0024292 c -0.0266771,0.14150675 0.0540369,0.28127407 0.1899338,0.32889614 v 0 c 0.0506435,0.0175756 0.10512569,0.0209848 0.1575651,0.00986 0.036844,-0.007231 0.0660356,0.0308499 0.0494835,0.0645514 -0.0584658,0.11053887 -0.1731544,0.17979563 -0.29820196,0.18007454 z M 0.19984447,0.10896335 c -0.12126409,0.0891337 -0.13769965,0.25859868 -0.0366323,0.399372 0.17009995,0.17037169 0.34776783,0.0960092 0.42914441,-0.0144958 -0.0607408,0.0165303 -0.11162771,0.004044 -0.16935046,-0.015781 C 0.28112572,0.42116287 0.16947009,0.27376154 0.19984447,0.10896335 Z" id="path1" style="stroke-width:4.94047;stroke-dasharray:none" /></svg>'
        }
    ];

//・・・・END OF CONFIG, DON'T FORGET COMMAS ・・・.·:·・・・・・・・☆・・・・・・・・・・・・・・・*・・・・・・・

    function get_name(name, target = document, parent = true) {
        /*
            Get existing DOM element by its title attribute. This function is necessary for fuzzy match: it simplifies the search without knowing the selector.
            It's important to use parentNode for replacement because the search result is the child of the button, not the button itself!

            name: 		element title (visible name)
            target:		DOM element (document.body, container, sidebar etc)
            parent: 	True — return parent node, False — return the first element found
        */

        try {
            let element = target.querySelector(`.button-toolbar .ToolbarButton-Button[title*='${name}' i]`);
            return parent ? element.parentNode : element;
        } catch {
            throw new Error(`button wasn't found. Try changing the case/name. Open the toolbar which contains the button`);
        }
    }

    function get_toolbar(toolbars, name) {
        /*
            Get DOM toolbar in dictionary. This function is necessary for error handling

            toolbars:   dictionary with toolbar keys top/side/bottom/tab
            name: 	    dictionary key
        */

        if (!(name in toolbars))
            // Wrong key
            throw new Error(`toolbar "${name}" doesn't exist!`);
        else if (!toolbars[name]) {
            // Exist in dictionary but not presented in DOM (not opened)
            throw new Error(`toolbar "${name}" wasn't found because it's closed. Open it`);
        } else {
            return toolbars[name];
        }
    }

    //── APPEARANCE FUNCTIONS ────────────────────────────────────────────────────────────────────────────────────

    function add_space(button, space, vertical, value = global.buttons.space) {
        /*
            Adds a space to the specified button (applies a margin style in a specific direction)

            button: 	existing DOM element
            space: 		after/before/both
            vertical: 	true — margin-top,bottom; false — margin-right,left;
            value		length/percentage/auto/inherit — CSS value
        */
		
		if (!value) return;
        const s = {
            // Space			|  Vertical 	  	|  Horizontal
            after: 	vertical 	? 'marginBottom' 	: 'marginRight',
            before: vertical 	? 'marginTop' 		: 'marginLeft'
        };

        if (space === 'both') {
            // Apply both styles
            button.style[s.after]  = value;
            button.style[s.before] = value;
        } else {
            // Find & apply by 'space' value
            button.style[s[space]] = value;
        }
    }


    // SVG icon scale after adding to the toolbar
    const scale = {
        top:        0.53,
        side:       0.75,
        bottom:     0.6,
        tab:        0.6
    };
    let svg_parser = new DOMParser();

    function add_svg(button, svg, toolbar, color = "currentColor") {
        /*
            Adds a SVG icon to the specified button

            button: 	existing DOM element
            svg: 		SVG code
            toolbar: 	top/side/bottom/tab key
            color: 		value/name/currentColor (browser default)
        */

        // Replace all colors to browser default
        let svg_clear = svg.replace(/white/g, color).replace(/#ffffff/g, color).replace(/white/g, color).replace(/#FFFFFF/g, color);
        let svg_new = svg_parser.parseFromString(svg_clear, "image/svg+xml").documentElement;

        if (button.querySelector('svg'))
            button.querySelector('svg').replaceWith(svg_new);
        else if (button.querySelector('img'))
            button.querySelector('img').replaceWith(svg_new);
		
		// Attribute can be empty and the icon will disappear => add value
		svg_new.style.height = '28px';
        // New icon can be larger than the required size => make the icon smaller
        svg_new.style.transform = `scale(${scale[toolbar]})`;	
        svg_new.style.transformOrigin = 'center';
    }

	
	let global_css = document.createElement('style');
	// global_css.type = 'text/css';
			
	function apply_css() {
		document.getElementsByTagName('head')[0].appendChild(global_css);
	}
	
	function vertical_spacing() {
		
        const css = `
			/* Extensions spacing */
			#switch > .toolbar.toolbar-vertical .button-toolbar > button,
			
			/* Buttons spacing */			
			#switch > button, 
			#switch > .button-toolbar,
			#switch > * > .button-toolbar,
			#switch .addwebpanel-wrapper > button {
				height: ${global.vertical_space} !important;
			}
			
			/* 'space' element */
			#switch > div > div.button-toolbar.toolbar-spacer {
				height: ${global.buttons.space} !important;
			}
			
			/* Minimize 'space' element by disabling its 'flex' attr */
			.toolbar .toolbar-spacer,
			.toolbar .toolbar-spacer-panel {
				flex: 0;
			} 
		`;
		global_css.innerHTML += css;
	}
	
	function extensions_style() {
		const container = 'div.toolbar-extensions';
        const css = `
			/* Hide arrow */
			.button-popup-arrow-dark:before,
			.button-popup-arrow-light:before {
				display: none;
			}
			
			/* Extensions menu popup start params */
			#browser > div.extensionIconPopupMenu.ToolbarButtonPopup-DefaultStyles.button-popup.button-popup-center.button-popup-pos-below.button-popup-arrow-light.button-popup-appear.button-popup-appear-active
			{ 
				bottom: 27px !important;
				visibility: hidden !important;
			}
			
			/* Extensions menu popup animation */
			#browser > div.extensionIconPopupMenu.ToolbarButtonPopup-DefaultStyles.button-popup.button-popup-center.button-popup-pos-below.button-popup-arrow-light.button-popup-appear-done.button-popup-appear-done,
			#browser > div.extensionIconPopupMenu.ToolbarButtonPopup-DefaultStyles.button-popup.button-popup-center.button-popup-pos-below.button-popup-arrow-light.button-popup-appear-done.button-popup-enter-done
			{ 
				bottom: 27px !important;
				visibility: visible !important;
				transition: visibility 0.3s !important;
			}
			
			/* Extension window popup position */
			.extension-popup.right,
			.extension-popup.left,
			.extension-popup.bottom,
			.extension-popup.top {
				top: calc(100px + 50px) !important;
				left: 0 !important;
			}
			
			/* Disable extensions icons black border */
			button, input, select {
				border-width: 0 !important;
				border-color: unset !important;
			}
			
			/* Flexible container */
			${toolbars.tab} 	> ${container},
			${toolbars.bottom}  > ${container} {
				display: flex;
				flex-shrink: 0;
				flex-wrap: wrap;
				align-content: center;
			}
		`;
        global_css.innerHTML += css;
    }

    function buttons_style() {        
        const css = `
			.button-toolbar > button {
			    transform:  scale(${global.buttons.scale})  !important;
                color:      ${global.buttons.color}         !important;
            }
		`;
        global_css.innerHTML += css;
    }

	
    //── PLACE BUTTONS, EXTENSIONS ──────────────────────────────────────────────────────────────────────────────────

    async function place_buttons() {
        /*
            Place each button on the target toolbar according to its config

            config: 	dictionary with button configuration keys
            toolbars:	dictionary with toolbar keys top/side/bottom/tab
        */

        let   start 	= global.order_start;
        const is_order 	= start !== '';
		
        for (const {name, hide, toolbar, space, position, svg} of Object.values(buttons)) {				// all buttons configs
            if (name) {																				    // button enabled
                try {
                    // parallel check: after 1 error the code stops
                    const [button, target] = await Promise.all([
                        get_name(name),
                        get_toolbar(toolbars, toolbar)
                    ]);

                    if (hide) {
                        button.style['display'] = 'none';
                    } else {
                        if (svg)
                            await add_svg(button, svg, toolbar)
                        if (space)
                            await add_space(button, space, toolbar === 'side')
						if (position !== '') {
							let pos = is_order ? start++ : position;									// use global order or config order
							target.insertBefore(button, target.childNodes[pos]);
						}
                    }
                } catch (e) {
                    console.error(`${name}:`, e.message);
                }
            }
        }
    }

    async function place_ext(toolbar, target) {
        /*
            Place each extension on the target toolbar according to its config

            toolbar:	top/side/bottom/tab key
            target: 	DOM element
        */

        const vertical = toolbar === 'side';
        const childs = target.childNodes;
        const length = childs.length;

        for (const {name, hide, space, position, svg} of Object.values(extensions)) {			// all extensions configs
            if (name) {																		    // extension enabled
                try {
                    const button = await get_name(name, target);							// target already exists, otherwise place_extensions() is not called
                    if (hide) {
                        button.style['display'] = 'none';
                    } else {
                        if (svg)
                            await add_svg(button, svg, toolbar)
                        if (space)
                            await add_space(button, space, vertical)
						if (position !== '') {
							let pos = vertical ? (length - position) : position;			// sidebar needs reverse order
							target.insertBefore(button, childs[pos]);
						}
                    }
                } catch (e) {
                    console.error(`${name}:`, e.message);
                }
            }
        }
    }

    async function place_extensions() {
        /*
            Initialize the extensions placement in the extensions container

            ▬ If move.enabled:
                • get the source and target
                • move, select the moved container
                • place extensions in it
                • place extensions in the remaining container (side or top)
            ▬ Disabled or an error occurred (skip previous block):
                • extensions are placed in parallel for the top and side toolbars

            config: 	dictionary with button configuration keys
            toolbars:	dictionary with toolbar keys top/side/bottom/tab
        */

        // Existing containers
        const container = 'div.toolbar-extensions';
        let containers = {
            top:    toolbars.top.querySelector(container),
            side:   toolbars.side.querySelector(container)
        };
        if (move.enabled) {
            try {
                // get_panel() is actively used for error handling
                const {from, to, position} = move;
                // parallel check: without one the other will not work
                let [button, target] = await Promise.all([
                    get_toolbar(containers, from),
                    get_toolbar(toolbars, to)
                ]);

                // Move container to specified 'position'
                target.insertBefore(button, target.childNodes[position]);
                // Select container
                target = target.querySelector(container);

                // Move extensions
                await place_ext(to, target);
				// Fix container
				await extensions_style();

                // Remaining container (it may not exist - there is no need to catch the error)
                const remain_tbar = from === 'top' ? 'side' : 'top';
                const remain_cont = containers[remain_tbar];

                if (!remain_cont) return;
                await place_ext(remain_tbar, remain_cont);
                return;
            } catch (e) {
                console.error(`Extensions:`, e.message);
            }
        }
        // Place extensions regardless of errors and move
        if (containers.top)  await place_ext('top',  containers.top);
        if (containers.side) await place_ext('side', containers.side);
    }

    //── INITIALIZATION ───────────────────────────────────────────────────────────────────────────────

    let toolbars;
    async function init_script() {
        /*
            Initialize the script after loading the browser.
            Some toolbars will appear only after manual opening => you need to run the entire script again using this function
             A wait_time timer is being created. If the browser has loaded within wait_time ms:
                • a dictionary of all necessary toolbars is created
                • each passed function with parameters is called

            functions:	array of functions & arguments
        */

        // Time params
        const start_time = Date.now();
        const check_interval = 1000;	// It is not recommended to set it very small for weak devices
        const wait_time = 10000;

        //━━ START TIMER & CHECK EVERY CHECK_INTERVAL MS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        while (Date.now() - start_time < wait_time) {
            const element = document.getElementById('browser');

            //── BROWSER HAS LOADED ────────────────────────────────────────────────────────────────────────
            if (element) {
                toolbars = {
                    top:        document.querySelector('#main > div.mainbar > div > div'),
                    side:       document.querySelector('#switch > div'),
                    bottom:     document.querySelector('#footer > div'),
                    tab:        document.querySelector('#tabs-container')
                };

                // Place
                await place_buttons()
                await place_extensions()
				
				// Create CSS style
				await vertical_spacing()
                await buttons_style()
                return;
            }
            //── THE BROWSER HAS NOT LOADED YET ────────────────────────────────────────────────────────────
            await new Promise(resolve => setTimeout(resolve, check_interval));
        }
        //━━ THE BROWSER DIDN'T LOAD AT ALL! ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        console.error(`browser not loaded after ${wait_time}ms! Unable to start script`);
    }

    // Start
    init_script();
    apply_css();
	
    // Restart
	const restart = global.restart_script;
    if (restart) { 
        vivaldi.tabsPrivate.onKeyboardShortcut.addListener((id, combination) => combination === restart && init_script());
    }

})();

