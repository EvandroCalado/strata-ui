import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '@/components';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Card/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-[384px]">
      <CardHeader>
        <CardImage src="/strata-card.png" alt="Strata Card" />
      </CardHeader>

      <CardContent>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Is simply dummy text of the printing and typesetting industry.
          LoremIpsum has been the industry's standard dummy text ever since the
          1500s,when an unknown printer took a galley of type and scrambled.
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center gap-4">
        <Badge>React</Badge>
        <Badge>Next</Badge>
        <Badge>Vuejs</Badge>
      </CardFooter>
    </Card>
  ),
};
