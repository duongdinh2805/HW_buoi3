let isEndPage;
const onScroll = async () => {
  const isEndPage =
    window.scrollY + window.innerHeight >= document.body.offsetHeight;
  console.log(isEndPage);
  if (isEndPage) {
    loading = true;
    const product = await loadProduct(currentPage);
    loading = false;
    if (products.length === 0) {
      isEnđata = true;
    } else {
      currentPage += 1;
    }
  }
};
window.addEventListener(`scroll`, onScroll);
