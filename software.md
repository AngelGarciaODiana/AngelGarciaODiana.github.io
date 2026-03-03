---
layout: default
---

<div class="wrapper">
    <h1 class="page-title" data-i18n="nav_soft">Software</h1>
    
    <p style="color: var(--text-main); margin-bottom: 30px;" data-i18n="soft_intro">
        Colección de herramientas computacionales, algoritmos de análisis y simulaciones físicas.
    </p>

    <div class="project-grid">

        <div class="project-card" style="grid-column: 1 / -1;"> <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                <i class="fas fa-meteor" style="font-size: 2rem; color: var(--accent);"></i>
                <h3 class="project-title" style="margin: 0;" data-i18n="soft_bh_title">Black Hole Showcase</h3>
            </div>
            
            <p class="project-desc" data-i18n="soft_bh_teaser_desc">
                High-performance computational physics written in pure C. The project models gravitational lensing effects and computes photon trajectories (null geodesics) around a Schwarzschild black hole. The repository is private, but you can request access.
            </p>

            <div class="showcase-container">
                
                <div class="showcase-visual">
                    <img src="{{ '/assets/img/black_hole.gif' | relative_url }}" alt="Black Hole Simulation View 1">
                    <img src="{{ '/assets/img/black_hole_2.gif' | relative_url }}" alt="Black Hole Simulation View 2">
                </div>

                <div class="showcase-terminal">
                    <div class="terminal-window">
                        <div class="terminal-header">
                            <span class="terminal-button red"></span>
                            <span class="terminal-button yellow"></span>
                            <span class="terminal-button green"></span>
                            <span class="terminal-title">schwarzschild_teaser.c (Closed Repo)</span>
                        </div>
                        <div class="terminal-body">
<pre style="margin: 0;">
<span class="syntax-keyword">#include</span> <span class="syntax-type">&lt;stdio.h&gt;</span>
<span class="syntax-keyword">#include</span> <span class="syntax-type">&lt;gsl/gsl_integration.h&gt;</span>

<span class="syntax-comment">// Teaser code: Logic not exposed</span>
<span class="syntax-type">void</span> <span class="syntax-function">calculate_null_geodesic</span>(<span class="syntax-type">double</span> *r, <span class="syntax-type">double</span> *phi, <span class="syntax-type">double</span> M, <span class="syntax-type">double</span> step) {
    <span class="syntax-comment">/* Schwarzschild metric integration logic here */</span>
}

<span class="syntax-type">int </span><span class="syntax-function">main</span>() {
    <span class="syntax-comment">// Output: Simulation running...</span>
    <span class="syntax-keyword">printf</span>(<span class="syntax-type">"Simulating black hole lensing...\n"</span>);
    <span class="syntax-keyword">return</span> <span class="syntax-type">0</span>;
}
</pre>
                        </div>
                    </div>
                </div>

            </div> <div class="tech-stack" style="margin-top: 20px;">
                <span class="tech-tag">C</span>
                <span class="tech-tag">Computational Physics</span>
                <span class="tech-tag">Runge-Kutta 4</span>
                <span class="tech-tag">General Relativity</span>
            </div>
            
            <div class="project-links" style="margin-top: 20px;">
                <a href="mailto:angelous.035@gmail.com?subject=Request%20Access%20to%20Black%20Hole%20Repo" class="talk-btn btn-github">
                    <i class="fas fa-key"></i> <span data-i18n="btn_request_repo">Request Access (Private Repo)</span>
                </a>
            </div>
        </div>

    </div>
</div>
