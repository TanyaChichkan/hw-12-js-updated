import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import { alert, notice, info, success, error } from '@pnotify/core';

function showError() {
  return error({
    title: 'Oh No!',
    text: 'There is no such a country found. Try it again.',
    animateSpeed: 'fast',
    delay: 2000,
  });
}

function showNotice() {
  return notice({
    text: 'Too many matches found. Please enter a more specific query',
    animateSpeed: 'fast',
    delay: 2000,
  });
}

export { showError, showNotice };
