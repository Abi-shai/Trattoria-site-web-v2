// /api/send-email.js
import { Resend } from 'resend';

// On instancie Resend avec la clé d'API
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // On s'assure que la méthode est POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // On récupère les données du formulaire depuis le corps de la requête
  const { name, email, message } = req.body;

  try {
    // On utilise Resend pour envoyer l'e-mail
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <abishaiyp.dev@gmail.com>', // Adresse d'envoi (doit être vérifiée ou onboarding@resend.dev)
      to: ['ton-adresse-email@gmail.com'],      // L'adresse où tu veux recevoir les e-mails
      subject: `Nouveau message de ${name} via ton site !`,
      html: `<p>Vous avez reçu un nouveau message de <strong>${name}</strong> (${email}).</p><p>Message :</p><p>${message}</p>`,
    });

    if (error) {
      return res.status(400).json(error);
    }

    // On envoie une réponse de succès
    res.status(200).json({ message: 'Email envoyé avec succès !', data });
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue.' });
  }
}