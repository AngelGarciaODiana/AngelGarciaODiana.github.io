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
                            <span class="terminal-title">black_hole_teaser.c (Closed Repo)</span>
                        </div>
                        <div class="terminal-body">
<pre style="margin: 0;">
<span class="syntax-comment">// <span data-i18n="bh_code_1">Bucle de simulación en tiempo real</span></span>
<span class="syntax-keyword">while</span> (!<span class="syntax-function">glfwWindowShouldClose</span>(engine.window)) {
    <span class="syntax-type">double</span> dt = <span class="syntax-function">glfwGetTime</span>() - lastTime;

    <span class="syntax-comment">// <span data-i18n="bh_code_2">1. Cinemática de N-Cuerpos (Fuerza Gravitacional)</span></span>
    <span class="syntax-comment">/* <span data-i18n="bh_code_3">Ecuaciones de movimiento y tensores de curvatura omitidos</span> */</span>
    <span class="syntax-function">update_gravitational_forces</span>(objects, dt, Gravity);

    <span class="syntax-comment">// <span data-i18n="bh_code_4">2. Renderizado por Compute Shaders (Geodésicas Nulas)</span></span>
    <span class="syntax-function">glViewport</span>(0, 0, engine.WIDTH, engine.HEIGHT);
    engine.<span class="syntax-function">dispatchCompute</span>(camera);
    engine.<span class="syntax-function">drawFullScreenQuad</span>();

    <span class="syntax-comment">// <span data-i18n="bh_code_5">3. Topología del Espacio-Tiempo (Malla de Curvatura)</span></span>
    engine.<span class="syntax-function">generateGrid</span>(objects);
    <span class="syntax-type">mat4</span> view = <span class="syntax-function">lookAt</span>(camera.<span class="syntax-function">position</span>(), camera.target, UP);
    <span class="syntax-type">mat4</span> viewProj = proj * view;
    engine.<span class="syntax-function">drawGrid</span>(viewProj);

    <span class="syntax-comment">// <span data-i18n="bh_code_6">4. Presentación en pantalla</span></span>
    <span class="syntax-function">glfwSwapBuffers</span>(engine.window);
    <span class="syntax-function">glfwPollEvents</span>();
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
                <a href="mailto:agarciao10@ucvvirtual.edu.pe?subject=Request%20Access%20to%20Black%20Hole%20Repo" class="talk-btn btn-github">
                    <i class="fas fa-key"></i> <span data-i18n="btn_request_repo">Request Access (Private Repo)</span>
                </a>
            </div>
        </div>

    </div>
</div>
