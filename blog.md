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
                    <span class="blog-meta-lang lang-es active">{{ post.title_es }}</span>
                    <span class="blog-meta-lang lang-en">{{ post.title_en }}</span>
                    <span class="blog-meta-lang lang-pt">{{ post.title_pt }}</span>
                    <span class="blog-meta-lang lang-ja">{{ post.title_ja }}</span>
                </a>
            </h3>

            <div class="blog-excerpt">
                <span class="blog-meta-lang lang-es active">{{ post.excerpt_es }}</span>
                <span class="blog-meta-lang lang-en">{{ post.excerpt_en }}</span>
                <span class="blog-meta-lang lang-pt">{{ post.excerpt_pt }}</span>
                <span class="blog-meta-lang lang-ja">{{ post.excerpt_ja }}</span>
            </div>
            
            <a href="{{ post.url | relative_url }}" class="read-more-btn">
                <span data-i18n="btn_read_more">Read Article</span> <i class="fas fa-arrow-right"></i>
            </a>
        </div>
        {% endfor %}
    </div>
</div>
