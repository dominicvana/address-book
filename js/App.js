import Control from './Control';
import CreateContactModal from './CreateContactModal';
import SearchBar from './SearchBar';
import ConfirmDeleteModal from './ConfirmDeleteModal';

export default class App {
  static createContactModal;
  static confirmDeleteModal;
  static deletionEvent;

  static init() {
    const hook = document.getElementById('app');
    const controlElement = new Control(hook, 'div', 'control__container');
    // controlElement.render();
    // controlElement.initEventListeners();

    this.createContactModal = new CreateContactModal(hook, 'div', 'modal');
    this.confirmDeleteModal = new ConfirmDeleteModal(
      hook,
      'div',
      'modal confirm-delete'
    );
    // this.createContactModal.render();
    // this.deleteContactModal = new ConfirmDeleteModal(hook);
    // this.deleteContactModal.render();
    const searchBar = new SearchBar(hook);
    // searchBar.render();
  }

  static launchCreateContactModal() {
    this.createContactModal.modal.modalAnimateIn();
  }

  static launchConfirmDeleteModal(deletionEvent) {
    this.deletionEvent = deletionEvent;
    this.confirmDeleteModal.modalAnimateIn();
  }

  static deleteContact() {
    this.deletionEvent.target.parentElement.remove();
  }
}
