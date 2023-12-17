import { setup } from '@storybook/vue3';
import { action } from "@storybook/addon-actions";
import '../assets/css/tailwind.css';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

setup((app) => {
  app.component("NuxtLink", {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    methods: {
      log() {
        action("link target")(this.to);
      },
    },
    template: '<a @click="log"><slot></slot></a>',
  });
})

export default preview;
