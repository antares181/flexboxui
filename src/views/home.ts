import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { TimelineMax } from 'gsap';

@Component({
  name: "home",
})
export default class Home extends Vue {
  // code
  loading: boolean = false;

  mounted() {
    this.loading = true;
    setTimeout(async () => {
      await this.playAnimation()
      this.loading = false;
    }, 2000);
  }

  playAnimation() {
    const logo: any = this.$refs.logo;
    const hamburger: any = this.$refs.hamburger;
    const titleHero: any = this.$refs.titleHero;
    const heading: any = this.$refs.heading;
    const subheading: any = this.$refs.subheading;
    const titleFooter: any = this.$refs.titleFooter;
    const soc1: any = this.$refs.soc1;
    const soc2: any = this.$refs.soc2;
    const soc3: any = this.$refs.soc3;
    const highFidelity: any = this.$refs.highFidelity;
    const lowFidelity: any = this.$refs.lowFidelity;
    const heroRight: any = this.$refs.heroRight;
    const contentFooter: any = this.$refs.contentFooter;

    const timeline = new TimelineMax;

    timeline
      .fromTo(heroRight, 1, { width: '0%' }, { width: '40%' })
      .fromTo(titleHero, 1.2, { opacity: 0, y: -10 }, { opacity: 1, y: 0 }, '-=.8')
      .fromTo(heading, 1.2, { opacity: 0, y: -10 }, { opacity: 1, y: 0 }, '-=.7')
      .fromTo(subheading, 1.2, { opacity: 0, y: -10 }, { opacity: 1, y: 0 }, '-=.9')
      .fromTo(contentFooter, 1, { opacity: 0, y: -15, height: '0vh' }, { opacity: 1, height: '15vh', y: 0 }, '-=2.5')
      .fromTo(titleFooter, .5, { opacity: 0 }, { opacity: 1}, '-=.5')
      .fromTo(soc1, .5, { opacity: 0 }, { opacity: 1}, '-=.5')
      .fromTo(soc2, .3, { opacity: 0 }, { opacity: 1}, '-=.3')
      .fromTo(soc3, .2, { opacity: 0 }, { opacity: 1}, '-=.2')
    //   .fromTo(slider, 1.2, { x: '-100%' }, { x: '0%' }, '-=1.2')
      .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
      .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.1')
      .fromTo(highFidelity, 1.5, { opacity: 0, x: 30}, { opacity: 1, x: 0}, '-=2.3')
      .fromTo(lowFidelity, 1.5, { opacity: 0, x: 60}, { opacity: 1, x: 0}, '-=1.3')
  }
}