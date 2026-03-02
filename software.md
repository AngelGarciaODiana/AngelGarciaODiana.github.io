---
layout: default
---

<div class="wrapper">
    <h1 class="page-title" data-i18n="nav_soft">Software</h1>
    
    <p style="color: var(--text-main); margin-bottom: 30px;" data-i18n="soft_intro">
        Colección de herramientas computacionales, algoritmos de análisis y simulaciones físicas.
    </p>

    <div class="project-grid">

        <div class="project-card" style="grid-column: 1 / -1;"> <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <i class="fas fa-meteor" style="font-size: 2rem; color: var(--accent);"></i>
                <h3 class="project-title" style="margin: 0;" data-i18n="soft_bh_title">Black Hole Simulation</h3>
            </div>
            
            <p class="project-desc" data-i18n="soft_bh_desc">
                Simulación de física computacional escrita en C puro. Modela los efectos de lente gravitacional y el cálculo de trayectorias de fotones (geodésicas nulas) alrededor de un agujero negro de Schwarzschild.
            </p>

            <div class="terminal-window">
                <div class="terminal-header">
                    <span class="terminal-button red"></span>
                    <span class="terminal-button yellow"></span>
                    <span class="terminal-button green"></span>
                    <span class="terminal-title">simulation_bh.c</span>
                </div>
                <div class="terminal-body">
<pre style="margin: 0;">
<span class="syntax-comment">// Calcula el radio de Schwarzschild</span>
<span class="syntax-type">double</span> <span class="syntax-function">calc_schwarzschild_radius</span>(<span class="syntax-type">double</span> mass) {
    <span class="syntax-keyword">return</span> (<span class="syntax-type">2.0</span> * G * mass) / (c * c);
}

<span class="syntax-comment">// Integración de Runge-Kutta para la trayectoria del fotón</span>
<span class="syntax-type">void</span> <span class="syntax-function">compute_photon_geodesic</span>(<span class="syntax-type">Vector3D</span>* pos, <span class="syntax-type">Vector3D</span>* vel, <span class="syntax-type">double</span> dt) {
    <span class="syntax-comment">/* * Implementación de la métrica $ds^2$
     * Cálculo tensorial y actualización de estado
     */</span>
    update_state_rk4(pos, vel, dt);
}
</pre>
                </div>
            </div>

            <div class="tech-stack">
                <span class="tech-tag">C</span>
                <span class="tech-tag">Computational Physics</span>
                <span class="tech-tag">Runge-Kutta 4</span>
                <span class="tech-tag">Tensor Calculus</span>
            </div>
            
            <div class="project-links" style="margin-top: 20px;">
                <a href="URL_A_TU_REPOSITORIO_GITHUB" target="_blank" class="talk-btn btn-github">
                    <i class="fab fa-github"></i> <span data-i18n="btn_repo">Repository</span>
                </a>
            </div>
        </div>

        </div>
</div>
