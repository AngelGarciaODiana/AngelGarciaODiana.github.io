---
layout: default
---

<div class="wrapper">
    <h1 class="page-title" data-i18n="nav_contact">Contact</h1>
    
    <div class="contact-container">
        
        <div class="contact-info-card">
            <div class="contact-method">
                <span class="contact-label" data-i18n="contact_email">Email</span>
                <a href="mailto:angelous.035@gmail.com" class="contact-value">
                    <i class="fas fa-envelope"></i> agarciao10@ucvvirtual.edu.pe
                </a>
            </div>

            <div class="contact-method">
                <span class="contact-label" data-i18n="contact_location">Location</span>
                <span class="contact-value">
                    <i class="fas fa-map-marker-alt"></i> Lima, Perú
                </span>
            </div>

            <div class="contact-method">
                <span class="contact-label" data-i18n="contact_social">Social Networks</span>
                <div class="social-icons" style="justify-content: flex-start; margin-top: 10px;">
                    <a href="https://github.com/angelgarciaodiana" aria-label="Perfil de GitHub de Angel García O'Diana"><i class="fab fa-github" aria-hidden="true"></i></a>
                    <a href="https://linkedin.com/in/agarciaodiana" aria-label="Perfil de LinkedIn de Angel García O'Diana"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://allmylinks.com/agarciao10" aria-label="All My Links de Angel García O'Diana"><i class="fas fa-link" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>

        <div class="contact-form-wrapper">
            <p style="color: var(--text-main); margin-bottom: 30px;" data-i18n="contact_msg">
                Interested in collaboration, PhD supervision, or just want to say hi? Send me a message.
            </p>

            <form action="https://formspree.io/f/xjgeqrpv" method="POST" aria-label="Formulario de contacto">
                
                <div class="contact-form-group">
                    <input id="contact-name" type="text" name="name" class="form-input" required>
                    <label for="contact-name" class="form-label-float" data-i18n="form_name">Name</label>
                </div>

                <div class="contact-form-group">
                    <input id="contact-email" type="email" name="email" class="form-input" required>
                    <label for="contact-email" class="form-label-float" data-i18n="form_email">Email</label>
                </div>

                <div class="contact-form-group">
                    <textarea id="contact-message" name="message" class="form-textarea" required></textarea>
                    <label for="contact-message" class="form-label-float" data-i18n="form_message">Message</label>
                </div>

                <button type="submit" class="submit-btn" data-i18n="form_send">Send Message</button>
            </form>
        </div>

    </div>
</div>
