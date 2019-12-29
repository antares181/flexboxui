import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { TimelineLite, Back } from 'gsap';

@Component({
  name: "home"
})
export default class Home extends Vue {
  mounted() {
    const { box } = this.$refs;
    const timeline = new TimelineLite();

    timeline.to(box, 1, {
      x: 200,
      rotation: 90,
      ease: Back.easeInOut // Specify an ease
    });
    timeline.to(
      box,
      0.5,
      {
        background: "green"
      },
      "-=0.5" // Run the animation 0.5s early
    );
  }
}