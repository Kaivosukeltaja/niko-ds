import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})

export class MyButton {
  @Prop({ reflect: true }) type: string;
  @Prop() icon: string = "";

  render() {
    return <button>
      <span>
        <my-icon name={this.icon} />
      </span>
      <slot />
    </button>;
  }
}
