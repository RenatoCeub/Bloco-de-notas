document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    const fileNameInput = document.querySelector('.file-name input');
    const selectMenu = document.querySelector('.save-as select');
    const saveBtn = document.querySelector('.save-btn');

    selectMenu.addEventListener('change', () => {
        const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
        saveBtn.innerText = `Salvar Como ${selectedFormat.split(' ')[0]}`; // Atualiza o texto do botão
    });

    saveBtn.addEventListener('click', () => {
        const fileType = selectMenu.value;
        const fileName = fileNameInput.value || 'document';
        
        let blob;
        let extension;

        switch (fileType) {
            case 'text/plain':
                blob = new Blob([textarea.value], { type: 'text/plain' });
                extension = 'txt';
                break;
            case 'application/xml':
                blob = new Blob([textarea.value], { type: 'application/xml' });
                extension = 'xml';
                break;
            case 'application/msword':
                blob = new Blob([textarea.value], { type: 'application/msword' });
                extension = 'doc';
                break;
            default:
                console.error('Tipo de arquivo não suportado.');
                return;
        }

        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${fileName}.${extension}`;
        link.href = fileUrl;
        link.click();
        
    });

    const initialFormat = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Salvar Como ${initialFormat.split(' ')[0]}`;
});
