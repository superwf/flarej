﻿//千分位转换
export function outputMoney(number, bit = 2) {
  let numO = number; //保存原先值
  if (isNaN(number) || number == '') {
    return '0';
  }

  number = number.toFixed(bit);
  try {
    if (number < 0) {
      return '-' + _outputDollars(Math.floor(Math.abs(number) - 0) + '') + _outputCents(Math.abs(number) - 0, bit);
    } else {
      return _outputDollars(Math.floor(number - 0) + '') + _outputCents(number - 0, bit);
    }
  } catch (e) { //出现异常时返回原先值
    return numO;
  }
}

function _outputDollars(number) {
  if (number.length <= 3) {
    return (number == '' ? '0' : number);
  } else {
    let mod = number.length % 3;
    let output = (mod == 0 ? '' : (number.substring(0, mod)));
    for (let i = 0, l = Math.floor(number.length / 3); i < l; i++) {
      if (mod == 0 && i == 0) {
        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
      } else {
        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
      }
    }

    return (output);
  }
}

function _outputCents(amount, bit) {
  if (bit != null) {
    amount = amount.toFixed(bit);
  } else {
    bit = 2;
  }

  if (bit > 0) {
    amount = (amount + '').match(/\.\d*$/g); //截取小数点及小数部分
    //amount = (amount + '').replace(/0+?$/g, '');  //去除小数点后多余的0
  } else {
    amount = '';
  }

  return amount;
}

//在1位数字前补零
export function fillZero(n) {
  n = '00' + n;
  return n.substr(n.length - 2);
}