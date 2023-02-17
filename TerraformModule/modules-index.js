/* Import and Export Main Libraries
 */
import * as React17 from 'react';
import * as ReactDOM17 from 'react-dom';
import * as Terraform from "@base22/dx-micro-interaction-components";
import "@base22/dx-micro-interaction-components/dist/cjs/index.css"

export const ReactV17 = {
    React: React17,
    ReactDOM: ReactDOM17,
    Terraform: Terraform
};
/* Export index file for the styles (added here to be able to share the filename of JS bundle's alias in Webpack entry config).
 */
export * from './styles-index.css'    