const levelButtons = document.querySelectorAll('.level-buttons button');
        const levelInput = document.getElementById('nivell-academic');

        levelButtons.forEach(button => {
            button.addEventListener('click', () => {
                levelButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                levelInput.value = button.dataset.value;
            });
        });