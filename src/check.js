'use strict';
function getMessage(a, b) {
  if (typeof a === 'boolean') {
    if (a) {
      return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    } else {
      return 'Переданное GIF-изображение не анимировано';
    }
  }
  if (typeof a === 'number') {
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' атрибутов';
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    var square = 0;
    for (var i = 0; i < a.length; i++) {
      square += (a[i] * b[i]);
    }
    return 'Общая площадь артефактов сжатия: ' + square + ' пикселей';
  }
  if (Array.isArray(a)) {
    var sum = 0;
    for (var j = 0; j < a.length; j++) {
      sum += a[j];
    }
    return 'Количество красных точек во всех строчках изображения: ' + sum;
  }
  return getMessage;
}

getMessage();
