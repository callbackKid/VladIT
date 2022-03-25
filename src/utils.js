//Реализовать функцию, которая принимает в качестве аргумента объект любой 
//степени вложенности и преобразует все его ключи в верхний регистр.

  const keysToUpperKeys = (obj) => Object.keys(obj).reduce((acc, el) => {
    if (typeof obj[el] === 'object' && !Array.isArray(obj[el])) {
      return { ... acc, [el.toUpperCase()]: keysToUpperKeys(obj[el]) }
    }
  
    return { ...acc, [el.toUpperCase()]: obj[el] }
  }, {})