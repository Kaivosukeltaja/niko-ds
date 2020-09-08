import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'niko-ds',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'niko-ds',
      proxiesFile: '../niko-ds-react/src/components.ts',
    }),    
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
