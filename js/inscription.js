
        // Écouteur d'événements pour limiter la longueur maximale du champ "username"
        document.getElementById('username').addEventListener('input', function() {
            if (this.value.length > 8) {
                this.value = this.value.slice(0, 8);
            }
        });
       
        
        function validateForm() {
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('verify-password').value;
            var balance = document.getElementById('balance').value;

        

            // Vérifier la longueur minimale et les critères du mot de passe
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/~\\-]).{8,}$/;

            if (!(password.length >= 8 && regex.test(password))) {
                alert("Le mot de passe doit contenir au moins un minus , un majus,un chiffre ,un symbole et de longeur 8 minimum !!! .");
                return false; // Annuler la soumission du formulaire
            }
            if (password !== confirmPassword) {
                document.getElementById('password-match-message').style.display = 'block';
                alert("Le mot de passe ne correpond pas !!! .");
                return false;}

            if (balance < 0 ) {
                document.getElementById('solde-message').style.display = 'block';
                alert("Le solde doit être un nombre positif( >=0) !!! .");
                
                return false; // Annuler la soumission du formulaire
            }
    


            return true; // Soumettre le formulaire normalement
        
    }