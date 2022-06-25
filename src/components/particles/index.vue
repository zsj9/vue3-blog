<template>
  <vue-particles
    id="bg-particles"
    :clickEffect="true"
    :options="particlesOpts"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ParticlesComponent as VueParticles } from 'particles.vue3';

export default defineComponent({
  name: 'BackgroundParticles',
  components: {
    VueParticles,
  },
  setup() {
    const particlesOpts = {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: '#7d7d7d',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.2,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#7d7d7d',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 100,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 100,
            line_linked: {
              opacity: 0.3,
            },
          },
          bubble: {
            distance: 100,
            size: 40,
            duration: 8,
            opacity: 2,
            speed: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      detectRetina: true,
    };

    return {
      particlesOpts,
    };
  },
});
</script>

<style scoped>
#bg-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
