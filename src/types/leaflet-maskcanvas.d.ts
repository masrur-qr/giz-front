import * as L from 'leaflet';

declare module 'leaflet' {
  namespace TileLayer {
    function maskCanvas(options?: MaskCanvasOptions): MaskCanvasLayer;
  }

  interface MaskCanvasLayer extends TileLayer {
    addData(data: Array<number[number]>): void;
  }

  interface MaskCanvasOptions {
    radius?: number;
    useAbsoluteRadius?: boolean;
    color?: string;
    opacity?: number;
  }
}