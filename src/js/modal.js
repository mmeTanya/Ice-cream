  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-header]'),
      closeModalBtn: document.querySelector('[data-modal-close-header]'),
      modal: document.querySelector('[data-modal-header]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--hidden');
    }
  })();

    (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-header-mobile]'),
      closeModalBtn: document.querySelector('[data-modal-close-header-mobile]'),
      modal: document.querySelector('[data-modal-header-mobile]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('backdrop--hidden');
    }
  })();
  (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-two]'),
    closeModalBtn: document.querySelector('[data-modal-close-two]'),
    modal: document.querySelector('[data-modal-two]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-three]'),
    closeModalBtn: document.querySelector('[data-modal-close-three]'),
    modal: document.querySelector('[data-modal-three]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-modal-open]'),
    closeModalBtn: document.querySelector('[data-about-modal-close]'),
    modal: document.querySelector('[data-about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-franchise]'),
    closeModalBtn: document.querySelector('[data-modal-close-franchise]'),
    modal: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open-locations]'),
//     closeModalBtn: document.querySelector('[data-modal-close-locations]'),
//     modal: document.querySelector('[data-modal-locations]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('backdrop--hidden');
//   }
// })();

