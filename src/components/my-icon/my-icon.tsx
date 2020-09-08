import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'my-icon',
  styleUrl: 'my-icon.css',
  shadow: true,
  assetsDirs: ['icons']
})

export class MyIcon {
  /**
   * The first name
   */
  @Prop() name: string = "arrow-right.svg";

  render() {
    return <img src={getAssetPath(`./icons/${this.name}`)} />;
  }
}
