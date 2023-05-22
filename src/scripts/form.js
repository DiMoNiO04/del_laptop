let isValidatePhone = false;
let isValidateName = false;
let isValidateComment = false;
const VALIDATE_LENGTH_PHONE = 11;
const VALIDATE_LENGTH_COMMENT = 10;
const VALIDATE_LENGTH_NAME = 2;

// ------Общие функциии----------------
const getValueLength = (element) => element.value.length;
const getValue = (element) => element.value;
const validateElementLength = (element, length) => element < length;

const addErr = (ELEMENT_LABEL, NEW_VALUE_LABEL, isValidateElement) => {
  ELEMENT_LABEL.textContent = NEW_VALUE_LABEL;
  ELEMENT_LABEL.classList.add('err');
  isValidateElement = false;
  return isValidateElement;
};

const removeErr = (ELEMENT_LABEL, OLD_VALUE_LABEL, isValidateElement) => {
  ELEMENT_LABEL.textContent = OLD_VALUE_LABEL;
  ELEMENT_LABEL.classList.remove('err');
  isValidateElement = true;
  return isValidateElement;
};

const validatePhoneNumber = (phoneNumber) => {
  const preparedPhone = phoneNumber.replace(/\D/g, '');

  return preparedPhone === phoneNumber
        && phoneNumber.length === VALIDATE_LENGTH_PHONE
        && phoneNumber.slice(0, 2) === '80'
        && (phoneNumber.slice(2, 4) === '29'
          || phoneNumber.slice(2, 4) === '44'
          || phoneNumber.slice(2, 4) === '25'
          || phoneNumber.slice(2, 4) === '33'
        );
};

// ------------Name input------------------
const NAME_INPUT = document.getElementById('input__name');
const NAME_LABEL = document.getElementById('label__name');

NAME_INPUT.addEventListener('focus', () => {
  const OLD_VALUE_LABEL = 'Ваше имя';
  const NEW_VALUE_LABEL = 'Не менее 2-х символов';

  if (validateElementLength(getValueLength(NAME_INPUT), VALIDATE_LENGTH_NAME)) {
    isValidateName = addErr(NAME_LABEL, NEW_VALUE_LABEL, isValidateName);
  }

  NAME_INPUT.addEventListener('input', () => {
    if (validateElementLength(getValueLength(NAME_INPUT), VALIDATE_LENGTH_NAME)) {
      isValidateName = addErr(NAME_LABEL, NEW_VALUE_LABEL, isValidateName);
    } else {
      isValidateName = removeErr(NAME_LABEL, OLD_VALUE_LABEL, isValidateName);
    }
  });
});

// ----------Phone input---------------------
const PHONE_INPUT = document.getElementById('input__phone');
const PHONE_LABEL = document.getElementById('label__phone');

PHONE_INPUT.addEventListener('focus', () => {
  const OLD_VALUE_LABEL = 'Номер телефона';
  const NEW_VALUE_LABEL = '80-ХХ-ХХХ-ХХ-ХХ';

  if (!validatePhoneNumber(getValue(PHONE_INPUT))) {
    isValidatePhone = addErr(PHONE_LABEL, NEW_VALUE_LABEL, isValidatePhone);
  }

  PHONE_INPUT.addEventListener('input', () => {
    if (!validatePhoneNumber(getValue(PHONE_INPUT))) {
      isValidatePhone = addErr(PHONE_LABEL, NEW_VALUE_LABEL, isValidatePhone);
    } else {
      isValidatePhone = removeErr(PHONE_LABEL, OLD_VALUE_LABEL, isValidatePhone);
    }
  });
});

// --------------Comment input------------------
const COMMENT_INPUT = document.getElementById('input__comment');
const COMMENT_LABEL = document.getElementById('label__comment');

COMMENT_INPUT.addEventListener('focus', () => {
  const OLD_VALUE_LABEL = 'Комментарий';
  const NEW_VALUE_LABEL = 'Не менее 10 символов';

  if (validateElementLength(getValueLength(COMMENT_INPUT), VALIDATE_LENGTH_COMMENT)) {
    isValidateComment = addErr(COMMENT_LABEL, NEW_VALUE_LABEL, isValidateComment);
  }

  COMMENT_INPUT.addEventListener('input', () => {
    if (validateElementLength(getValueLength(COMMENT_INPUT), VALIDATE_LENGTH_COMMENT)) {
      isValidateComment = addErr(COMMENT_LABEL, NEW_VALUE_LABEL, isValidateComment);
    } else {
      isValidateComment = removeErr(COMMENT_LABEL, OLD_VALUE_LABEL, isValidateComment);
    }
  });
});

// ------------------Form submit-------------------
const FORM = document.getElementById('connect__form');
const ERROR = document.querySelector('.error');
const SUCCES = document.querySelector('.success');

const removeSuccesMsg = () => SUCCES.classList.remove('message');

FORM.addEventListener('submit', (event) => {
  if (isValidateName && isValidatePhone && isValidateComment) {
    event.preventDefault();

    const dataForServer = `
      Name: ${getValue(NAME_INPUT)},\nPhone: ${getValue(PHONE_INPUT)}, \nComment: ${getValue(COMMENT_INPUT)}
    `;
    alert(dataForServer);
    ERROR.classList.remove('message');
    SUCCES.classList.add('message');
    setTimeout(removeSuccesMsg, 1000);
  } else {
    event.preventDefault();

    ERROR.classList.add('message');
  }
});
