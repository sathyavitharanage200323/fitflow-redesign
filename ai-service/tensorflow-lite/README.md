# TensorFlow Lite (on-device)

On-device inference models bundled with the FitFlow mobile app. No server runtime.

## Layout

- `models/` - exported `.tflite` model files
- `src/` - native/RN integration (TFLite interpreter wrappers)

## Notes

- Export converter: `tf.lite.TFLiteConverter`
- Models must be quantized to keep bundle size small.