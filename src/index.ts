import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the my_first_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'my_first_extension:plugin',
  description: 'show a random images of sapce related things',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension my_first_extension is activated!');
  }
};

export default plugin;
