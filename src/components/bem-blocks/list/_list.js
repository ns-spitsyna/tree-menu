const toggleList = (classNameList, classNameToggle) => {
    const itemsList = document.querySelectorAll(classNameList);

    itemsList.forEach(item => {
        item.addEventListener('click', (event) => {
            let target = event.target;
            if (target !== item) return;
            if(target.childNodes.length > 1) {
                target.classList.toggle(classNameToggle);
            }
        });
    });
};
