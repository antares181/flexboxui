import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import { TimelineMax } from 'gsap';

@Component({
  name: 'Sample'
})
export default class Sample extends Vue {
  // code
  loading: boolean = false;

  mounted() {
    this.loading = true;
    setTimeout(async () => {
      await this.playAnimation()
      this.loading = false;
    }, 3000);
  }

  playAnimation() {
    const hero: any = this.$refs.hero;
    // const hero: any = document.querySelector('.hero');
    const slider: any = this.$refs.slider;
    const logo: any = this.$refs.logo;
    const hamburger: any = this.$refs.hamburger;
    const headline: any = this.$refs.headline;

    const timeline = new TimelineMax;

    timeline
    .fromTo(hero, 1, {height: '0%'}, { height: '80%' })
    .fromTo(hero, 1.2, { width: '100%'}, {width: '80%'})
    .fromTo(slider, 1.2, { x: '-100%' }, { x: '0%' }, '-=1.2')
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
    .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.1')
    .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=1.1')
  }
}