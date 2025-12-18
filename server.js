const express = require("express");
const app = express();

app.use(express.json());

// Validation inscription
app.post("/validate-signup", (req, res) => {
  const {
    email,
    password,
    confirmPassword,
    acceptTerms,
    acceptPrivacy
  } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Veuillez entrer votre email." });
  }

  if (!password) {
    return res.status(400).json({ error: "Veuillez créer un mot de passe." });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: "Le mot de passe doit contenir au moins 6 caractères."
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      error: "Les mots de passe ne correspondent pas."
    });
  }

  if (!acceptTerms) {
    return res.status(400).json({
      error: "Veuillez accepter les conditions d'utilisation."
    });
  }

  if (!acceptPrivacy) {
    return res.status(400).json({
      error: "Veuillez accepter la politique de confidentialité."
    });
  }

  res.json({ success: true, message: "Inscription valide" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Backend Render actif sur le port " + PORT);
});
