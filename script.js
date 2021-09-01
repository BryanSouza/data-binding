window.onload = () => {
    const container = ContainerComponent();
    updateDOM(container);
}

function updateDOM(container) {
    const app = document.querySelector('#root');

    const newApp = document.createElement('div');
    newApp.id = 'root';
    newApp.appendChild(container);

    app.replaceWith(newApp);
}

function ContainerComponent() {
    const container = document.createElement('div');

    const items = ['Tree', 'Flower', 'Sun', 'Air', 'Earth'];

    const listComponent = ListComponent(items);

    const showButtonComponent = document.createElement('button');
    showButtonComponent.textContent = 'show';

    showButtonComponent.addEventListener('click', () => {
        listComponent.classList.toggle('list--open');
    });

    container.appendChild(showButtonComponent);
    container.appendChild(listComponent);

    return container;
}

function ListComponent(list) {
    const listComponent = document.createElement('ul');
    listComponent.classList.add('list');

    list.forEach((item, index) => {
        const itemComponent = document.createElement('li');

        itemComponent.setAttribute('key', index);
        itemComponent.innerText = item;

        listComponent.appendChild(itemComponent);
    });

    return listComponent;
}