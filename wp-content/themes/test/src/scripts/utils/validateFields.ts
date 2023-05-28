export const validateFields = (text: string, field: string) => {
  let pattern = /^[\+]{0,1}380([0-9]{9})$/;

  if (field === 'name') {
    pattern = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,60}$/;
  }

  if (field === 'quantity') {
    pattern = /^(?:1000(?:\.00?)?|\d?\d?\d(?:\.\d\d?)?)$/
  }

  if (field === 'email') {
    pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  return !pattern.test(text);
};
