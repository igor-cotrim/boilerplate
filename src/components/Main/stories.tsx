import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default',
    description: 'default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'aksjhaksdjaksd',
  description: 'aksjdkajdaks'
}
export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'React avançado',
  description: '1231'
}
