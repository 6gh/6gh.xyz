import type { Meta, StoryObj } from "@storybook/vue3";
import TechnologyCredit from "../components/TechnologyCredit.vue";

const meta: Meta<typeof TechnologyCredit> = {
  component: TechnologyCredit,
  title: "Credits/TechnologyCard",
};

export default meta;

export const Primary: StoryObj = {
  render: (args) => ({
    components: { TechnologyCredit },
    setup() {
      return { args };
    },
    template: "<TechnologyCredit v-bind='args' />",
  }),
  args: {
    name: "Card Name",
    description:
      "Aliquip amet deserunt duis esse et commodo adipisicing ea tempor.",
    image: "https://picsum.photos/seed/picsum/200/300",
    link: "https://picsum.photos/seed/picsum/200/300",
    linkText: "Link Text",
    icon: "pajamas:vue",
  },
};
