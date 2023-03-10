const useTag = () => {
  const rebuildTagA = () => {
    let a = document.getElementsByTagName("a");

    Array.from(a).forEach((el) => {
      el.addEventListener("click", (e) => {
        window.open(`${e.target.innerHTML}`);
      });
    });
  };
  return {
    rebuildTagA,
  };
};

export default useTag;
