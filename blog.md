---
layout: default
---

<div class="wrapper">
    <h1 class="page-title" data-i18n="nav_blog">Blog</h1>
    
    <div class="blog-grid">
        {% for post in site.posts %}
        <div class="blog-card">
            <span class="blog-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            <h3 class="blog-title">
                <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">
                    {{ post.title }}
                </a>
            </h3>
            <p class="blog-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            
            <a href="{{ post.url | relative_url }}" class="read-more-btn">
                <span data-i18n="btn_read_more">Read Article</span> <i class="fas fa-arrow-right"></i>
            </a>
        </div>
        {% endfor %}
    </div>
</div>
