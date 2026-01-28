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
                    <i class="fas fa-envelope"></i> angelous.035@gmail.com
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
                    <a href="https://github.com/angelgarciaodiana"><i class="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/agarciaodiana"><i class="fab fa-linkedin"></i></a>
                    <a href="https://allmylinks.com/agarciao10"><i class="fas fa-link"></i></a>
                </div>
            </div>
        </div>

        <div class="contact-form-wrapper">
            <p style="color: var(--text-main); margin-bottom: 30px;" data-i18n="contact_msg">
                Interested in collaboration, PhD supervision, or just want to say hi? Send me a message.
            </p>

            <form action="https://formspree.io/f/angelous.035@gmail.com" method="POST">
                
                <div class="contact-form-group">
                    <input type="text" name="name" class="form-input" required>
                    <label class="form-label-float" data-i18n="form_name">Name</label>
                </div>

                <div class="contact-form-group">
                    <input type="email" name="email" class="form-input" required>
                    <label class="form-label-float" data-i18n="form_email">Email</label>
                </div>

                <div class="contact-form-group">
                    <textarea name="message" class="form-textarea" required></textarea>
                    <label class="form-label-float" data-i18n="form_message">Message</label>
                </div>

                <button type="submit" class="submit-btn" data-i18n="form_send">Send Message</button>
            </form>
        </div>

    </div>
</div>
