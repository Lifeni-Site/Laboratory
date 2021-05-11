interface IBaseWindow {
  app?: string;
  name?: string;
  title?: string;
  icon?: string;
  minimize?: boolean;
  maximize?: boolean;
  styles?: {
    left: string;
    top: string;
    'z-index': number;
    width: string;
    height: string;
    'min-width': string;
    'min-height': string;
    resize: 'both' | 'x' | 'y' | false;
  };
}
