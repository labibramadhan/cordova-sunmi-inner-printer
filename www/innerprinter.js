module.exports = {
  printerInit: function () {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printerInit", []);
    });
  },
  printerSelfChecking: function () {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printerSelfChecking", []);
    });
  },
  getPrinterSerialNo: function () {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "getPrinterSerialNo", []);
    });
  },
  getPrinterVersion: function () {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "getPrinterVersion", []);
    });
  },
  hasPrinter: function () {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "hasPrinter", []);
    });
  },
  getPrintedLength: function () {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "getPrintedLength", []);
    });
  },
  lineWrap: function (count) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "lineWrap", [count]);
    });
  },
  sendRAWData: function (base64Data) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "sendRAWData", [base64Data]);
    });
  },
  setAlignment: function (alignment) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "setAlignment", [alignment]);
    });
  },
  setFontName: function (typeface) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "setFontName", [typeface]);
    });
  },
  setFontSize: function (fontSize) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "setFontSize", [fontSize]);
    });
  },
  printTextWithFont: function (text, typeface, fontSize) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printTextWithFont", [text, typeface, fontSize]);
    });
  },
  printColumnsText: function (colsTextArr, colsWidthArr, colsAlign) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
    });
  },
  printBitmap: function (base64Data, width, height) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printBitmap", [base64Data, width, height]);
    });
  },
  printBarCode: function (barCodeData, symbology, width, height, textPosition) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printBarCode", [barCodeData, symbology, width, height, textPosition]);
    });
  },
  printQRCode: function (qrCodeData, moduleSize, errorLevel) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printQRCode", [qrCodeData, moduleSize, errorLevel]);
    });
  },
  printOriginalText: function (text) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printOriginalText", [text]);
    });
  },
  printString: function (text) {
    return new Promise(function (resolve, reject) {
      cordova.exec(resolve, reject, "Printer", "printString", [text]);
    });
  },
  printerStatusStartListener: function(onSuccess, onError) {
    cordova.exec(onSuccess, onError, "Printer", "printerStatusStartListener", []);
  },
  printerStatusStopListener: function() {
    cordova.exec(function() {}, function() {}, "Printer", "printerStatusStopListener", []);
  },
}
