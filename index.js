const utils = document.Utils;
(() => {
    const App = {
        htmlElements: {
            terminosycondiciones: document.querySelector('#terminosycondiciones'),
            politicasdeprivacidad: document.querySelector('#politicasdeprivacidad'),
            politicasdecookies: document.querySelector('#politicasdecookies'),
            terminosycondicionesdelusodelaapp: document.querySelector('#terminos-y-condiciones-del-uso-de-la-app'),
        },
        init: () => {
            App.methods.createAcordion(App.htmlElements.terminosycondiciones, "terminosycondiciones", 'terms&conditions');
            App.methods.createAcordion(App.htmlElements.politicasdeprivacidad, "politicasdeprivacidad", 'privacy-policy');
            App.methods.createAcordion(App.htmlElements.politicasdecookies, "politicasdecookies", 'cookies-policy');
            App.methods.createAcordion(App.htmlElements.terminosycondicionesdelusodelaapp, "terminosycondicionesdelusodelaapp", 'terms&conditions-app');
        },
        templates: {
            acordion: (acordionId, itemId, title, content) => {
                return `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading-${acordionId}-${itemId}">
                        <button class="accordion-button ${String(itemId) === "0" ? "" : "collapsed"}" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse-${acordionId}-${itemId}" aria-expanded="${String(itemId) === "0" ? "true" : ""}" aria-controls="collapse-${acordionId}-${itemId}">
                            ${title}
                        </button>
                    </h2>
                    <div id="collapse-${acordionId}-${itemId}" class="accordion-collapse collapse ${String(itemId) === "0" ? "show" : ""}" aria-labelledby="heading-${acordionId}-${itemId}"
                        data-bs-parent="#${acordionId}">
                        <div class="accordion-body">
                        ${content}
                        </div>
                    </div>
                </div>`
            },
            acordionContainer: (acordionId, items) => {
                return ` <div class="accordion" id="${acordionId}">${items}</div> `;
            }
        },
        methods: {
            createAcordion: (input, acordionId, type) => {
                // const acordionId = 'acordion';
                const items = utils.getData(type).map((item, index) => {
                    return App.templates.acordion(acordionId, index, item.title, item.content);
                }).join('');
                const acordionContainer = App.templates.acordionContainer(acordionId, items);
                input.innerHTML = acordionContainer;
            },
        }
    };
    App.init();
})()