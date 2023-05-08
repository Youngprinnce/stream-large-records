import { Transform, TransformCallback, TransformOptions } from 'stream';

interface MyTransformOptions extends TransformOptions {
  isWritten?: boolean;
}

export class MyTransform extends Transform {
  private isWritten: boolean;

  constructor(options?: MyTransformOptions) {
    super(options);
    this.isWritten = options?.isWritten ?? false;
  }

  _transform(chunk: any, encoding: string, callback: TransformCallback): void {
    if (!this.isWritten) {
      this.isWritten = true;
      callback(null, '[' + JSON.stringify(chunk));
    } else {
      callback(null, ',' + JSON.stringify(chunk));
    }
  }

  _flush(callback: TransformCallback): void {
    callback(null, ']');
  }
}
