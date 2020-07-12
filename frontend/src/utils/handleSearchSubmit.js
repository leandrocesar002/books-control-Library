import history from '~/services/history';

export default function handleSearchSubmit(e) {
  e = e || window.event;
  if (e.keyCode === 13) {
    const elem = e.srcElement || e.target;

    if (elem.value !== '') {
      const commit = `?query=${elem.value}`;
      elem.value = '';
      history.push(commit);
    }
  }
}
