
$('#input-search').on('input', (e) => {
  const { length } = e.target.value;
  length > 0 ? $('.search-icon').addClass('hidden') : $('.search-icon').removeClass('hidden');
})

