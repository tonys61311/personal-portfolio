<template>
    <div>
        <!-- <nav class="container-fluid">
            <ul>
                <li><strong>Portfolio</strong></li>
            </ul>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact" role="button">Contact</a></li>
            </ul>
        </nav> -->
        <main class="container">
            <div class="grid">
                <section class="fade-in-section">
                    <hgroup>
                        <h2>Welcome!</h2>
                        <h3>About Me</h3>
                    </hgroup>
                    <p>This is a brief introduction about myself, my skills, and my professional journey.</p>
                    <figure>
                        <img src="https://source.unsplash.com/random/800x600" alt="Profile Work Screenshot" />
                        <figcaption><a href="#" target="_blank">View My Work</a></figcaption>
                    </figure>
                    <h3>Skills</h3>
                    <p>Detailing my professional skills and competencies.</p>
                    <h3>Experience</h3>
                    <p>Summary of my professional experience and significant projects.</p>
                </section>
            </div>
        </main>
        <section aria-label="Subscribe example" class="fade-in-section">
            <div class="container">
                <article>
                    <hgroup>
                        <h2>Stay Updated!</h2>
                        <h3>Subscribe to My Newsletter</h3>
                    </hgroup>
                    <form class="grid">
                        <input type="text" id="firstname" name="firstname" placeholder="Your Name" aria-label="Your Name"
                            required />
                        <input type="email" id="email" name="email" placeholder="Your Email" aria-label="Your Email"
                            required />
                        <button type="submit" onclick="event.preventDefault()">Subscribe</button>
                    </form>
                </article>
            </div>
        </section>
        <footer class="container">
            <small>
                <a href="#">Privacy Policy</a> • <a href="#">Terms of Use</a>
            </small>
        </footer>
    </div>
</template>
  
<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.fade-in-section {
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
}
</style>

<script lang="ts">
export default {
    mounted() {
        let fadeInElements = document.querySelectorAll('.fade-in-section');
        window.addEventListener('scroll', () => {
            fadeInElements.forEach(element => {
                let elementPosition = element.getBoundingClientRect().top;
                let viewportHeight = window.innerHeight;
                if (elementPosition < viewportHeight - 100) {
                    (element as HTMLElement).style.animationPlayState = 'running';
                }
            });
        });
    }
}
</script>
